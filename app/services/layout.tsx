import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore the full range of ArtisTec services — web & mobile development, AI-powered content, intelligent automation, and robotics & smart systems.',
  keywords: [
    'web development services',
    'mobile app development',
    'AI automation',
    'robotics development',
    'software engineering services',
    'ArtisTec services',
  ],
  alternates: {
    canonical: 'https://artistec.co/services',
  },
  openGraph: {
    title: 'Our Services | ArtisTec',
    description:
      'Explore the full range of ArtisTec services — web & mobile development, AI-powered content, intelligent automation, and robotics & smart systems.',
    url: 'https://artistec.co/services',
    siteName: 'ArtisTec',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'ArtisTec Services — Web, Mobile, AI & Robotics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | ArtisTec',
    description:
      'Explore the full range of ArtisTec services — web & mobile development, AI-powered content, intelligent automation, and robotics & smart systems.',
    images: ['/seo.png'],
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
