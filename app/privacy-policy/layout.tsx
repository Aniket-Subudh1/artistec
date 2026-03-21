import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Artistec collects, uses, and protects your personal information.',
  alternates: {
    canonical: 'https://artistec.co/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Artistec',
    description: 'How Artistec collects, uses, and protects your personal information.',
    url: 'https://artistec.co/privacy-policy',
    siteName: 'Artistec',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'Artistec Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Artistec',
    description: 'How Artistec collects, uses, and protects your personal information.',
    images: ['/seo.png'],
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
