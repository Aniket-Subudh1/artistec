import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How ArtisTec collects, uses, and protects your personal information.',
  alternates: {
    canonical: 'https://artistec.co/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | ArtisTec',
    description: 'How ArtisTec collects, uses, and protects your personal information.',
    url: 'https://artistec.co/privacy-policy',
    siteName: 'ArtisTec',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'ArtisTec Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | ArtisTec',
    description: 'How ArtisTec collects, uses, and protects your personal information.',
    images: ['/seo.png'],
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
