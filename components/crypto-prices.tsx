'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { CryptoPrices as CryptoPricesType } from '@/types'

interface CryptoPricesProps {
  initialData: CryptoPricesType
}

const CryptoItem = ({
  crypto
}: {
  crypto: { name: string; data: CryptoPricesType['bitcoin']; icon: string }
}) => {
  const isPositive = crypto.data.usd_24h_change >= 0
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: crypto.name === 'BTC' ? 0 : 2,
    maximumFractionDigits: crypto.name === 'BTC' ? 0 : 2
  }).format(crypto.data.usd)

  return (
    <div className='flex items-center gap-2 text-xs font-medium text-zinc-600 whitespace-nowrap'>
      <Image
        src={`/crypto-icons/${crypto.icon}.svg`}
        alt={crypto.name}
        width={14}
        height={14}
        className='opacity-60 grayscale shrink-0'
      />
      <span className='font-mono'>{formattedPrice}</span>
      <span
        className={`flex items-center gap-0.5 ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {isPositive ? (
          <TrendingUp className='h-3 w-3' />
        ) : (
          <TrendingDown className='h-3 w-3' />
        )}
        <span className='font-mono'>
          {Math.abs(crypto.data.usd_24h_change).toFixed(1)}%
        </span>
      </span>
    </div>
  )
}

export function CryptoPrices({ initialData }: CryptoPricesProps) {
  if (!initialData) {
    return null
  }

  const cryptos = [
    { name: 'BTC', data: initialData.bitcoin, icon: 'btc' },
    { name: 'ETH', data: initialData.ethereum, icon: 'eth' },
    { name: 'SOL', data: initialData.solana, icon: 'sol' }
  ]

  return (
    <Marquee speed={40} gradient={false} pauseOnHover>
      {cryptos.map(crypto => (
        <div key={crypto.name} className='mx-3'>
          <CryptoItem crypto={crypto} />
        </div>
      ))}
    </Marquee>
  )
}
