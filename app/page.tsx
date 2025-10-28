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
  Download
} from 'lucide-react'
import { XLogo } from '@phosphor-icons/react'
import Marquee from 'react-fast-marquee'
import GitHubCalendar from 'react-github-calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldLabel } from '@/components/ui/field'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '@/components/ui/tooltip'
import {
  Convex,
  Nextjs,
  Supabase,
  TanStack,
  BetterAuth,
  ClaudeAI,
  React,
  TypeScript,
  Nodejs,
  TailwindCSS,
  Docker,
  Figma,
  Git,
  DrizzleORM,
  Shadcnui,
  Vercel,
  PostgreSQL,
  GitHub,
  JavaScript,
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
      <main className=' flex h-full w-full max-w-3xl bg-white flex-col items-center pt-4 pb-16 md:py-16 space-y-8 px-4 md:px-16 sm:items-start m-2 overflow-x-hidden'>
        <div className='w-full space-y-8 relative z-10'>
          {/* Header */}
          <section className='w-full space-y-6 relative z-10'>
            <div className='flex items-center justify-between gap-3'>
              <div className='flex items-center gap-3'>
                <h1 className='text-4xl font-semibold font-space-grotesk text-black'>
                  .chris wiz
                </h1>
                <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dotted border-zinc-300 bg-zinc-50 text-sm text-zinc-700'>
                  <Globe className='h-4 w-4' />
                  <span className='font-medium'>London, UK</span>
                </div>
              </div>
              <a
                href='/cv.pdf'
                download
                className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white font-medium text-sm hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow-md'
              >
                <Download className='h-4 w-4' />
                <span className='hidden sm:inline'>Download CV</span>
                <span className='sm:hidden'>CV</span>
              </a>
            </div>
            <div className='flex flex-col gap-4'>
              {/* Tech Stack Icons - Compact */}
              <div className='flex flex-wrap items-center gap-2'>
                <Tooltip>
                  <TooltipTrigger>
                    <JavaScript className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>JavaScript</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <TypeScript className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>TypeScript</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Nextjs className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Next.js</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <React className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>React</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <TailwindCSS className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Tailwind CSS</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Shadcnui className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>shadcn/ui</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <TanStack className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>TanStack</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Nodejs className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Node.js</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Convex className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Convex</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Supabase className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Supabase</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <PostgreSQL className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>PostgreSQL</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <DrizzleORM className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Drizzle ORM</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <BetterAuth className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Better Auth</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      src='/zod.svg'
                      alt='Zod'
                      width={20}
                      height={20}
                      className='h-5 w-5'
                    />
                  </TooltipTrigger>
                  <TooltipContent>Zod</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Git className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Git</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <GitHub className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Docker className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Docker</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Vercel className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Vercel</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Figma className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Figma</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <ClaudeAI className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Claude AI</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Stripe className='h-5 w-5' />
                  </TooltipTrigger>
                  <TooltipContent>Stripe</TooltipContent>
                </Tooltip>
              </div>

              {/* GitHub Contributions */}
              <div className='w-full [&>div]:w-full! [&_svg]:w-full! [&_svg]:h-auto!'>
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

              {/* Social Icons - Commented out, contact available at bottom */}
              {/* <div className='flex flex-wrap items-center gap-2 lg:gap-3'>
                <a
                  href='https://x.com/chriscodingxyz'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-10 w-10 items-center justify-center rounded-full border border-dotted border-zinc-200 text-zinc-600 hover:border-black hover:text-black hover:bg-zinc-50 transition-all duration-300'
                  aria-label='X (Twitter)'
                >
                  <XLogo className='h-5 w-5' weight='bold' />
                </a>
                <a
                  href='https://github.com/chriscodingxyz'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-10 w-10 items-center justify-center rounded-full border border-dotted border-zinc-200 text-zinc-600 hover:border-black hover:text-black hover:bg-zinc-50 transition-all duration-300'
                  aria-label='GitHub'
                >
                  <GitHub className='h-5 w-5' />
                </a>
                <a
                  href='https://www.linkedin.com/in/wisniewskichris/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex h-10 w-10 items-center justify-center rounded-full border border-dotted border-zinc-200 text-zinc-600 hover:border-black hover:text-black hover:bg-zinc-50 transition-all duration-300'
                  aria-label='LinkedIn'
                >
                  <Linkedin className='h-5 w-5' />
                </a>
                <button
                  onClick={() => setShowContactForm(true)}
                  className='flex h-10 w-10 items-center justify-center rounded-full border border-dotted border-zinc-200 text-zinc-600 hover:border-black hover:text-black hover:bg-zinc-50 transition-all duration-300'
                  aria-label='Contact'
                >
                  <Mail className='h-5 w-5' />
                </button>
              </div> */}
            </div>
          </section>
        </div>

        {/* Projects Section */}
        <section className='w-full overflow-y-hidden relative z-10'>
          <h2 className='text-4xl font-semibold font-space-grotesk text-black mb-6'>
            .projects
          </h2>
          {/* Desktop: Single Row */}
          <div className='hidden md:block overflow-y-hidden'>
            <Marquee
              speed={50}
              gradient={true}
              gradientColor='white'
              gradientWidth={50}
              pauseOnHover={true}
              className=''
            >
              {[...projects, ...projects].map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group mr-4 block'
                >
                  <div className='relative w-64 h-40 overflow-hidden rounded-lg border border-zinc-200 transition-all duration-300 hover:shadow-xl'>
                    <Image
                      src={project.image}
                      alt={project.name}
                      className='w-full h-full object-cover transition-all duration-300'
                    />
                    {/* Overlay */}
                    <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                      {/* Badge */}
                      <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg'>
                        <Globe className='h-4 w-4 text-zinc-600' />
                        <span className='text-sm font-medium text-zinc-900'>
                          Visit Project
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </Marquee>
          </div>

          {/* Mobile: Two Rows Going Opposite Directions */}
          <div className='md:hidden space-y-2 overflow-y-hidden'>
            {/* First Row - Left to Right */}
            <Marquee
              speed={40}
              gradient={true}
              gradientColor='white'
              gradientWidth={30}
              pauseOnHover={true}
              className='py-0'
              direction='left'
            >
              {[...projects.slice(0, 2), ...projects.slice(0, 2)].map(
                (project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group mr-3 block'
                  >
                    <div className='relative w-56 h-36 overflow-hidden rounded-lg border border-zinc-200 transition-all duration-300'>
                      <Image
                        src={project.image}
                        alt={project.name}
                        className='w-full h-full object-cover transition-all duration-300'
                      />
                      {/* Overlay */}
                      <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        {/* Badge */}
                        <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg'>
                          <Globe className='h-4 w-4 text-zinc-600' />
                          <span className='text-sm font-medium text-zinc-900'>
                            Visit Project
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              )}
            </Marquee>

            {/* Second Row - Right to Left */}
            <Marquee
              speed={40}
              gradient={true}
              gradientColor='white'
              gradientWidth={30}
              pauseOnHover={true}
              className='py-0'
              direction='right'
            >
              {[...projects.slice(2, 4), ...projects.slice(2, 4)].map(
                (project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group mr-3 block'
                  >
                    <div className='relative w-56 h-36 overflow-hidden rounded-lg border border-zinc-200 transition-all duration-300'>
                      <Image
                        src={project.image}
                        alt={project.name}
                        className='w-full h-full object-cover transition-all duration-300'
                      />
                      {/* Overlay */}
                      <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        {/* Badge */}
                        <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg'>
                          <Globe className='h-4 w-4 text-zinc-600' />
                          <span className='text-sm font-medium text-zinc-900'>
                            Visit Project
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              )}
            </Marquee>
          </div>
        </section>

        {/* Experience Section */}
        <section className='w-full space-y-6 relative z-10'>
          <h2 className='text-4xl font-semibold font-space-grotesk text-black'>
            .experience
          </h2>
          <div className='border border-dotted border-zinc-200 divide-y divide-dotted divide-zinc-200 bg-white'>
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

        <section ref={formRef} className='w-full space-y-6 relative z-10'>
          <h2 className='text-4xl font-semibold font-space-grotesk text-black'>
            .contact
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
                className='flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors bg-foreground text-background hover:bg-[#383838]'
              >
                <Mail className='h-4 w-4' />
                Get in touch
              </button>
            )}

            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <a
                className='flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 bg-white'
                href='https://github.com/chriscodingxyz'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHub className='h-4 w-4' />
                Github
              </a>
              <a
                className='bg-white flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4'
                href='https://x.com/chriscodingxyz'
                target='_blank'
                rel='noopener noreferrer'
              >
                <XLogo className='h-4 w-4' weight='bold' />
                Twitter
              </a>
              <a
                className='bg-white flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4'
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
