'use client'

import { useState } from 'react'
import { Calendar, Globe, MapPin, ChevronRight, ChevronDown } from 'lucide-react'
import { Experience } from '@/types'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  )

  return (
    <section className='w-full space-y-4'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='flex items-center gap-2 text-3xl md:text-4xl font-bold font-space-grotesk text-black tracking-tight cursor-pointer hover:text-zinc-700 transition-colors'
      >
        experience
        <ChevronDown
          className={`h-6 w-6 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className='overflow-hidden'>
          <div className='bg-white overflow-hidden'>
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className='group relative py-3 px-4 md:py-4 md:px-6 transition-all duration-300 hover:bg-zinc-50 cursor-pointer'
                onClick={() =>
                  setExpandedExperience(expandedExperience === index ? null : index)
                }
              >
                <div className='flex items-start gap-4 md:gap-6'>
                  {/* Date */}
                  <div className='flex items-center gap-2 min-w-24 md:min-w-28 shrink-0'>
                    <Calendar className='h-4 w-4 text-red-500 shrink-0' />
                    <span className='font-mono text-xs md:text-sm text-zinc-600 font-medium'>
                      {experience.period}
                    </span>
                  </div>

                  {/* Role & Details */}
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center justify-between gap-2'>
                      <h3 className='text-base font-semibold text-black'>
                        {experience.role}
                      </h3>
                      <ChevronRight
                        className={`h-4 w-4 text-zinc-400 transition-transform duration-300 shrink-0 ${
                          expandedExperience === index ? 'rotate-90' : ''
                        } md:group-hover:rotate-90`}
                      />
                    </div>

                    {/* Details - Hidden by default, shown on hover or click */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        expandedExperience === index
                          ? 'grid-rows-[1fr]'
                          : 'grid-rows-[0fr]'
                      } md:group-hover:grid-rows-[1fr]`}
                    >
                      <div className='overflow-hidden'>
                        <div
                          className={`flex flex-col gap-1 mt-2 transition-opacity duration-300 ${
                            expandedExperience === index ? 'opacity-100' : 'opacity-0'
                          } md:group-hover:opacity-100`}
                        >
                          <div className='flex items-center gap-2 text-sm text-zinc-600'>
                            <Globe className='h-4 w-4 shrink-0' />
                            <span>{experience.website}</span>
                          </div>
                          <div className='flex items-center gap-2 text-sm text-zinc-600'>
                            <MapPin className='h-4 w-4 shrink-0' />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
