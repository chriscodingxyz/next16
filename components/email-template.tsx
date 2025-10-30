import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text
} from '@react-email/components'

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            <strong>From:</strong> {name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>Message:</strong>
          </Text>
          <Section style={messageBox}>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px'
}

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 48px'
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  padding: '0 48px'
}

const messageBox = {
  padding: '24px 48px'
}

const messageText = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  backgroundColor: '#f4f4f4',
  padding: '16px',
  borderRadius: '4px'
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 48px'
}
