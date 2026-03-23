import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup Sprint Plan',
  description:
    'Startup-ready. Tell us your idea and get a focused sprint plan built around your stage and budget.',
  keywords: [
    'startup software development',
    'MVP development',
    'sprint plan',
    'startup studio',
    'build MVP fast',
    'ArtisTec startup',
  ],
  alternates: {
    canonical: 'https://artistec.co/startup',
  },
  openGraph: {
    title: 'Startup Sprint Plan | ArtisTec',
    description:
      'Startup-ready. Tell us your idea and get a focused sprint plan built around your stage and budget.',
    url: 'https://artistec.co/startup',
    siteName: 'ArtisTec',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'ArtisTec Startup Sprint Plan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Sprint Plan | ArtisTec',
    description:
      'Startup-ready. Tell us your idea and get a focused sprint plan built around your stage and budget.',
    images: ['/seo.png'],
  },
}

export default function StartupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
