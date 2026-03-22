import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artistec.co"),
  title: {
    default: "Artistec — Custom Software, Web & AI Studio",
    template: "%s | Artistec",
  },
  description:
    "Artistec builds custom software, web apps, mobile platforms, AI systems, and robotics for startups, enterprises, and ambitious teams worldwide.",
  keywords: [
    "custom software development",
    "web app development",
    "mobile app development",
    "AI systems",
    "robotics",
    "startup studio",
    "Artistec",
  ],
  authors: [{ name: "Artistec", url: "https://artistec.co" }],
  creator: "Artistec",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Artistec — Custom Software, Web & AI Studio",
    description:
      "Artistec builds custom software, web apps, mobile platforms, AI systems, and robotics — tailored to your vision.",
    url: "https://artistec.co",
    siteName: "Artistec",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "Artistec — Custom Software & AI Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistec — Custom Software, Web & AI Studio",
    description:
      "Artistec builds custom software, web apps, mobile platforms, AI systems, and robotics — tailored to your vision.",
    images: ["/seo.png"],
  },
  alternates: {
    canonical: "https://artistec.co",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Artistec",
  url: "https://artistec.co",
  logo: "https://artistec.co/seo.png",
  description:
    "Artistec is a full-spectrum product studio — engineering web apps, mobile platforms, AI systems, and robotics for startups, enterprises, and ambitious teams across the globe.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://artistec.co/contact",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Artistec",
  url: "https://artistec.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
