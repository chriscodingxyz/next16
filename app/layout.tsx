import type { Metadata } from 'next'
import { Geist, Geist_Mono, Silkscreen, Space_Grotesk } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const silkscreen = Silkscreen({
  variable: '--font-silkscreen',
  subsets: ['latin'],
  weight: ['400', '700']
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Chris Wiz | Fullstack Developer',
  description: 'London-based Fullstack Developer crafting modern web experiences with Next.js, React, TypeScript, and Tailwind CSS. Building innovative projects like Win98, Bicester Motion, and Coffee Dial.',
  keywords: [
    'Chris Wiz',
    'Fullstack Developer',
    'Web Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript Developer',
    'London Developer',
    'UK Developer',
    'Portfolio',
    'Web Development',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL'
  ],
  authors: [{ name: 'Chris Wiz' }],
  creator: 'Chris Wiz',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://chriswiz.dev',
    title: 'Chris Wiz | Fullstack Developer',
    description: 'London-based Fullstack Developer crafting modern web experiences with Next.js, React, TypeScript, and Tailwind CSS.',
    siteName: 'Chris Wiz Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chris Wiz - Fullstack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Wiz | Fullstack Developer',
    description: 'London-based Fullstack Developer crafting modern web experiences with Next.js, React, TypeScript, and Tailwind CSS.',
    creator: '@chriscodingxyz',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${silkscreen.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {/*
          MESH GRADIENT BACKGROUND - EASY THEME SWITCHING

          Available themes (just change the class name below):
          - mesh-lavender        → Purple/Blue (Original)
          - mesh-emerald         → Green Paradise
          - mesh-ocean           → Deep Blue
          - mesh-grayscale       → Monochrome
          - mesh-rainbow         → Full Spectrum
          - mesh-sunset          → Warm Orange/Pink
          - mesh-forest          → Deep Green/Earth
          - mesh-candy           → Pink/Purple Sweet
          - mesh-cyber           → Neon Tech
          - mesh-peach           → Soft Warm
          - mesh-northern-lights → Aurora Borealis (ANIMATED!)
        */}
        <div className='mesh-gradient-container mesh-grayscale'>
          <div className='gradient-blob blob-1'></div>
          <div className='gradient-blob blob-2'></div>
          <div className='gradient-blob blob-3'></div>
          <div className='gradient-blob blob-4'></div>
          <div className='gradient-blob blob-5'></div>
          <div className='mesh-overlay'></div>
          <div className='fade-to-white'></div>
        </div>

        {/* Main Content */}
        <div className='relative z-10'>{children}</div>
      </body>
    </html>
  )
}
