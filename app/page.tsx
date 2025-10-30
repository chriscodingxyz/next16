import { CryptoPrices } from '@/components/crypto-prices'
import { HeaderSection } from '@/components/header-section.client'
import { FolderContainer } from '@/components/folder-container.client'
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
    url: 'https://98windows.vercel.app'
  },
  {
    name: 'Bicester Motion',
    image: projectBicesterMotion,
    url: 'https://bicestermotion.com'
  },
  {
    name: 'Coffee Dial',
    image: projectCoffeeDial,
    url: 'https://coffeedial.vercel.app/'
  },
  {
    name: 'Web Viewer',
    image: projectWebsiteViewer,
    url: 'https://webviewer.vercel.app'
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
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,pax-gold&vs_currencies=usd&include_24hr_change=true',
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )
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
      <main className='flex h-full w-full max-w-3xl bg-white flex-col items-center px-4 md:px-16 sm:items-start mx-2 mt-2 overflow-x-hidden'>
        {/* Crypto Prices - Top ticker */}
        {cryptoPrices && (
          <div className='w-full pt-6 md:pt-8'>
            <CryptoPrices initialData={cryptoPrices} />
          </div>
        )}

        {/* Main content sections with uniform spacing */}
        <div className='w-full pt-6 md:pt-8'>
          <div className='space-y-12 md:space-y-16'>
            <HeaderSection />
          </div>
          <div className='pt-12 md:pt-16'>
            <FolderContainer projects={projects} experiences={experiences} />
          </div>
        </div>
      </main>
    </div>
  )
}
