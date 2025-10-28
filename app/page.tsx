'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import {
  Calendar,
  Globe,
  MapPin,
  Mail,
  Linkedin,
  X,
  Send,
  ChevronRight,
  Github
} from 'lucide-react'
import { XLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldLabel } from '@/components/ui/field'
import { Badge } from '@/components/ui/badge'
import {
  Nextjs,
  React as ReactIcon,
  TypeScript as TypeScriptIcon,
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
import projectWin98 from '@/public/projects/win98.webp'
import projectBicesterMotion from '@/public/projects/bicestermotion.webp'
import projectWebsiteViewer from '@/public/projects/websiteviewer.webp'
import projectCoffeeDial from '@/public/projects/coffeedial.webp'

const projects = [
  {
    name: 'Win98',
    image: projectWin98,
    url: 'https://win98.dev',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Vercel', 'GitHub', 'Figma']
  },
  {
    name: 'Bicester Motion',
    image: projectBicesterMotion,
    url: 'https://bicestermotion.com',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Supabase',
      'Vercel'
    ]
  },
  {
    name: 'Coffee Dial',
    image: projectCoffeeDial,
    url: 'https://coffeedial.com',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Tailwind',
      'shadcn/ui',
      'Vercel'
    ]
  },
  {
    name: 'Website Viewer',
    image: projectWebsiteViewer,
    url: 'https://websiteviewer.dev',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Vercel',
      'GitHub'
    ]
  }
]

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [expandedExperience, setExpandedExperience] = useState<number | null>(
    null
  )
  const formRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (showContactForm && formRef.current) {
      // Scroll to form with smooth behavior
      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
        // Focus on name input after scroll
        setTimeout(() => {
          nameInputRef.current?.focus()
        }, 500)
      }, 100)
    }
  }, [showContactForm])

  // Auto-rotate featured project (only when not hovering)
  useEffect(() => {
    if (isHovering) return // Don't auto-rotate when user is hovering

    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % projects.length)
    }, 3000) // Change every 3 seconds
    return () => clearInterval(interval)
  }, [isHovering])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert("Thanks for reaching out! I'll get back to you soon.")
    setShowContactForm(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className='flex min-h-screen items-center justify-center font-sans'>
      <main className='flex h-full w-full max-w-3xl bg-white flex-col items-center pt-8 pb-24 md:py-20 space-y-12 md:space-y-16 px-4 md:px-16 sm:items-start m-2 overflow-x-hidden'>
        <div className='w-full space-y-12 md:space-y-16 relative z-10'>
          {/* Header */}
          <section className='w-full space-y-8 relative z-10'>
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
                  onClick={() => setShowContactForm(true)}
                  className='rounded-full px-6 cursor-pointer'
                >
                  <Mail className='h-4 w-4 mr-2' />
                  Get in touch
                </Button>
              </div>
            </div>

            {/* Tech Stack - Tiny Monochrome Icons */}
            <div className='flex flex-wrap items-center gap-x-3 gap-y-2.5'>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <TypeScriptIcon className='h-3.5 w-3.5 grayscale opacity-60' />
                TypeScript
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <ReactIcon className='h-3.5 w-3.5 grayscale opacity-60' />
                React
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Nextjs className='h-3.5 w-3.5 grayscale opacity-60' />
                Next.js
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <TailwindCSS className='h-3.5 w-3.5 grayscale opacity-60' />
                Tailwind
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Shadcnui className='h-3.5 w-3.5 grayscale opacity-60' />
                shadcn/ui
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <TanStack className='h-3.5 w-3.5 grayscale opacity-60' />
                TanStack
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Nodejs className='h-3.5 w-3.5 grayscale opacity-60' />
                Node.js
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Convex className='h-3.5 w-3.5 grayscale opacity-60' />
                Convex
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Supabase className='h-3.5 w-3.5 grayscale opacity-60' />
                Supabase
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <PostgreSQL className='h-3.5 w-3.5 grayscale opacity-60' />
                PostgreSQL
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <DrizzleORM className='h-3.5 w-3.5 grayscale opacity-60' />
                Drizzle
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <BetterAuth className='h-3.5 w-3.5 grayscale opacity-60' />
                Better Auth
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Git className='h-3.5 w-3.5 grayscale opacity-60' />
                Git
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <GitHubIcon className='h-3.5 w-3.5 grayscale opacity-60' />
                GitHub
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Docker className='h-3.5 w-3.5 grayscale opacity-60' />
                Docker
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Vercel className='h-3.5 w-3.5 grayscale opacity-60' />
                Vercel
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Figma className='h-3.5 w-3.5 grayscale opacity-60' />
                Figma
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <ClaudeAI className='h-3.5 w-3.5 grayscale opacity-60' />
                Claude
              </span>
              <span className='inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600'>
                <Stripe className='h-3.5 w-3.5 grayscale opacity-60' />
                Stripe
              </span>
            </div>

            {/* GitHub Calendar - Toggleable */}
            {/* <div className='space-y-3'>
              <button
                onClick={() => setShowGitHubCalendar(!showGitHubCalendar)}
                className='inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-black transition-colors'
              >
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-200 ${
                    showGitHubCalendar ? 'rotate-90' : ''
                  }`}
                />
                {showGitHubCalendar ? 'Hide' : 'View'} GitHub Activity
              </button>

              {showGitHubCalendar && (
                <div className='w-full overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 [&>div]:w-full! [&_svg]:w-full! [&_svg]:h-auto!'>
                  <GitHubCalendar
                    username='chriscodingxyz'
                    blockSize={6}
                    blockMargin={2}
                    fontSize={10}
                    colorScheme='light'
                    hideColorLegend={true}
                    hideMonthLabels={false}
                    hideTotalCount={false}
                  />
                </div>
              )}
            </div> */}
          </section>
        </div>

        {/* Projects Section */}
        <section className='w-full relative z-10'>
          <h2 className='text-3xl md:text-4xl font-bold font-space-grotesk text-black mb-8 tracking-tight'>
            Projects
          </h2>

          {/* Rotating Width Layout - 4 columns on all screen sizes */}
          <div className='flex flex-row gap-3'>
            {projects.map((project, index) => {
              const isActive = index === activeProject
              return (
                <a
                  key={index}
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative block transition-all duration-700 ease-in-out'
                  style={{
                    flex: isActive ? '2' : '1'
                  }}
                  onMouseEnter={() => {
                    setIsHovering(true)
                    setActiveProject(index)
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={() => setActiveProject(index)}
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
                        isActive || 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <div className='absolute bottom-0 left-0 right-0 p-4'>
                        <div className='flex items-center justify-between'>
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
        </section>

        {/* Experience Section */}
        <section className='w-full space-y-8 relative z-10'>
          <h2 className='text-3xl md:text-4xl font-bold font-space-grotesk text-black tracking-tight'>
            Experience
          </h2>
          <div className='border border-zinc-200 divide-y divide-zinc-200 rounded-lg bg-white overflow-hidden'>
            {/* Fullstack Developer */}
            <div
              className='group relative py-3 px-4 md:py-4 md:px-6 transition-all duration-300 hover:bg-zinc-50 cursor-pointer'
              onClick={() =>
                setExpandedExperience(expandedExperience === 0 ? null : 0)
              }
            >
              <div className='flex items-start gap-4 md:gap-6'>
                {/* Date */}
                <div className='flex items-center gap-2 min-w-[6rem] md:min-w-[7rem] flex-shrink-0'>
                  <Calendar className='h-4 w-4 text-red-500 flex-shrink-0' />
                  <span className='font-mono text-xs md:text-sm text-red-500 font-medium'>
                    2024+
                  </span>
                </div>

                {/* Role & Details */}
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between gap-2'>
                    <h3 className='text-base font-semibold text-black'>
                      Fullstack Developer
                    </h3>
                    <ChevronRight
                      className={`h-4 w-4 text-zinc-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedExperience === 0 ? 'rotate-90' : ''
                      } md:group-hover:rotate-90`}
                    />
                  </div>

                  {/* Details - Hidden by default, shown on hover or click */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      expandedExperience === 0
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    } md:group-hover:grid-rows-[1fr]`}
                  >
                    <div className='overflow-hidden'>
                      <div
                        className={`flex flex-col gap-1 mt-2 transition-opacity duration-300 ${
                          expandedExperience === 0 ? 'opacity-100' : 'opacity-0'
                        } md:group-hover:opacity-100`}
                      >
                        <div className='flex items-center gap-2 text-sm text-zinc-600'>
                          <Globe className='h-4 w-4 flex-shrink-0' />
                          <span>27.works</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-zinc-600'>
                          <MapPin className='h-4 w-4 flex-shrink-0' />
                          <span>Remote, UK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Freelance Developer */}
            <div
              className='group relative py-3 px-4 md:py-4 md:px-6 transition-all duration-300 hover:bg-zinc-50 cursor-pointer'
              onClick={() =>
                setExpandedExperience(expandedExperience === 1 ? null : 1)
              }
            >
              <div className='flex items-start gap-4 md:gap-6'>
                {/* Date */}
                <div className='flex items-center gap-2 min-w-[6rem] md:min-w-[7rem] flex-shrink-0'>
                  <Calendar className='h-4 w-4 text-red-500 flex-shrink-0' />
                  <span className='font-mono text-xs md:text-sm text-red-500 font-medium'>
                    2023-2024
                  </span>
                </div>

                {/* Role & Details */}
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between gap-2'>
                    <h3 className='text-base font-semibold text-black'>
                      Freelance Developer
                    </h3>
                    <ChevronRight
                      className={`h-4 w-4 text-zinc-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedExperience === 1 ? 'rotate-90' : ''
                      } md:group-hover:rotate-90`}
                    />
                  </div>

                  {/* Details - Hidden by default, shown on hover or click */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      expandedExperience === 1
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    } md:group-hover:grid-rows-[1fr]`}
                  >
                    <div className='overflow-hidden'>
                      <div
                        className={`flex flex-col gap-1 mt-2 transition-opacity duration-300 ${
                          expandedExperience === 1 ? 'opacity-100' : 'opacity-0'
                        } md:group-hover:opacity-100`}
                      >
                        <div className='flex items-center gap-2 text-sm text-zinc-600'>
                          <Globe className='h-4 w-4 flex-shrink-0' />
                          <span>LittleCraftsLondon</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-zinc-600'>
                          <MapPin className='h-4 w-4 flex-shrink-0' />
                          <span>Remote, UK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Junior Developer */}
            <div
              className='group relative py-3 px-4 md:py-4 md:px-6 transition-all duration-300 hover:bg-zinc-50 cursor-pointer'
              onClick={() =>
                setExpandedExperience(expandedExperience === 2 ? null : 2)
              }
            >
              <div className='flex items-start gap-4 md:gap-6'>
                {/* Date */}
                <div className='flex items-center gap-2 min-w-[6rem] md:min-w-[7rem] flex-shrink-0'>
                  <Calendar className='h-4 w-4 text-red-500 flex-shrink-0' />
                  <span className='font-mono text-xs md:text-sm text-red-500 font-medium'>
                    2023
                  </span>
                </div>

                {/* Role & Details */}
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between gap-2'>
                    <h3 className='text-base font-semibold text-black'>
                      Junior Developer
                    </h3>
                    <ChevronRight
                      className={`h-4 w-4 text-zinc-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedExperience === 2 ? 'rotate-90' : ''
                      } md:group-hover:rotate-90`}
                    />
                  </div>

                  {/* Details - Hidden by default, shown on hover or click */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      expandedExperience === 2
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    } md:group-hover:grid-rows-[1fr]`}
                  >
                    <div className='overflow-hidden'>
                      <div
                        className={`flex flex-col gap-1 mt-2 transition-opacity duration-300 ${
                          expandedExperience === 2 ? 'opacity-100' : 'opacity-0'
                        } md:group-hover:opacity-100`}
                      >
                        <div className='flex items-center gap-2 text-sm text-zinc-600'>
                          <Globe className='h-4 w-4 flex-shrink-0' />
                          <span>NorthCoders</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-zinc-600'>
                          <MapPin className='h-4 w-4 flex-shrink-0' />
                          <span>Remote, UK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IT Consultant */}
            <div
              className='group relative py-3 px-4 md:py-4 md:px-6 transition-all duration-300 hover:bg-zinc-50 cursor-pointer'
              onClick={() =>
                setExpandedExperience(expandedExperience === 3 ? null : 3)
              }
            >
              <div className='flex items-start gap-4 md:gap-6'>
                {/* Date */}
                <div className='flex items-center gap-2 min-w-[6rem] md:min-w-[7rem] flex-shrink-0'>
                  <Calendar className='h-4 w-4 text-red-500 flex-shrink-0' />
                  <span className='font-mono text-xs md:text-sm text-red-500 font-medium'>
                    2018-2022
                  </span>
                </div>

                {/* Role & Details */}
                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between gap-2'>
                    <h3 className='text-base font-semibold text-black'>
                      IT Consultant
                    </h3>
                    <ChevronRight
                      className={`h-4 w-4 text-zinc-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedExperience === 3 ? 'rotate-90' : ''
                      } md:group-hover:rotate-90`}
                    />
                  </div>

                  {/* Details - Hidden by default, shown on hover or click */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      expandedExperience === 3
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    } md:group-hover:grid-rows-[1fr]`}
                  >
                    <div className='overflow-hidden'>
                      <div
                        className={`flex flex-col gap-1 mt-2 transition-opacity duration-300 ${
                          expandedExperience === 3 ? 'opacity-100' : 'opacity-0'
                        } md:group-hover:opacity-100`}
                      >
                        <div className='flex items-center gap-2 text-sm text-zinc-600'>
                          <Globe className='h-4 w-4 flex-shrink-0' />
                          <span>MacSeven</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-zinc-600'>
                          <MapPin className='h-4 w-4 flex-shrink-0' />
                          <span>London, UK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={formRef} className='w-full space-y-8 relative z-10'>
          <h2 className='text-3xl md:text-4xl font-bold font-space-grotesk text-black tracking-tight'>
            Contact
          </h2>
          {/* Contact Form */}
          {showContactForm && (
            <form onSubmit={handleSubmit} className='space-y-5'>
              <Field className='space-y-0'>
                <FieldLabel htmlFor='name'>Name</FieldLabel>
                <Input
                  className='bg-white'
                  ref={nameInputRef}
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

              <div className='flex gap-3'>
                <Button type='submit' className='flex-1 cursor-pointer'>
                  <Send className='h-4 w-4 mr-2' />
                  Send Message
                </Button>
                <Button
                  type='button'
                  variant='destructive'
                  onClick={() => setShowContactForm(false)}
                  className='flex-1 cursor-pointer'
                >
                  <X className='h-4 w-4 mr-2' />
                  Close Form
                </Button>
              </div>
            </form>
          )}

          <div className='flex w-full flex-col gap-4 text-base font-medium'>
            {!showContactForm && (
              <button
                onClick={() => setShowContactForm(true)}
                className='flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors bg-foreground text-background hover:bg-[#383838] cursor-pointer'
              >
                <Mail className='h-4 w-4' />
                Get in touch
              </button>
            )}

            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <a
                className='flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 bg-white cursor-pointer'
                href='https://github.com/chriscodingxyz'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='h-4 w-4' />
                Github
              </a>
              <a
                className='bg-white flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 cursor-pointer'
                href='https://x.com/chriscodingxyz'
                target='_blank'
                rel='noopener noreferrer'
              >
                <XLogo className='h-4 w-4' weight='bold' />
                Twitter
              </a>
              <a
                className='bg-white flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 cursor-pointer'
                href='https://www.linkedin.com/in/wisniewskichris/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='h-4 w-4' />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
