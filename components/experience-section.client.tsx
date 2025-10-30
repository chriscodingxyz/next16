'use client'

import { Calendar, Globe, MapPin } from 'lucide-react'
import { Experience } from '@/types'
import { cn } from '@/lib/utils'

interface ExperienceSectionProps {
  experiences: Experience[]
  isActive: boolean
  onClick: () => void
}

export function ExperienceSection({
  experiences,
  isActive,
  onClick
}: ExperienceSectionProps) {
  return (
    <section
      className={cn(
        'w-[calc(100%+2rem)] -mx-4 sm:w-[calc(100%+8rem)] sm:-mx-16 -ml-4 sm:-ml-16 relative transition-all duration-300 [grid-area:1/1] pointer-events-none',
        isActive ? 'z-20' : 'z-10 mt-2'
      )}
    >
      {/* Folder tab - raised portion at far right on mobile, next to projects on desktop - always visible and clickable */}
      <div className='flex justify-end sm:justify-start -mb-12'>
        <div
          className='inline-block relative z-50 sm:ml-48 cursor-pointer pointer-events-auto hover:-translate-y-1 transition-transform'
          onClick={onClick}
        >
          <div className='bg-foreground px-6 pt-3 pb-16 rounded-t-2xl'>
            <h2 className='text-3xl sm:text-4xl font-bold font-space-grotesk text-white tracking-tight'>
              experience
            </h2>
          </div>
        </div>
      </div>

      {/* Main folder body */}
      <div
        className={cn(
          'relative bg-foreground rounded-t-[3rem] z-60',
          isActive
            ? 'pb-8 px-4 sm:px-16 pt-4 space-y-4 pointer-events-auto min-h-[50vh]'
            : 'invisible'
        )}
      >
        <div
          className={cn('overflow-hidden rounded-lg', !isActive && 'hidden')}
        >
          {experiences.map(experience => (
            <div
              key={experience.id}
              className='relative py-3 px-4 sm:py-4 sm:px-6'
            >
              <div className='flex gap-4 sm:gap-6'>
                {/* Date */}
                <div className='flex items-start gap-2 min-w-24 sm:min-w-28 shrink-0 pt-1'>
                  <Calendar className='h-4 w-4 text-red-500 shrink-0' />
                  <span className='font-mono text-xs sm:text-sm text-zinc-400 font-medium'>
                    {experience.period}
                  </span>
                </div>

                {/* Role & Details */}
                <div className='flex-1 min-w-0'>
                  <h3 className='text-base sm:text-lg font-semibold text-white mb-2 leading-tight'>
                    {experience.role}
                  </h3>

                  {/* Details - Always visible */}
                  <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2 text-sm text-zinc-400'>
                      <Globe className='h-4 w-4 shrink-0' />
                      <span>{experience.website}</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-zinc-400'>
                      <MapPin className='h-4 w-4 shrink-0' />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
