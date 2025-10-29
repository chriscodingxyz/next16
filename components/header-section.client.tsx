'use client'

import { useState } from 'react'
import { MapPin, Mail, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Nextjs,
  React as ReactIcon,
  TypeScript as TypeScriptIcon,
  JavaScript as JavaScriptIcon,
  TailwindCSS,
  Nodejs,
  PostgreSQL,
  Supabase,
  Vercel,
  Shadcnui,
  TanStack,
  Convex,
  DrizzleORM,
  BetterAuth,
  Git,
  GitHub as GitHubIcon,
  Docker,
  Figma,
  ClaudeAI,
  Stripe
} from '@/components/tech-icons'
import { TechStack } from '@/types'

// Tech stack defined in client component to avoid passing functions from server
const techStack: TechStack[] = [
  { name: 'JavaScript', icon: JavaScriptIcon, isMain: false },
  { name: 'TypeScript', icon: TypeScriptIcon, isMain: true },
  { name: 'React', icon: ReactIcon, isMain: true },
  { name: 'Next.js', icon: Nextjs, isMain: true },
  { name: 'Tailwind', icon: TailwindCSS, isMain: true },
  { name: 'shadcn/ui', icon: Shadcnui, isMain: false },
  { name: 'TanStack', icon: TanStack, isMain: false },
  { name: 'Node.js', icon: Nodejs, isMain: true },
  { name: 'PostgreSQL', icon: PostgreSQL, isMain: true },
  { name: 'Drizzle', icon: DrizzleORM, isMain: false },
  { name: 'Supabase', icon: Supabase, isMain: false },
  { name: 'Convex', icon: Convex, isMain: false },
  { name: 'Better Auth', icon: BetterAuth, isMain: false },
  { name: 'Git', icon: Git, isMain: false },
  { name: 'GitHub', icon: GitHubIcon, isMain: false },
  { name: 'Docker', icon: Docker, isMain: false },
  { name: 'Vercel', icon: Vercel, isMain: false },
  { name: 'Figma', icon: Figma, isMain: false },
  { name: 'Claude', icon: ClaudeAI, isMain: false },
  { name: 'Stripe', icon: Stripe, isMain: false }
]

export function HeaderSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
  const [showAllTech, setShowAllTech] = useState(false)

  const mainTechCount = techStack.filter(t => t.isMain).length
  const additionalTechCount = techStack.length - mainTechCount

  return (
    <section className='w-full space-y-8'>
      {/* Name & Intro */}
      <div className='space-y-4'>
        <div className='space-y-2'>
          <div className='flex items-center gap-3'>
            <h1 className='text-5xl md:text-6xl font-bold font-space-grotesk text-black tracking-tight'>
              chris wiz
            </h1>
            <Badge
              variant='secondary'
              className='rounded-full px-2.5 py-1 text-xs font-normal cursor-default'
            >
              <MapPin className='h-3 w-3 mr-1' />
              London, UK
            </Badge>
          </div>
          <p className='text-lg md:text-xl text-zinc-600 font-medium'>
            Fullstack Developer crafting modern web experiences
          </p>
        </div>

        {/* CTA */}
        <div>
          <Button
            onClick={handleContactClick}
            className='rounded-full px-6 cursor-pointer'
          >
            <Mail className='h-4 w-4 mr-2' />
            Get in touch
          </Button>
        </div>
      </div>

      {/* Tech Stack - Tiny Monochrome Icons */}
      <div className='space-y-3'>
        <div className='flex flex-wrap items-center gap-x-3 gap-y-2.5'>
          {(showAllTech ? techStack : techStack.filter(t => t.isMain)).map(
            (tech, displayIndex) => {
              const Icon = tech.icon
              const originalIndex = techStack.findIndex(
                t => t.name === tech.name
              )

              // Calculate stagger delay based on position in full array
              // When expanding: stagger from start to end
              // When collapsing: reverse stagger (last items fade first)
              const totalItems = techStack.length
              const expandDelay = originalIndex * 50
              const collapseDelay = (totalItems - originalIndex) * 40
              const delay = showAllTech ? expandDelay : collapseDelay

              return (
                <span
                  key={tech.name}
                  className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-all duration-300 ease-out animate-in fade-in slide-in-from-left-4'
                  style={{
                    animationDelay: `${delay}ms`,
                    animationFillMode: 'backwards'
                  }}
                >
                  <Icon className='h-3.5 w-3.5 grayscale opacity-60 shrink-0' />
                  <span className='whitespace-nowrap'>{tech.name}</span>
                </span>
              )
            }
          )}
        </div>

        {/* Show more/less button */}
        <button
          onClick={() => setShowAllTech(!showAllTech)}
          className='text-[10px] font-medium text-zinc-400 hover:text-zinc-600 transition-colors flex items-center gap-1 cursor-pointer'
        >
          {showAllTech ? (
            <>
              <span>collapse</span>
              <ChevronRight className='h-3 w-3 -rotate-90 transition-transform duration-300' />
            </>
          ) : (
            <>
              <span>+{additionalTechCount}</span>
              <ChevronRight className='h-3 w-3 rotate-90 transition-transform duration-300' />
            </>
          )}
        </button>
      </div>
    </section>
  )
}
