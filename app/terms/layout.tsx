import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions governing the use of ArtisTec services and website.',
  alternates: {
    canonical: 'https://artistec.co/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | ArtisTec',
    description: 'Terms and conditions governing the use of ArtisTec services and website.',
    url: 'https://artistec.co/terms',
    siteName: 'ArtisTec',
    images: [
      {
        url: '/seo.png',
        width: 1200,
        height: 630,
        alt: 'ArtisTec Terms & Conditions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | ArtisTec',
    description: 'Terms and conditions governing the use of ArtisTec services and website.',
    images: ['/seo.png'],
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
