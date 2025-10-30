import { EmailTemplate } from '@/components/email-template'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // You'll replace this with your verified domain
      to: process.env.CONTACT_EMAIL || 'cherrydub@gmail.com',
      subject: `chriswiz inquiry from ${name}`,
      react: EmailTemplate({ name, email, message })
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
