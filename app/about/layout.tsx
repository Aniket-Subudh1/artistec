import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Artistec is a full-spectrum product studio — engineering web apps, mobile platforms, AI systems, and robotics for startups, enterprises, and ambitious teams across the globe.',
  keywords: [
    'about Artistec',
    'software studio',
    'product agency',
    'AI development team',
    'custom software company',
  ],
  alternates: {
    canonical: 'https://artistec.co/about',
  },
  openGraph: {
    title: 'About Us | Artistec',
    description:
      'Artistec is a full-spectrum product studio — engineering web apps, mobile platforms, AI systems, and robotics for startups, enterprises, and ambitious teams across the globe.',
    url: 'https://artistec.co/about',
    siteName: 'Artistec',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'About Artistec — Custom Software & AI Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Artistec',
    description:
      'Artistec is a full-spectrum product studio — engineering web apps, mobile platforms, AI systems, and robotics for startups, enterprises, and ambitious teams across the globe.',
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
