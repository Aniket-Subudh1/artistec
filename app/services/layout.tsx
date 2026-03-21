import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore the full range of Artistec services — web & mobile development, AI-powered content, intelligent automation, and robotics & smart systems.',
  keywords: [
    'web development services',
    'mobile app development',
    'AI automation',
    'robotics development',
    'software engineering services',
    'Artistec services',
  ],
  alternates: {
    canonical: 'https://artistec.co/services',
  },
  openGraph: {
    title: 'Our Services | Artistec',
    description:
      'Explore the full range of Artistec services — web & mobile development, AI-powered content, intelligent automation, and robotics & smart systems.',
    url: 'https://artistec.co/services',
    siteName: 'Artistec',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'Artistec Services — Web, Mobile, AI & Robotics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Artistec',
    description:
      'Explore the full range of Artistec services — web & mobile development, AI-powered content, intelligent automation, and robotics & smart systems.',
    images: ['/seo.png'],
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
