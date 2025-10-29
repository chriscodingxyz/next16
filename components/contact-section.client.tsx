'use client'

import { useState, useEffect, useRef } from 'react'
import { Mail, X, Send, Linkedin } from 'lucide-react'
import { XLogo } from '@phosphor-icons/react'
import { GitHub } from '@/components/tech-icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldLabel } from '@/components/ui/field'

export function ContactSection() {
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
    <section id='contact' ref={formRef} className='w-full space-y-4'>
      <h2 className='text-3xl md:text-4xl font-bold font-space-grotesk text-black tracking-tight'>
        contact
      </h2>
      {/* Contact Form */}
      {showContactForm && (
        <form onSubmit={handleSubmit} className='space-y-5'>
          <Field className='space-y-0'>
            <FieldLabel htmlFor='name'>Name</FieldLabel>
            <Input
              className='bg-white'
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

          <Field className='space-y-0'>
            <FieldLabel htmlFor='email'>Email</FieldLabel>
            <Input
              className='bg-white'
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

          <Field className='space-y-0'>
            <FieldLabel htmlFor='message'>Message</FieldLabel>
            <Textarea
              className='bg-white'
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
            <Button type='submit' className='flex-1 cursor-pointer'>
              <Send className='h-4 w-4 mr-2' />
              Send Message
            </Button>
            <Button
              type='button'
              variant='destructive'
              onClick={() => setShowContactForm(false)}
              className='flex-1 cursor-pointer'
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
            className='flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors bg-foreground text-background hover:bg-[#383838] cursor-pointer'
          >
            <Mail className='h-4 w-4' />
            Get in touch
          </button>
        )}

        <div className='flex flex-col sm:flex-row gap-4 w-full'>
          <a
            className='flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 bg-white cursor-pointer'
            href='https://github.com/chriscodingxyz'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub className='h-4 w-4' />
            Github
          </a>
          <a
            className='bg-white flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 cursor-pointer'
            href='https://x.com/chriscodingxyz'
            target='_blank'
            rel='noopener noreferrer'
          >
            <XLogo className='h-4 w-4' weight='bold' />
            Twitter
          </a>
          <a
            className='bg-white flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 cursor-pointer'
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
  )
}
