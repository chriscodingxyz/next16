'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, Globe, Briefcase, MapPin } from 'lucide-react'
import Marquee from 'react-fast-marquee'
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
  return (
    <div className='flex min-h-screen items-center justify-center font-sans'>
      <main className=' flex h-full w-full max-w-3xl bg-white flex-col items-center py-16 space-y-16 px-4 md:px-16 sm:items-start m-2 overflow-x-hidden'>
        <div className='w-full space-y-8'>
          {/* Name & Bio */}
          <div className='flex flex-col gap-4'>
            <div>
              {/* <h1 className='text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50'>
                Chris Wisniewski.
              </h1> */}
              <p className='flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 mt-1'>
                <Globe className='h-4 w-4' />
                London, UK
              </p>
            </div>
            {/* <p className='text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
              I like React/Next.js and I'm always learning new things.
            </p> */}
          </div>

          {/* Tech Stack */}
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
        </div>

        {/* Projects Section */}
        <section className='w-full overflow-hidden'>
          <h2 className='text-4xl font-semibold text-black dark:text-zinc-50 mb-6'>
            Projects
          </h2>
          {/* Desktop: Single Row */}
          <div className='hidden md:block'>
            <Marquee
              speed={50}
              gradient={true}
              gradientColor='white'
              gradientWidth={50}
              pauseOnHover={true}
              className='py-8'
            >
              {[...projects, ...projects].map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group mr-4 block'
                >
                  <div className='relative w-64 h-40 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
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
          <div className='md:hidden space-y-0'>
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
              className='py-4'
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
        <section className='w-full space-y-6'>
          <h2 className='text-4xl font-semibold text-black dark:text-zinc-50'>
            Experience
          </h2>
          <div className='w-full space-y-8 pl-2'>
            <div className='flex items-start justify-between gap-4'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <Briefcase className='h-4 w-4 text-zinc-600 dark:text-zinc-400' />
                  <h3 className='text-sm font-semibold text-black dark:text-zinc-50'>
                    Fullstack Developer
                  </h3>
                </div>
                <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                  <Globe className='h-4 w-4' />
                  <span>27.works</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                  <MapPin className='h-4 w-4' />
                  <span>Remote, UK</span>
                </div>
              </div>
              <div className='flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap'>
                <Calendar className='h-4 w-4 text-red-500' />
                <span>2024+</span>
              </div>
            </div>

            <div className='flex items-start justify-between gap-4'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <Briefcase className='h-4 w-4 text-zinc-600 dark:text-zinc-400' />
                  <h3 className='text-sm font-semibold text-black dark:text-zinc-50'>
                    Freelance Developer
                  </h3>
                </div>
                <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                  <Globe className='h-4 w-4' />
                  <span>LittleCraftsLondon</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                  <MapPin className='h-4 w-4' />
                  <span>Remote, UK</span>
                </div>
              </div>
              <div className='flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap'>
                <Calendar className='h-4 w-4 text-red-500' />
                <span>2023 - 2024</span>
              </div>
            </div>

            <div className='flex items-start justify-between gap-4'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <Briefcase className='h-4 w-4 text-zinc-600 dark:text-zinc-400' />
                  <h3 className='text-sm font-semibold text-black dark:text-zinc-50'>
                    Junior Developer
                  </h3>
                </div>
                <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                  <Globe className='h-4 w-4' />
                  <span>NorthCoders</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                  <MapPin className='h-4 w-4' />
                  <span>Remote, UK</span>
                </div>
              </div>
              <div className='flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap'>
                <Calendar className='h-4 w-4 text-red-500' />
                <span>2023</span>
              </div>
            </div>

            <div className='flex items-start justify-between gap-4'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <Briefcase className='h-4 w-4 text-zinc-600 dark:text-zinc-400' />
                  <h3 className='text-sm font-semibold text-black dark:text-zinc-50'>
                    IT Consultant
                  </h3>
                </div>
                <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                  <Globe className='h-4 w-4' />
                  <span>MacSeven</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
                  <MapPin className='h-4 w-4' />
                  <span>London, UK</span>
                </div>
              </div>
              <div className='flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 whitespace-nowrap'>
                <Calendar className='h-4 w-4 text-red-500' />
                <span>2018 - 2022</span>
              </div>
            </div>
          </div>
        </section>

        <section className='flex w-full flex-col gap-4 text-base font-medium sm:flex-row'>
          <a
            className='flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='dark:invert'
              src='/vercel.svg'
              alt='Vercel logomark'
              width={16}
              height={16}
            />
            Get in touch
          </a>
          <a
            className='flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </section>
      </main>
    </div>
  )
}
