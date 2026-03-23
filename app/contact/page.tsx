'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ribbonBase = [
  'STRATEGY', 'CALL', 'ArtisTec', 'BUILD', 'SHIP', 'SCALE',
  'DESIGN', 'LAUNCH', 'GROW',
].reduce<string[]>((acc, s) => [...acc, s, '\u2736'], [])
const ribbonItems = [...ribbonBase, ...ribbonBase]

const stats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '4+',  label: 'Regions Served' },
  { value: '100%', label: 'On-time Delivery' },
]

const phoneCodes = [
  { code: '+971', label: 'UAE' },
  { code: '+966', label: 'KSA' },
  { code: '+974', label: 'QAT' },
  { code: '+965', label: 'KWT' },
  { code: '+973', label: 'BHR' },
  { code: '+968', label: 'OMN' },
  { code: '+91',  label: 'IND' },
  { code: '+44',  label: 'UK' },
  { code: '+1',   label: 'US' },
]

const inputCls =
  'w-full border border-[#e5dff5] rounded-md px-3 py-2 text-[12px] text-[#17131f] placeholder-[#cac3db] outline-none focus:border-[#9f7aea] focus:ring-2 focus:ring-[#9f7aea]/15 transition bg-white'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', countryCode: '+971', phone: '',
    companyName: '', companyRevenue: '', roleTitle: '', linkedin: '',
    projectDescription: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus('success')
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:h-screen md:overflow-hidden">

      {/* ── LEFT PANEL (desktop sidebar / mobile top banner) ── */}
      <div
        className="relative md:w-[42%] md:h-full flex overflow-hidden shrink-0"
        style={{ background: '#0d0b14', minHeight: '0' }}
      >
        {/* Decorative glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.22) 0%, transparent 100%)' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 100%, rgba(167,139,250,0.10) 0%, transparent 100%)' }} />
        <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.35) 40%, rgba(124,58,237,0.5) 60%, transparent)' }} />

        {/* Ribbon strip — hidden on mobile */}
        <div className="hidden md:flex relative shrink-0 w-9 flex-col overflow-hidden border-r z-10"
             style={{ borderColor: 'rgba(167,139,250,0.12)' }}>
          <div className="flex flex-col items-center gap-3 py-3"
               style={{ animation: 'marquee-vertical 28s linear infinite', ['--gap' as string]: '0.75rem' }}>
            {ribbonItems.map((item, i) =>
              item === '\u2736' ? (
                <span key={i} className="shrink-0 select-none text-[13px]" style={{ color: 'rgba(167,139,250,0.22)' }}>{'\u2736'}</span>
              ) : (
                <span key={i} className="shrink-0 select-none text-[9px] font-bold tracking-[0.22em]"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'rgba(167,139,250,0.38)' }}>
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Left content */}
        <div className="relative z-10 flex flex-1 flex-col px-6 py-5 md:py-7 xl:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 self-start group mb-0">
            <div className="w-7 h-7 overflow-hidden rounded-md ring-1 ring-[#a78bfa]/20 transition group-hover:ring-[#a78bfa]/50">
              <Image src="/logo.png" width={28} height={28} alt="ArtisTec" className="w-full h-full object-cover" />
            </div>
            <span className="text-[12px] font-bold tracking-[0.04em]" style={{ color: 'rgba(255,255,255,0.90)' }}>ArtisTec</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] opacity-80" />
          </Link>

          {/* Middle content */}
          <div className="flex-1 flex flex-col justify-center py-4 md:py-6">
            <p className="text-[8.5px] font-semibold tracking-[0.32em] mb-3" style={{ color: 'rgba(167,139,250,0.60)' }}>
              BOOK A STRATEGY CALL
            </p>
            <h1 className="font-bold leading-[0.92] tracking-[-0.05em] mb-3"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3rem)', color: '#ffffff' }}>
              Tell us<br />
              <span style={{ color: 'rgba(167,139,250,0.60)', fontWeight: 300 }}>about your</span><br />
              project.
            </h1>
            <p className="text-[12px] leading-[1.7] max-w-xs mb-5" style={{ color: 'rgba(255,255,255,0.42)' }}>
              From the Middle East to Silicon Valley — we design and ship
              products that cut through the noise, on time and at scale.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap items-center gap-0 divide-x" style={{ borderColor: 'rgba(167,139,250,0.20)' }}>
              {stats.map((s, i) => (
                <div key={s.label} className={i === 0 ? 'pr-4' : i === stats.length - 1 ? 'pl-4' : 'px-4'}>
                  <p className="text-[1.05rem] font-bold" style={{ color: '#ffffff' }}>{s.value}</p>
                  <p className="text-[9.5px]" style={{ color: 'rgba(167,139,250,0.55)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full hidden md:block" style={{ background: 'rgba(167,139,250,0.10)' }} />
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 bg-white overflow-y-auto flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-6 py-5 md:py-6 lg:px-8 xl:px-10">
          <div className="max-w-lg mx-auto w-full">

            <h2 className="text-[1.15rem] font-bold text-[#0f0a1e] mb-0.5">Book a Strategy Call</h2>
            <p className="text-[11.5px] mb-4" style={{ color: '#9e97b0' }}>
              Fields marked <span className="text-red-500">*</span> are required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">

              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#0f0a1e] mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" name="fullName" placeholder="Alex Johnson" required value={formData.fullName} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#0f0a1e] mb-1">Work Email <span className="text-red-500">*</span></label>
                  <input type="email" name="email" placeholder="alex@company.com" required value={formData.email} onChange={handleChange} className={inputCls} />
                </div>
              </div>

              {/* Row 2: Company + Revenue */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#0f0a1e] mb-1">Company Name <span className="text-red-500">*</span></label>
                  <input type="text" name="companyName" placeholder="Acme Corp" required value={formData.companyName} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#0f0a1e] mb-1">Company Revenue</label>
                  <div className="relative">
                    <select name="companyRevenue" value={formData.companyRevenue} onChange={handleChange}
                      className={inputCls + ' appearance-none'}>
                      <option value="">Select range</option>
                      <option>Under $500K</option><option>$500K – $2M</option>
                      <option>$2M – $10M</option><option>$10M – $50M</option><option>$50M+</option>
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#b5aecb" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                </div>
              </div>

              {/* Row 3: Phone */}
              <div>
                <label className="block text-[11px] font-semibold text-[#0f0a1e] mb-1">Phone Number <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select name="countryCode" value={formData.countryCode} onChange={handleChange}
                      className="border border-[#e5dff5] rounded-md pl-2.5 pr-6 py-2 text-[12px] text-[#17131f] outline-none focus:border-[#9f7aea] focus:ring-2 focus:ring-[#9f7aea]/15 transition bg-white appearance-none w-22">
                      {phoneCodes.map(({ code, label }) => (
                        <option key={code} value={code}>{code} {label}</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#b5aecb" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <input type="tel" name="phone" placeholder="50 123 4567" required value={formData.phone} onChange={handleChange} className={inputCls} />
                </div>
              </div>

              {/* Row 4: Role + LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#0f0a1e] mb-1">Your Role / Title <span className="text-red-500">*</span></label>
                  <input type="text" name="roleTitle" placeholder="CTO, Founder, PM..." required value={formData.roleTitle} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#0f0a1e] mb-1">LinkedIn Profile</label>
                  <input type="text" name="linkedin" placeholder="linkedin.com/in/..." value={formData.linkedin} onChange={handleChange} className={inputCls} />
                </div>
              </div>

              {/* Row 5: Notes */}
              <div>
                <label className="block text-[11px] font-semibold text-[#0f0a1e] mb-1">Anything we should know?</label>
                <textarea name="projectDescription" rows={2} maxLength={200}
                  placeholder="Project context, timeline, tech preferences..."
                  value={formData.projectDescription} onChange={handleChange}
                  className={inputCls + ' resize-none'} />
                <p className="text-right text-[10px] text-[#cac3db] -mt-0.5">{formData.projectDescription.length}/200</p>
              </div>

              {/* Submit */}
              {status === 'success' ? (
                <div className="rounded-md bg-green-50 border border-green-200 px-4 py-5 text-center">
                  <p className="text-[13px] font-semibold text-green-700 mb-1">Message sent!</p>
                  <p className="text-[12px] text-green-600">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  {status === 'error' && (
                    <p className="text-[12px] text-red-500 text-center">{errorMsg}</p>
                  )}
                  <button type="submit" disabled={status === 'loading'}
                    className="w-full bg-[#0f0a1e] text-white rounded-md py-3 text-[12.5px] font-semibold tracking-[0.02em] hover:bg-[#1e1a2e] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'loading' ? 'Sending…' : 'Talk to an Expert'}
                    {status !== 'loading' && <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </button>
                </>
              )}

              <p className="text-center text-[11px]" style={{ color: '#9e97b0' }}>
                Are you a startup?{' '}
                <Link href="/startup" className="text-[#7c3aed] hover:underline font-medium">
                  Start here
                  <svg className="inline ml-0.5" width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
