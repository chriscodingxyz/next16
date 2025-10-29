import { CryptoPrices } from '@/components/crypto-prices'
import { HeaderSection } from '@/components/header-section.client'
import { ProjectsSection } from '@/components/projects-section.client'
import { ExperienceSection } from '@/components/experience-section.client'
import { ContactSection } from '@/components/contact-section.client'
import { Project, Experience, CryptoPrices as CryptoPricesType } from '@/types'
import projectWin98 from '@/public/projects/win98.webp'
import projectBicesterMotion from '@/public/projects/bicestermotion.webp'
import projectWebsiteViewer from '@/public/projects/websiteviewer.webp'
import projectCoffeeDial from '@/public/projects/coffeedial.webp'

// Static data
const projects: Project[] = [
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

const experiences: Experience[] = [
  {
    id: 0,
    role: 'Fullstack Developer',
    company: '27.works',
    website: '27.works',
    location: 'Remote, UK',
    period: '2024+'
  },
  {
    id: 1,
    role: 'Freelance Developer',
    company: 'LittleCraftsLondon',
    website: 'LittleCraftsLondon',
    location: 'Remote, UK',
    period: '2023-2024'
  },
  {
    id: 2,
    role: 'Junior Developer',
    company: 'NorthCoders',
    website: 'NorthCoders',
    location: 'Remote, UK',
    period: '2023'
  },
  {
    id: 3,
    role: 'IT Consultant',
    company: 'MacSeven',
    website: 'MacSeven',
    location: 'London, UK',
    period: '2018-2022'
  }
]

// Server-side data fetching
async function getCryptoPrices(): Promise<CryptoPricesType | null> {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'

    const response = await fetch(`${baseUrl}/api/crypto`, {
      cache: 'no-store'
    })
    if (!response.ok) throw new Error('Failed to fetch crypto prices')
    return response.json()
  } catch (error) {
    console.error('Failed to fetch crypto prices:', error)
    return null
  }
}

export default async function Home() {
  const cryptoPrices = await getCryptoPrices()

  return (
    <div className='flex min-h-screen items-center justify-center font-sans'>
      <main className='flex h-full w-full max-w-3xl bg-white flex-col items-center pb-20 md:pb-24 px-4 md:px-16 sm:items-start m-2 overflow-x-hidden'>
        {/* Crypto Prices - Top ticker */}
        {cryptoPrices && (
          <div className='w-full pt-6 md:pt-8'>
            <CryptoPrices initialData={cryptoPrices} />
          </div>
        )}

        {/* Main content sections with uniform spacing */}
        <div className='w-full space-y-12 md:space-y-16 pt-6 md:pt-8'>
          <HeaderSection />
          <ProjectsSection projects={projects} />
          <ExperienceSection experiences={experiences} />
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
