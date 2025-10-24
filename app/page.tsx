'use client'

import Image from 'next/image'
import { Calendar, Globe, Briefcase, ChevronDown, MapPin } from 'lucide-react'
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
import {
  AccordionContent,
  AccordionItem,
  Accordion,
  AccordionTrigger
} from '@/components/ui/accordion'

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center font-sans'>
      <main className=' flex h-full w-full max-w-3xl bg-white flex-col items-center py-32 space-y-16 px-4 md:px-16 sm:items-start mx-2 my-2'>
        <div className='w-full space-y-8'>
          {/* Name & Bio */}
          <div className='flex flex-col gap-4'>
            <div>
              <h1 className='text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50'>
                Chris Wisniewski.
              </h1>
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
          <div className='grid grid-cols-7 gap-0 border border-zinc-200 dark:border-zinc-800'>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <JavaScript className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                JavaScript
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <TypeScript className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                TypeScript
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <Nextjs className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Next.js
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <React className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                React
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <TailwindCSS className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Tailwind
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <Shadcnui className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                shadcn/ui
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <TanStack className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                TanStack
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <Nodejs className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Node.js
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <Convex className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Convex
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <Supabase className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Supabase
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <PostgreSQL className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                PSQL
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <DrizzleORM className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Drizzle
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <BetterAuth className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Better Auth
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-b border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
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
            <div className='flex flex-col items-center gap-1 border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <Git className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Git
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <GitHub className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                GitHub
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <Docker className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Docker
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <Vercel className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Vercel
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
              <Figma className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
              <span className='text-[10px] text-zinc-400 hidden md:block'>
                Figma
              </span>
            </div>
            <div className='flex flex-col items-center gap-1 border-r border-zinc-200 dark:border-zinc-800 p-2 sm:p-3 md:p-4'>
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

        <div className='flex w-full flex-col gap-4 text-base font-medium sm:flex-row'>
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
        </div>

        {/* Experience Section */}
        <section className='w-full space-y-6'>
          <h2 className='text-2xl font-semibold text-black dark:text-zinc-50'>
            Experience
          </h2>
          <div className='w-full space-y-8 pl-6'>
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

        {/* Projects Section */}
        <section className='w-full space-y-6'>
          <h2 className='text-2xl font-semibold text-black dark:text-zinc-50'>
            Projects
          </h2>
          <Accordion
            type='single'
            collapsible
            className='w-full [&>div]:border-0 pl-6'
          >
            <AccordionItem value='project-1'>
              <AccordionTrigger className='[&>svg]:hidden'>
                <div className='flex w-full items-start justify-between gap-4'>
                  <div className='flex items-center gap-2 text-left'>
                    <Globe className='h-4 w-4 text-blue-500' />
                    <h3 className='text-sm font-semibold text-black dark:text-zinc-50'>
                      Coffee Dial
                    </h3>
                    <ChevronDown className='h-4 w-4 text-zinc-400' />
                  </div>
                  <div className='flex items-center gap-2'>
                    <a
                      href='#'
                      className='rounded-md p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      onClick={e => e.stopPropagation()}
                    >
                      <svg
                        className='h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='rounded-md p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      onClick={e => e.stopPropagation()}
                    >
                      <svg
                        className='h-4 w-4'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-zinc-600 dark:text-zinc-400'>
                  A coffee brewing calculator that helps you dial in the perfect
                  espresso shot. Built with Next.js and TypeScript.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='project-2'>
              <AccordionTrigger className='[&>svg]:hidden'>
                <div className='flex w-full items-start justify-between gap-4'>
                  <div className='flex items-center gap-2 text-left'>
                    <Globe className='h-4 w-4 text-blue-500' />
                    <h3 className='text-sm font-semibold text-black dark:text-zinc-50'>
                      Win98 Portfolio
                    </h3>
                    <ChevronDown className='h-4 w-4 text-zinc-400' />
                  </div>
                  <div className='flex items-center gap-2'>
                    <a
                      href='#'
                      className='rounded-md p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      onClick={e => e.stopPropagation()}
                    >
                      <svg
                        className='h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='rounded-md p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      onClick={e => e.stopPropagation()}
                    >
                      <svg
                        className='h-4 w-4'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-zinc-600 dark:text-zinc-400'>
                  A nostalgic Windows 98-inspired portfolio website with
                  interactive desktop elements and retro UI components.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='project-3'>
              <AccordionTrigger className='[&>svg]:hidden'>
                <div className='flex w-full items-start justify-between gap-4'>
                  <div className='flex items-center gap-2 text-left'>
                    <Globe className='h-4 w-4 text-blue-500' />
                    <h3 className='text-sm font-semibold text-black dark:text-zinc-50'>
                      Layout Lab
                    </h3>
                    <ChevronDown className='h-4 w-4 text-zinc-400' />
                  </div>
                  <div className='flex items-center gap-2'>
                    <a
                      href='#'
                      className='rounded-md p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      onClick={e => e.stopPropagation()}
                    >
                      <svg
                        className='h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='rounded-md p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      onClick={e => e.stopPropagation()}
                    >
                      <svg
                        className='h-4 w-4'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-zinc-600 dark:text-zinc-400'>
                  An experimental playground for testing different CSS layout
                  techniques and responsive design patterns.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='project-4'>
              <AccordionTrigger className='[&>svg]:hidden'>
                <div className='flex w-full items-start justify-between gap-4'>
                  <div className='flex items-center gap-2 text-left'>
                    <Globe className='h-4 w-4 text-blue-500' />
                    <h3 className='text-sm font-semibold text-black dark:text-zinc-50'>
                      Streak Git
                    </h3>
                    <ChevronDown className='h-4 w-4 text-zinc-400' />
                  </div>
                  <div className='flex items-center gap-2'>
                    <a
                      href='#'
                      className='rounded-md p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      onClick={e => e.stopPropagation()}
                    >
                      <svg
                        className='h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </a>
                    <a
                      href='#'
                      className='rounded-md p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      onClick={e => e.stopPropagation()}
                    >
                      <svg
                        className='h-4 w-4'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-zinc-600 dark:text-zinc-400'>
                  Track your GitHub contribution streaks and coding habits with
                  beautiful visualizations and analytics.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  )
}
