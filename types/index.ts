import { StaticImageData } from 'next/image'

export interface CryptoData {
  usd: number
  usd_24h_change: number
}

export interface CryptoPrices {
  bitcoin: CryptoData
  ethereum: CryptoData
  solana: CryptoData
  'pax-gold': CryptoData
}

export interface Project {
  name: string
  image: StaticImageData
  url: string
  techStack: string[]
}

export interface TechStack {
  name: string
  icon: React.ComponentType<{ className?: string }>
  isMain: boolean
}

export interface Experience {
  id: number
  role: string
  company: string
  location: string
  period: string
  website: string
}
