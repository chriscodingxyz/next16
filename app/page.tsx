'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import {
  Calendar,
  Globe,
  Briefcase,
  MapPin,
  Mail,
  Linkedin,
  X,
  Send,
  ChevronRight,
  ChevronDown
} from 'lucide-react'
import { XLogo } from '@phosphor-icons/react'
import Marquee from 'react-fast-marquee'
import GitHubCalendar from 'react-github-calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldLabel } from '@/components/ui/field'
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
// import {
//   AccordionContent,
//   AccordionItem,
//   Accordion,
//   AccordionTrigger
// } from '@/components/ui/accordion'
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

const techStackItems = [
  { id: 'JavaScript', name: 'JavaScript', Icon: JavaScript },
  { id: 'TypeScript', name: 'TypeScript', Icon: TypeScript },
  { id: 'Next.js', name: 'Next.js', Icon: Nextjs },
  { id: 'React', name: 'React', Icon: React },
  { id: 'Tailwind', name: 'Tailwind', Icon: TailwindCSS },
  { id: 'shadcn/ui', name: 'shadcn/ui', Icon: Shadcnui },
  { id: 'TanStack', name: 'TanStack', Icon: TanStack },
  { id: 'Node.js', name: 'Node.js', Icon: Nodejs },
  { id: 'Convex', name: 'Convex', Icon: Convex },
  { id: 'Supabase', name: 'Supabase', Icon: Supabase },
  { id: 'PSQL', name: 'PSQL', Icon: PostgreSQL },
  { id: 'Drizzle', name: 'Drizzle', Icon: DrizzleORM },
  { id: 'Better Auth', name: 'Better Auth', Icon: BetterAuth },
  { id: 'Zod', name: 'Zod', Icon: null },
  { id: 'Git', name: 'Git', Icon: Git },
  { id: 'GitHub', name: 'GitHub', Icon: GitHub },
  { id: 'Docker', name: 'Docker', Icon: Docker },
  { id: 'Vercel', name: 'Vercel', Icon: Vercel },
  { id: 'Figma', name: 'Figma', Icon: Figma },
  { id: 'Claude', name: 'Claude', Icon: ClaudeAI },
  { id: 'Stripe', name: 'Stripe', Icon: Stripe }
]

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home')
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
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
      <main className=' flex h-full w-full max-w-3xl bg-white flex-col items-center py-16 space-y-8 px-4 md:px-16 sm:items-start m-2 overflow-x-hidden dot-mesh-pattern'>
        <div className='w-full space-y-8 relative z-10'>
          {/* Name & Bio with Tech Stack Background */}
          <div className='relative border border-dotted border-zinc-200 dark:border-zinc-800 overflow-hidden'>
            {/* Tech Stack Icon Grid Background with Sequential Animation */}
            <div className='absolute inset-0 grid grid-cols-7 gap-0 pointer-events-none'>
              {/* Row 1 */}
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:0s]'>
                <JavaScript className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:0s]'>
                  JavaScript
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:1s]'>
                <TypeScript className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  TypeScript
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:2s]'>
                <Nextjs className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Next.js
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:3s]'>
                <React className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  React
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:4s]'>
                <TailwindCSS className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Tailwind
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:5s]'>
                <Shadcnui className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  shadcn/ui
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:6s]'>
                <TanStack className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  TanStack
                </span>
              </div>

              {/* Row 2 */}
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:7s]'>
                <Nodejs className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Node.js
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:8s]'>
                <Convex className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Convex
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:9s]'>
                <Supabase className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Supabase
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:10s]'>
                <PostgreSQL className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  PostgreSQL
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:11s]'>
                <DrizzleORM className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Drizzle
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:12s]'>
                <BetterAuth className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Better Auth
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-b border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:13s]'>
                <Git className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Git
                </span>
              </div>

              {/* Row 3 */}
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:14s]'>
                <GitHub className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  GitHub
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:15s]'>
                <Docker className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Docker
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:16s]'>
                <Vercel className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Vercel
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:17s]'>
                <Figma className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Figma
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:18s]'>
                <ClaudeAI className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Claude AI
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-r border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:19s]'>
                <Stripe className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  Stripe
                </span>
              </div>
              <div className='flex flex-col items-center justify-center gap-1 p-3 md:p-4 border-dotted border-zinc-200 dark:border-zinc-800 opacity-[0.08] dark:opacity-[0.05] hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-all duration-500 animate-[techPulse_21s_ease-in-out_infinite] [animation-delay:20s]'>
                <GitHub className='h-7 w-7 md:h-9 md:w-9' />
                <span className='text-[9px] md:text-[10px] text-zinc-600 dark:text-zinc-400 font-medium animate-[techTextReveal_21s_ease-in-out_infinite] [animation-delay:1s]'>
                  GitHub
                </span>
              </div>
            </div>

            {/* Header Content (on top of background) */}
            <div className='relative z-10 flex flex-col items-center gap-4 md:gap-5 text-center py-12 md:py-16 px-6'>
              <div className='w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 border-[3px] border-black dark:border-white shadow-lg'>
                <Image
                  src='/dalle.png'
                  alt='Chris with dog'
                  width={96}
                  height={96}
                  className='w-full h-full object-cover'
                />
              </div>
              <div>
                <h1 className='text-3xl md:text-4xl font-bold font-space-grotesk leading-none tracking-tight text-black dark:text-zinc-50'>
                  chriscodingxyz
                </h1>
                <p className='flex items-center justify-center gap-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2'>
                  <Globe className='h-4 w-4 md:h-5 md:w-5' />
                  London, UK
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          {/* <section className='w-full space-y-6 relative z-10'>
            <h2 className='text-4xl font-semibold font-space-grotesk text-black dark:text-zinc-50'>
              .techstack
            </h2>
            <div className='grid grid-cols-7 gap-0 border border-dotted border-zinc-200 dark:border-zinc-800'>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <JavaScript className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  JavaScript
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <TypeScript className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  TypeScript
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Nextjs className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Next.js
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <React className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  React
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <TailwindCSS className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Tailwind
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Shadcnui className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  shadcn/ui
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <TanStack className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  TanStack
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Nodejs className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Node.js
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Convex className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Convex
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Supabase className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Supabase
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <PostgreSQL className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  PSQL
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <DrizzleORM className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Drizzle
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <BetterAuth className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Better Auth
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Image
                  src='/zod.svg'
                  alt='Zod'
                  width={32}
                  height={32}
                  className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8'
                />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Zod
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Git className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Git
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <GitHub className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  GitHub
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Docker className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Docker
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Vercel className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Vercel
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <Figma className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Figma
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 border-dotted border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
                <ClaudeAI className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Claude
                </span>
              </div>
              <div className='flex flex-col items-center gap-1 p-2 sm:p-3 md:p-4'>
                <Stripe className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                <span className='text-[10px] text-zinc-400 hidden md:block'>
                  Stripe
                </span>
              </div>
            </div>
          </section> */}
        </div>

        {/* GitHub Contributions Section */}
        <section className='w-full space-y-6 relative z-10'>
          <h2 className='text-4xl font-semibold font-space-grotesk text-black dark:text-zinc-50'>
            .contributions
          </h2>
          <div className='w-full [&>div]:w-full! [&_svg]:w-full! [&_svg]:h-auto!'>
            <GitHubCalendar
              username='chriscodingxyz'
              blockSize={10}
              blockMargin={3}
              fontSize={12}
              colorScheme='light'
              hideColorLegend={false}
              hideMonthLabels={false}
              hideTotalCount={false}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className='w-full overflow-y-hidden relative z-10'>
          <h2 className='text-4xl font-semibold font-space-grotesk text-black dark:text-zinc-50 mb-6'>
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
                  <div className='relative w-64 h-40 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl'>
                    <Image
                      src={project.image}
                      alt={project.name}
                      className='w-full h-full object-cover transition-all duration-300'
                    />
                    {/* Overlay */}
                    <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                      {/* Badge */}
                      <div className='flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-lg'>
                        <Globe className='h-4 w-4 text-zinc-600 dark:text-zinc-400' />
                        <span className='text-sm font-medium text-zinc-900 dark:text-zinc-100'>
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
                    <div className='relative w-56 h-36 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300'>
                      <Image
                        src={project.image}
                        alt={project.name}
                        className='w-full h-full object-cover transition-all duration-300'
                      />
                      {/* Overlay */}
                      <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        {/* Badge */}
                        <div className='flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-lg'>
                          <Globe className='h-4 w-4 text-zinc-600 dark:text-zinc-400' />
                          <span className='text-sm font-medium text-zinc-900 dark:text-zinc-100'>
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
                    <div className='relative w-56 h-36 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300'>
                      <Image
                        src={project.image}
                        alt={project.name}
                        className='w-full h-full object-cover transition-all duration-300'
                      />
                      {/* Overlay */}
                      <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        {/* Badge */}
                        <div className='flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full shadow-lg'>
                          <Globe className='h-4 w-4 text-zinc-600 dark:text-zinc-400' />
                          <span className='text-sm font-medium text-zinc-900 dark:text-zinc-100'>
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
          <h2 className='text-4xl font-semibold font-space-grotesk text-black dark:text-zinc-50'>
            .experience
          </h2>
          <div className='border border-dotted border-zinc-200 dark:border-zinc-800 divide-y divide-dotted divide-zinc-200 dark:divide-zinc-800'>
            {/* Fullstack Developer */}
            <div className='group relative py-3 px-4 md:py-4 md:px-6 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 cursor-pointer'>
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
                    <h3 className='text-base font-semibold text-black dark:text-zinc-50'>
                      Fullstack Developer
                    </h3>
                    <ChevronRight className='h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:rotate-90 flex-shrink-0' />
                  </div>

                  {/* Details - Hidden by default, shown on hover */}
                  <div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out'>
                    <div className='overflow-hidden'>
                      <div className='flex flex-col gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                          <Globe className='h-4 w-4 flex-shrink-0' />
                          <span>27.works</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
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
            <div className='group relative py-3 px-4 md:py-4 md:px-6 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 cursor-pointer'>
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
                    <h3 className='text-base font-semibold text-black dark:text-zinc-50'>
                      Freelance Developer
                    </h3>
                    <ChevronRight className='h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:rotate-90 flex-shrink-0' />
                  </div>

                  {/* Details - Hidden by default, shown on hover */}
                  <div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out'>
                    <div className='overflow-hidden'>
                      <div className='flex flex-col gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                          <Globe className='h-4 w-4 flex-shrink-0' />
                          <span>LittleCraftsLondon</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
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
            <div className='group relative py-3 px-4 md:py-4 md:px-6 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 cursor-pointer'>
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
                    <h3 className='text-base font-semibold text-black dark:text-zinc-50'>
                      Junior Developer
                    </h3>
                    <ChevronRight className='h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:rotate-90 flex-shrink-0' />
                  </div>

                  {/* Details - Hidden by default, shown on hover */}
                  <div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out'>
                    <div className='overflow-hidden'>
                      <div className='flex flex-col gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                          <Globe className='h-4 w-4 flex-shrink-0' />
                          <span>NorthCoders</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
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
            <div className='group relative py-3 px-4 md:py-4 md:px-6 transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 cursor-pointer'>
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
                    <h3 className='text-base font-semibold text-black dark:text-zinc-50'>
                      IT Consultant
                    </h3>
                    <ChevronRight className='h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:rotate-90 flex-shrink-0' />
                  </div>

                  {/* Details - Hidden by default, shown on hover */}
                  <div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out'>
                    <div className='overflow-hidden'>
                      <div className='flex flex-col gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                          <Globe className='h-4 w-4 flex-shrink-0' />
                          <span>MacSeven</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
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
          <h2 className='text-4xl font-semibold font-space-grotesk text-black dark:text-zinc-50'>
            .contact
          </h2>
          {/* Contact Form */}
          {showContactForm && (
            <form onSubmit={handleSubmit} className='space-y-5'>
              <Field className='space-y-2'>
                <FieldLabel htmlFor='name'>Name</FieldLabel>
                <Input
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

              <Field className='space-y-2'>
                <FieldLabel htmlFor='email'>Email</FieldLabel>
                <Input
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

              <Field className='space-y-2'>
                <FieldLabel htmlFor='message'>Message</FieldLabel>
                <Textarea
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
                <Button type='submit' className='flex-1'>
                  <Send className='h-4 w-4 mr-2' />
                  Send Message
                </Button>
                <Button
                  type='button'
                  variant='destructive'
                  onClick={() => setShowContactForm(false)}
                  className='flex-1'
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
                className='flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]'
              >
                <Mail className='h-4 w-4' />
                Get in touch
              </button>
            )}

            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <a
                className='flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]'
                href='https://github.com/chriscodingxyz'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHub className='h-4 w-4' />
                Github
              </a>
              <a
                className='flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]'
                href='https://x.com/chriscodingxyz'
                target='_blank'
                rel='noopener noreferrer'
              >
                <XLogo className='h-4 w-4' weight='bold' />
                Twitter
              </a>
              <a
                className='flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]'
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
