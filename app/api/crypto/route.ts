import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true',
      {
        next: { revalidate: 3600 } // Cache for 1 hour (3600 seconds)
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch crypto prices')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Crypto API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch crypto prices' },
      { status: 500 }
    )
  }
}
