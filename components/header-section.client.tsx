'use client'

import { useState, useRef } from 'react'
import {
  MapPin,
  Mail,
  ChevronRight,
  Send,
  Linkedin,
  Download
} from 'lucide-react'
import { XLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldLabel } from '@/components/ui/field'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
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
  const [showAllTech, setShowAllTech] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert("Thanks for reaching out! I'll get back to you soon.")
    setShowContactForm(false)
    setFormData({ name: '', email: '', message: '' })
  }

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

        {/* CTA & Social Links */}
        <div className='flex items-center gap-3'>
          <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
            <DialogTrigger asChild>
              <Button className='rounded-full px-6 cursor-pointer'>
                <Mail className='h-4 w-4 md:mr-2' />
                <span className='hidden md:inline font-medium'>
                  Get in touch
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Get in touch</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
                <Field className='space-y-0'>
                  <FieldLabel htmlFor='name'>Name</FieldLabel>
                  <Input
                    className='bg-white'
                    id='name'
                    value={formData.name}
                    onChange={e =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder='Your name'
                    required
                  />
                </Field>

                <Field className='space-y-0'>
                  <FieldLabel htmlFor='email'>Email</FieldLabel>
                  <Input
                    className='bg-white'
                    id='email'
                    type='email'
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder='your@email.com'
                    required
                  />
                </Field>

                <Field className='space-y-0'>
                  <FieldLabel htmlFor='message'>Message</FieldLabel>
                  <Textarea
                    className='bg-white'
                    id='message'
                    value={formData.message}
                    onChange={e =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder='Your message...'
                    rows={5}
                    required
                  />
                </Field>

                <Button type='submit' className='w-full cursor-pointer'>
                  <Send className='h-4 w-4 mr-2' />
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Button
            variant='secondary'
            className='rounded-full px-6 cursor-pointer'
            asChild
          >
            <a
              href='/ChrisWisniewskiCV2025.pdf'
              download='ChrisWisniewskiCV2025.pdf'
            >
              <Download className='h-4 w-4' />
              <span className='md:hidden font-medium'>CV</span>
              <span className='hidden md:inline font-medium'>Download CV</span>
            </a>
          </Button>

          <a
            href='https://github.com/chriscodingxyz'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center h-10 w-10 rounded-full border border-solid border-black/8 transition-colors hover:border-transparent hover:bg-black/4 bg-white cursor-pointer'
          >
            <GitHubIcon className='h-4 w-4' />
          </a>

          <a
            href='https://x.com/chriscodingxyz'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center h-10 w-10 rounded-full border border-solid border-black/8 transition-colors hover:border-transparent hover:bg-black/4 bg-white cursor-pointer'
          >
            <XLogo className='h-4 w-4' weight='bold' />
          </a>

          <a
            href='https://www.linkedin.com/in/wisniewskichris/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center h-10 w-10 rounded-full border border-solid border-black/8 transition-colors hover:border-transparent hover:bg-black/4 bg-white cursor-pointer'
          >
            <Linkedin className='h-4 w-4' />
          </a>
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
