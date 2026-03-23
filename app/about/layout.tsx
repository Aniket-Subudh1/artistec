import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'ArtisTec is a full-spectrum product studio — engineering web apps, mobile platforms, AI systems, and robotics for startups, enterprises, and ambitious teams across the globe.',
  keywords: [
    'about ArtisTec',
    'software studio',
    'product agency',
    'AI development team',
    'custom software company',
  ],
  alternates: {
    canonical: 'https://artistec.co/about',
  },
  openGraph: {
    title: 'About Us | ArtisTec',
    description:
      'ArtisTec is a full-spectrum product studio — engineering web apps, mobile platforms, AI systems, and robotics for startups, enterprises, and ambitious teams across the globe.',
    url: 'https://artistec.co/about',
    siteName: 'ArtisTec',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'About ArtisTec — Custom Software & AI Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | ArtisTec',
    description:
      'ArtisTec is a full-spectrum product studio — engineering web apps, mobile platforms, AI systems, and robotics for startups, enterprises, and ambitious teams across the globe.',
    images: ['/seo.png'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
