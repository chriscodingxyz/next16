'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Globe } from 'lucide-react'
import { Project } from '@/types'
import { cn } from '@/lib/utils'

interface ProjectsSectionProps {
  projects: Project[]
  isActive: boolean
  onClick: () => void
}

export function ProjectsSection({ projects, isActive, onClick }: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-rotate featured project (only when not hovering)
  useEffect(() => {
    if (isHovering) return // Don't auto-rotate when user is hovering

    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % projects.length)
    }, 3000) // Change every 3 seconds
    return () => clearInterval(interval)
  }, [isHovering, projects.length])

  return (
    <section
      className={cn(
        'w-[calc(100%+2rem)] -mx-4 md:w-[calc(100%+8rem)] md:-mx-16 -ml-4 md:-ml-16 relative transition-all duration-300 [grid-area:1/1] pointer-events-none',
        isActive ? 'z-20' : 'z-10'
      )}
    >
      {/* Folder tab - raised portion starting from left - always visible and clickable */}
      <div
        className='inline-block relative z-50 cursor-pointer pointer-events-auto'
        onClick={onClick}
      >
        <div className='bg-zinc-100 px-6 py-3 rounded-t-2xl hover:brightness-95 transition-all'>
          <h2 className='text-3xl md:text-4xl font-bold font-space-grotesk text-black tracking-tight'>
            projects
          </h2>
        </div>
      </div>

      {/* Main folder body - hidden when not active */}
      <div
        className='relative bg-zinc-100 pb-24 px-4 md:px-16 pt-4 space-y-4 rounded-tr-[3rem] pointer-events-auto'
        style={{
          display: isActive ? 'block' : 'none',
          marginRight: '9rem'
        }}
      >

        {/* Rotating Width Layout - 2 visible on mobile with sliding, 4 on desktop */}
        <div className='overflow-hidden md:overflow-visible'>
            <div
              className='flex flex-row gap-3 transition-transform duration-700 ease-in-out'
              style={{
                transform: isDesktop
                  ? 'translateX(0)'
                  : `translateX(${
                      activeProject >= 2 ? 'calc(-100% - 0.75rem)' : '0'
                    })`
              }}
            >
              {projects.map((project, index) => {
                const isActive = index === activeProject

                // Calculate widths for mobile carousel
                let mobileWidth
                if (isDesktop) {
                  mobileWidth = 'auto'
                } else {
                  // Determine which pair this project belongs to
                  const isInFirstPair = index <= 1
                  const showingFirstPair = activeProject <= 1

                  // Calculate width based on whether it's active in its pair
                  const isActivePairMember =
                    (isInFirstPair && showingFirstPair) ||
                    (!isInFirstPair && !showingFirstPair)

                  if (isActivePairMember) {
                    // Visible pair: active gets 2/3, inactive gets 1/3
                    // KEY FIX: Use 100% (parent container width) not 100vw
                    mobileWidth = isActive
                      ? 'calc((100% - 0.75rem) * 2 / 3)'
                      : 'calc((100% - 0.75rem) / 3)'
                  } else {
                    // Off-screen pair: maintain similar proportions
                    const wouldBeActiveInPair =
                      (isInFirstPair && index === 0) ||
                      (!isInFirstPair && index === 2)
                    mobileWidth = wouldBeActiveInPair
                      ? 'calc((100% - 0.75rem) * 2 / 3)'
                      : 'calc((100% - 0.75rem) / 3)'
                  }
                }

                return (
                  <a
                    key={index}
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative block transition-all duration-700 ease-in-out shrink-0'
                    style={{
                      width: mobileWidth,
                      flex: isDesktop ? (isActive ? '2' : '1') : '0 0 auto'
                    }}
                    onMouseEnter={() => {
                      setIsHovering(true)
                      setActiveProject(index)
                    }}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveProject(index)
                    }}
                  >
                    <div className='relative w-full h-64 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-zinc-300'>
                      <Image
                        src={project.image}
                        alt={project.name}
                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                      />

                      {/* Overlay with project name - visible when active or on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-opacity duration-300 ${
                          isActive
                            ? 'opacity-100'
                            : 'opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        <div className='absolute bottom-0 left-0 right-0 p-4'>
                          <div
                            className={`flex items-center justify-between transition-opacity duration-300 delay-300 ${
                              isActive ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <h3 className='text-base font-semibold text-white drop-shadow-lg'>
                              {project.name}
                            </h3>
                            <Globe className='h-4 w-4 text-white drop-shadow-lg' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
      </div>
    </section>
  )
}
