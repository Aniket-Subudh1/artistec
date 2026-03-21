'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Startup', href: '/startup' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.859L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: '#0d0b14' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.35) 40%, rgba(124,58,237,0.5) 60%, transparent)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 z-0"
        style={{ height: '120px', background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(124,58,237,0.07) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 border-b px-5 py-5 sm:flex-row sm:items-center sm:px-8 md:px-12 lg:px-16 xl:px-24"
        style={{ borderColor: 'rgba(167,139,250,0.10)' }}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2.5 group">
          <div className="h-8 w-8 overflow-hidden rounded-lg ring-1 ring-[#a78bfa]/20 transition-all duration-200 group-hover:ring-[#a78bfa]/50">
            <Image src="/logo.png" width={32} height={32} alt="Artistec logo" className="h-full w-full object-cover" />
          </div>
          <span className="text-[13.5px] font-bold tracking-[0.04em] text-white/90">
            ARTISTEC
          </span>
          <span
            className="ml-0.5 h-1.5 w-1.5 rounded-full bg-[#a78bfa] opacity-80"
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11.5px] font-medium text-white/40 transition-colors duration-150 hover:text-white/85"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-4 sm:flex-row sm:items-center sm:px-8 md:px-12 lg:px-16 xl:px-24"
      >
        <p className="text-[11.5px] text-white/28">
          © {year} Artistec. All Rights Reserved.
        </p>

        <div className="flex items-center gap-2.5">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-7.5 w-7.5 items-center justify-center rounded-lg border transition-all duration-200"
              style={{
                borderColor: 'rgba(167,139,250,0.12)',
                color: 'rgba(255,255,255,0.38)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.45)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(196,176,242,1)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.12)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.38)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative z-0 w-full overflow-hidden"
        style={{ height: 'clamp(90px, 20vw, 260px)', marginBottom: '-2px' }}
      >
        <div className="absolute inset-0 flex items-end justify-center">
          <span
            className="select-none whitespace-nowrap font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(80px, 24vw, 320px)',
              letterSpacing: '-0.03em',
              lineHeight: 0.82,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(167,139,250,0.09)',
              background: 'linear-gradient(to bottom, rgba(167,139,250,0.18) 0%, rgba(124,58,237,0.10) 45%, rgba(76,29,149,0.04) 75%, transparent 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            ARTISTEC
          </span>
        </div>
      </div>
    </footer>
  );
}
