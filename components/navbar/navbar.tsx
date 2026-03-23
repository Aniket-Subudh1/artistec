'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ConnectButton from '@/components/ui/connect-button'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const glassPanelClass =
  'border border-white/55 bg-white/48 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_20px_50px_rgba(124,99,173,0.12),inset_0_1px_0_rgba(255,255,255,0.7)]'

const glassButtonClass =
  'border border-white/60 bg-white/52 backdrop-blur-xl backdrop-saturate-150 shadow-[0_12px_28px_rgba(124,99,173,0.10),inset_0_1px_0_rgba(255,255,255,0.72)]'

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuPathname, setMenuPathname] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  const isMenuOpen = menuOpen && menuPathname === pathname

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflowY = 'hidden'
      document.body.style.overflowY = 'hidden'
    } else {
      document.documentElement.style.overflowY = ''
      document.body.style.overflowY = ''
    }
    return () => {
      document.documentElement.style.overflowY = ''
      document.body.style.overflowY = ''
    }
  }, [isMenuOpen])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    setMenuPathname(null)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((current) => {
      if (current && menuPathname === pathname) {
        setMenuPathname(null)
        return false
      }

      setMenuPathname(pathname)
      return true
    })
  }, [menuPathname, pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 hidden lg:flex items-stretch h-18
                    transition-all duration-700 ease-out
                    ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className={`flex items-center gap-3 pl-5 pr-6 border-b border-r border-[#e0d9f0]/70 shrink-0 ${glassPanelClass}`}>
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-12 h-10  overflow-hidden  shadow-[0_4px_12px_rgba(156,126,204,0.18)]">
              <Image src="/logo.png" width={1060} height={1060} alt="ArtisTec logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-[#17131f] font-bold text-[15px] tracking-[-0.01em]">ArtisTec</span>
          </Link>
        
        </div>

        <div className={`flex-1 flex items-center justify-center border-b border-[#e0d9f0]/70 ${glassPanelClass}`}>
          <div className="inline-flex items-center gap-1 rounded-full border border-white/65 bg-white/40 p-1 backdrop-blur-xl backdrop-saturate-150 shadow-[0_10px_26px_rgba(145,104,206,0.12),inset_0_1px_0_rgba(255,255,255,0.7)]">
            {navLinks.map(({ label, href }) => {
              const isActive = href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href)
              return (
                <Link
                  key={label}
                  href={href}
                  className="relative rounded-full px-5 py-2 text-[12px] font-medium"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[#17131f] shadow-[0_6px_16px_rgba(23,19,31,0.20)]"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-[#4d445d] hover:text-[#17131f]'
                  }`}>
                    {label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className={`flex items-center gap-2 px-5 border-b border-l border-[#e0d9f0]/70 shrink-0 ${glassPanelClass}`}>
          <ConnectButton href="/contact" />
        </div>
      </nav>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between lg:hidden h-15 px-4
                    border-b border-[#e0d9f0]/70 ${glassPanelClass}
                    transition-all duration-700 ease-out
                    ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-8">
            <Image src="/logo.png" width={360} height={360} alt="ArtisTec logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-[#17131f] font-bold text-[14px] tracking-[-0.01em]">ArtisTec</span>
        </Link>

        <button
          className={`flex items-center justify-center w-8 h-8 rounded-full ${glassButtonClass}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-4 h-3 relative flex flex-col justify-between">
            <span className={`block h-[1.5px] bg-[#17131f] rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-1.25' : ''}`} />
            <span className={`block h-[1.5px] bg-[#17131f] rounded-full transition-all duration-200 ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
            <span className={`block h-[1.5px] bg-[#17131f] rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-1.25' : ''}`} />
          </div>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 overflow-y-auto lg:hidden transition-all duration-500 ease-in-out
                    ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 backdrop-blur-2xl bg-white/90" />
        <div className="relative z-10 flex min-h-dvh flex-col px-8 pt-20 pb-24">
          <div className="flex-1 flex flex-col justify-center gap-1">
            {navLinks.map(({ label, href }, i) => {
              const isActive = href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href)
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className={`group flex items-center justify-between py-5 border-b border-[#e8e2f4] last:border-b-0
                              transition-all duration-500 ease-out
                              ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                  style={{ transitionDelay: isMenuOpen ? `${100 + i * 60}ms` : '0ms' }}
                >
                  <span className={`text-[1.8rem] font-bold tracking-[-0.03em] transition-colors duration-200 ${
                    isActive ? 'text-[#7c3aed]' : 'text-[#17131f]'
                  }`}>{label}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={isActive ? 'text-[#7c3aed]' : 'text-[#8890c4]'}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )
            })}
          </div>
          <div className="mt-auto flex justify-center">
            <Link href="/contact" onClick={closeMenu} className="flex items-center gap-2 rounded-full bg-[#17131f] text-white px-6 py-3 text-[13px] font-medium">
              Connect <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
