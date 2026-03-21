import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Strategy Call',
  description:
    "Tell us about your project. We'll get back within 24 hours with a tailored proposal, timeline, and pricing.",
  keywords: [
    'contact Artistec',
    'book a call',
    'software project inquiry',
    'hire software studio',
    'get a proposal',
  ],
  alternates: {
    canonical: 'https://artistec.co/contact',
  },
  openGraph: {
    title: 'Book a Strategy Call | Artistec',
    description:
      "Tell us about your project. We'll get back within 24 hours with a tailored proposal, timeline, and pricing.",
    url: 'https://artistec.co/contact',
    siteName: 'Artistec',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Artistec — Book a Strategy Call',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Strategy Call | Artistec',
    description:
      "Tell us about your project. We'll get back within 24 hours with a tailored proposal, timeline, and pricing.",
    images: ['/seo.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
