'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/footer/footer'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Check, Layers, Sparkles, Zap, Cpu, TrendingUp, Shield, Users, Award } from 'lucide-react'

function useVisible(threshold = 0.08): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

const services = [
  {
    index: '01',
    tag: 'Development',
    Icon: Layers,
    title: 'Website & Mobile App Development',
    tagline: 'Your product, perfected — across every platform.',
    description:
      'We architect and build full-stack web apps, progressive web apps, and native Android & iOS mobile applications. From pixel-perfect UI/UX design to cloud deployment, API integration, and long-term platform modernisation — we own the entire product lifecycle so you never have to manage multiple vendors.',
    deliverables: [
      'Custom React / Next.js & React Native builds',
      'UI/UX design systems and component libraries',
      'Cloud deployment on AWS, GCP, or Azure',
      'Ongoing maintenance, versioning, and scaling',
      'SEO-optimised architecture from day one',
    ],
    stack: ['Next.js', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Figma'],
    bg: 'bg-[#fcfbff]',
    accent: '#7c3aed',
  },
  {
    index: '02',
    tag: 'Artificial Intelligence',
    Icon: Sparkles,
    title: 'AI-Powered Content & Strategy',
    tagline: 'Words that convert. Content that compounds.',
    description:
      'We produce UX-focused, SEO-engineered, and brand-consistent content using advanced AI pipelines trained on your product\'s tone and audience. From landing pages to in-app microcopy, every word is conversion-optimised and effortlessly on-brand — produced at a speed no human team can match.',
    deliverables: [
      'AI writing pipelines tailored to your brand voice',
      'SEO keyword strategy and semantic content clustering',
      'In-app microcopy, onboarding flows, and UX writing',
      'Blog, social, and campaign content at scale',
      'A/B testable copy variants for conversion optimisation',
    ],
    stack: ['GPT-4o', 'LangChain', 'RAG Pipelines', 'SEO Analytics', 'Content Strategy', 'Copywriting'],
    bg: 'bg-[#f7f3ff]',
    accent: '#6d28d9',
  },
  {
    index: '03',
    tag: 'Automation',
    Icon: Zap,
    title: 'AI, Automation & CRM',
    tagline: 'Eliminate repetition. Amplify what matters.',
    description:
      'We integrate intelligent automation into your business operations — AI chatbots, smart workflows, cybersecurity hardening, and CRM systems that actually adapt to how your team works. The result: leaner operations, faster response times, and zero dropped balls across every customer touchpoint.',
    deliverables: [
      'AI chatbot and virtual assistant development',
      'n8n / Zapier / custom workflow automation',
      'CRM implementation and data migration (HubSpot, Salesforce)',
      'Cybersecurity audits and hardening',
      'Real-time analytics and reporting dashboards',
    ],
    stack: ['LLM Agents', 'n8n', 'HubSpot', 'Salesforce', 'Python', 'Cybersecurity', 'Power BI'],
    bg: 'bg-[#fcfbff]',
    accent: '#5b21b6',
  },
  {
    index: '04',
    tag: 'Hardware',
    Icon: Cpu,
    title: 'Robotics, Drones & Smart Systems',
    tagline: 'Building the physical edge of intelligence.',
    description:
      'We design and deploy humanoid robotics, autonomous drone systems, and custom smart hardware for industrial, logistics, security, and commercial use cases. Our hardware team operates at the intersection of firmware engineering, computer vision, and real-world deployment — from prototype to production.',
    deliverables: [
      'Custom drone system design',
      'Humanoid and industrial robotics integration',
      'Computer vision and sensor fusion pipelines',
      'Embedded firmware and IoT edge computing',
      'End-to-end testing, compliance, and deployment',
    ],
    stack: ['ROS 2', 'Python', 'C++', 'Computer Vision', 'CUDA', 'PX4', 'IoT / MQTT'],
    bg: 'bg-[#f7f3ff]',
    accent: '#4c1d95',
  },
]

const advantages = [
  {
    index: '01',
    Icon: Users,
    title: 'Senior-only talent',
    body: 'Every project is handled exclusively by senior engineers and designers — no juniors, no outsourcing. You get the sharpest minds from day one, not after escalation.',
  },
  {
    index: '02',
    Icon: Award,
    title: '100% on-time delivery',
    body: "We've maintained a perfect on-time delivery record across 50+ projects. Not by working miracles — but by scoping correctly, communicating constantly, and shipping with iron discipline.",
  },
  {
    index: '03',
    Icon: TrendingUp,
    title: 'Cross-domain depth',
    body: 'We operate across software, AI, automation, and hardware under one roof. That rare cross-domain expertise means smarter architecture decisions and integrations that actually hold.',
  },
  {
    index: '04',
    Icon: Shield,
    title: 'End-to-end ownership',
    body: 'We own the full product lifecycle — from the first wireframe to cloud deployment and post-launch support. One team, total accountability, zero finger-pointing.',
  },
]

const expertise = [
  {
    area: 'Web & Mobile',
    level: 5,
    stack: ['Next.js', 'React Native', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
  },
  {
    area: 'AI & Machine Learning',
    level: 5,
    stack: ['Python', 'LangChain', 'OpenAI API', 'RAG', 'Fine-tuning', 'Vector DBs', 'Hugging Face'],
  },
  {
    area: 'Automation & CRM',
    level: 4,
    stack: ['n8n', 'HubSpot', 'Salesforce', 'Zapier', 'REST APIs', 'Webhooks', 'Power BI'],
  },
  {
    area: 'Robotics & Hardware',
    level: 4,
    stack: ['ROS 2', 'C++', 'PX4', 'Computer Vision', 'CUDA', 'Embedded C', 'MQTT'],
  },
]

export default function ServicesPage() {
  const [heroRef, heroVisible] = useVisible(0.05)
  const [servRef] = useVisible(0.05)
  const [whyRef, whyVisible] = useVisible(0.08)
  const [expRef, expVisible] = useVisible(0.08)
  const [ctaRef, ctaVisible] = useVisible(0.1)

  return (
    <>

      <section className="relative min-h-screen w-full overflow-hidden bg-[#fcfbff] flex flex-col">
        {/* dot-grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(124,58,237,0.13) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* radial glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 5% 10%, rgba(215,200,251,0.40) 0%, transparent 60%), ' +
              'radial-gradient(ellipse 50% 45% at 90% 80%, rgba(197,202,245,0.28) 0%, transparent 55%)',
          }}
        />

        {/* giant watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 select-none font-bold leading-none tracking-[-0.06em] text-[#7c3aed]/5"
          style={{ fontSize: 'clamp(120px, 22vw, 340px)' }}
        >
          SERVICES
        </span>

        <div
          ref={heroRef}
          className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-24 pt-36 sm:px-8 md:px-12 lg:px-16 xl:px-24"
        >
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div
                className={cn(
                  'mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#c4b0f2]/50 bg-[#ece6ff]/60 px-4 py-1.5',
                  !heroVisible ? 'opacity-0' : 'blur-in',
                )}
                style={{ animationDelay: '0s', animationFillMode: 'both' }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6d28d9]">
                  What We Build
                </span>
              </div>

              <h1
                className={cn(
                  'mb-6 text-[2.6rem] font-bold leading-[1.04] tracking-[-0.045em] text-[#0d0b14] sm:text-[3.4rem] md:text-[4rem]',
                  !heroVisible ? 'opacity-0' : 'fade-up-sm',
                )}
                style={{ animationDelay: '0.08s', animationFillMode: 'both' }}
              >
                Four disciplines.{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  One studio.
                </span>
              </h1>

              <p
                className={cn(
                  'mb-10 max-w-lg text-[15px] leading-[1.85] text-[#4c1d95]/60',
                  !heroVisible ? 'opacity-0' : 'fade-up-sm',
                )}
                style={{ animationDelay: '0.18s', animationFillMode: 'both' }}
              >
                Artistec operates at the intersection of software, intelligence, automation, and hardware. We don&apos;t pick one lane — we build across all four so your product has every advantage.
              </p>

              <div
                className={cn(
                  'flex flex-wrap gap-3',
                  !heroVisible ? 'opacity-0' : 'fade-up-sm',
                )}
                style={{ animationDelay: '0.28s', animationFillMode: 'both' }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-6 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#6d28d9] hover:shadow-[0_8px_28px_rgba(124,58,237,0.35)]"
                >
                  Start a project <ArrowUpRight size={14} />
                </Link>
                <a
                  href="#services-detail"
                  className="inline-flex items-center gap-2 rounded-full border border-[#c4b0f2]/60 bg-white/70 px-6 py-3 text-[13px] font-semibold text-[#6d28d9] transition-all duration-300 hover:border-[#a78bfa] hover:bg-white"
                >
                  Explore all services
                </a>
              </div>
            </div>

            {/* Right — service index cards */}
            <div
              className={cn(
                'grid grid-cols-2 gap-3',
                !heroVisible ? 'opacity-0' : 'fade-up-sm',
              )}
              style={{ animationDelay: '0.22s', animationFillMode: 'both' }}
            >
              {services.map((s) => {
                const Icon = s.Icon
                return (
                  <a
                    key={s.index}
                    href={`#service-${s.index}`}
                    className="group flex flex-col gap-3 rounded-2xl border border-[#e0d4fb]/70 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c4b0f2] hover:shadow-[0_8px_32px_rgba(124,58,237,0.10)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ece6ff]">
                        <Icon size={16} className="text-[#7c3aed]" />
                      </div>
                      <span className="text-[10px] font-light tracking-[0.25em] text-[#a78bfa]/70">
                        {s.index}
                      </span>
                    </div>
                    <div>
                      <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a78bfa]/80">
                        {s.tag}
                      </span>
                      <p className="text-[13px] font-semibold leading-snug tracking-[-0.015em] text-[#1e0a3c]">
                        {s.title}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#fcfbff] to-transparent" />
      </section>

      {/* ── SERVICE PANELS ────────────────────────────────────── */}
      <div id="services-detail" ref={servRef}>
        {services.map((s, i) => {
          const Icon = s.Icon
          const isEven = i % 2 === 1
          return (
            <section
              key={s.index}
              id={`service-${s.index}`}
              className={cn('relative w-full overflow-hidden', s.bg)}
            >
              {/* accent stripe */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-full w-1"
                style={{ background: `linear-gradient(180deg, transparent 0%, ${s.accent} 40%, transparent 100%)` }}
              />

              <div className="mx-auto grid max-w-7xl items-start gap-0 px-5 py-20 sm:px-8 md:px-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-16 lg:py-28 xl:px-24">
                {/* ── Left col ── */}
                <div className={cn('order-1', isEven && 'lg:order-2')}>
                  <div className="mb-8 flex items-center gap-4">
                    <span
                      className="shrink-0 font-bold leading-none tracking-[-0.06em] text-[#7c3aed]/8"
                      style={{ fontSize: 'clamp(56px, 8vw, 96px)' }}
                    >
                      {s.index}
                    </span>
                    <div>
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a78bfa]">
                        {s.tag}
                      </span>
                      <div
                        className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{ background: `${s.accent}18` }}
                      >
                        <Icon size={16} style={{ color: s.accent }} />
                      </div>
                    </div>
                  </div>

                  <h2 className="mb-4 text-[1.8rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#0d0b14] sm:text-[2.2rem] md:text-[2.6rem]">
                    {s.title}
                  </h2>

                  <p
                    className="mb-7 text-[13px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: s.accent }}
                  >
                    {s.tagline}
                  </p>

                  {/* deliverables */}
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: `${s.accent}18` }}
                        >
                          <Check size={10} style={{ color: s.accent }} />
                        </span>
                        <span className="text-[13.5px] leading-relaxed text-[#1e0a3c]/75">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Right col ── */}
                <div className={cn('order-2 flex flex-col justify-between gap-10', isEven && 'lg:order-1')}>
                  {/* description */}
                  <div>
                    <p className="text-[15.5px] leading-[1.9] text-[#1e0a3c]/65">
                      {s.description}
                    </p>
                  </div>

                  {/* stack chips */}
                  <div>
                    <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a78bfa]/80">
                      Tech & Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border px-3.5 py-1 text-[11px] font-medium"
                          style={{
                            borderColor: `${s.accent}28`,
                            color: s.accent,
                            background: `${s.accent}0a`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* pull-quote box */}
                  <div
                    className="rounded-2xl border p-6"
                    style={{
                      borderColor: `${s.accent}22`,
                      background: `${s.accent}07`,
                    }}
                  >
                    <span
                      className="mb-2 block font-bold leading-none"
                      style={{ fontSize: '3rem', color: `${s.accent}28` }}
                    >
                      &ldquo;
                    </span>
                    <p
                      className="text-[15px] font-semibold leading-[1.55] tracking-[-0.01em]"
                      style={{ color: s.accent }}
                    >
                      {s.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* row divider */}
              <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="h-px bg-linear-to-r from-transparent via-[#c4b0f2]/35 to-transparent" />
              </div>
            </section>
          )
        })}
      </div>

      {/* ── WHY WE'RE BETTER ─────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#0d0b14] py-24 lg:py-36">
        {/* subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(124,58,237,0.16) 0%, transparent 62%)',
          }}
        />

        <div
          ref={whyRef}
          className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24"
        >
          {/* section header */}
          <div
            className={cn(
              'mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between',
              !whyVisible ? 'card-hidden' : 'card-animate',
            )}
          >
            <div>
              <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.35em] text-[#a78bfa]/60">
                Why Artistec
              </span>
              <h2 className="text-[2.2rem] font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3rem]">
                Built for the bold,{' '}
                <span className="text-[#a78bfa]">not the average.</span>
              </h2>
            </div>
            <p className="max-w-sm text-[13.5px] leading-relaxed text-white/40">
              Four principles that separate us from every agency pitching a deck.
            </p>
          </div>

          {/* advantage rows */}
          <div className="divide-y divide-white/8">
            {advantages.map((a, i) => {
              const Icon = a.Icon
              return (
                <div
                  key={a.index}
                  className={cn(
                    'group flex flex-col gap-6 py-10 transition-colors duration-300 hover:bg-white/2 lg:flex-row lg:items-center lg:gap-16',
                    !whyVisible ? 'card-hidden' : 'card-animate',
                  )}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* index */}
                  <span className="shrink-0 font-bold leading-none tracking-[-0.06em] text-white/8 transition-colors duration-300 group-hover:text-white/14"
                    style={{ fontSize: 'clamp(42px, 6vw, 72px)' }}>
                    {a.index}
                  </span>

                  {/* icon + title */}
                  <div className="flex shrink-0 items-center gap-4 lg:w-64">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]/20 transition-colors duration-300 group-hover:bg-[#7c3aed]/30">
                      <Icon size={18} className="text-[#a78bfa]" />
                    </div>
                    <h3 className="text-[1.1rem] font-bold tracking-[-0.02em] text-white">
                      {a.title}
                    </h3>
                  </div>

                  {/* body */}
                  <p className="flex-1 text-[14px] leading-[1.85] text-white/45">
                    {a.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE MATRIX ─────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#fcfbff] py-24 lg:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 45% at 90% 20%, rgba(215,200,251,0.28) 0%, transparent 52%), ' +
              'radial-gradient(ellipse 45% 40% at 10% 80%, rgba(197,202,245,0.22) 0%, transparent 50%)',
          }}
        />

        <div
          ref={expRef}
          className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24"
        >
          {/* header */}
          <div
            className={cn(
              'mb-16 grid gap-6 lg:grid-cols-2 lg:items-end',
              !expVisible ? 'card-hidden' : 'card-animate',
            )}
          >
            <div>
              <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.35em] text-[#a78bfa]">
                Our Expertise
              </span>
              <h2 className="text-[2.2rem] font-bold leading-[1.06] tracking-[-0.04em] text-[#0d0b14] sm:text-[3rem]">
                Wide by design.{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Deep by discipline.
                </span>
              </h2>
            </div>
            <p className="text-[14px] leading-[1.85] text-[#4c1d95]/55 lg:max-w-sm lg:text-right">
              Mastery isn&apos;t claimed — it&apos;s demonstrated. Here&apos;s exactly what we stack in each domain, and how deep our capability runs.
            </p>
          </div>

          {/* matrix rows */}
          <div className="space-y-5">
            {expertise.map((e, i) => (
              <div
                key={e.area}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-[#e0d4fb]/60 bg-white/70 p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-0.5 hover:border-[#c4b0f2] hover:shadow-[0_8px_40px_rgba(124,58,237,0.08)]',
                  !expVisible ? 'card-hidden' : 'card-animate',
                )}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* hover sweep */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#7c3aed]/3 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                  {/* area + dots */}
                  <div className="flex shrink-0 items-center gap-4 sm:w-52">
                    <span className="text-[15px] font-bold tracking-[-0.02em] text-[#1e0a3c]">
                      {e.area}
                    </span>
                  </div>

                  {/* proficiency dots */}
                  <div className="flex shrink-0 items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, d) => (
                      <span
                        key={d}
                        className="block h-2.5 w-2.5 rounded-full transition-colors duration-300"
                        style={{
                          background: d < e.level ? '#7c3aed' : '#e0d4fb',
                          opacity: d < e.level ? 1 : 0.5,
                        }}
                      />
                    ))}
                    <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a78bfa]/70">
                      {e.level === 5 ? 'Expert' : 'Advanced'}
                    </span>
                  </div>

                  {/* stack pills */}
                  <div className="flex flex-1 flex-wrap gap-2">
                    {e.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#c4b0f2]/40 bg-[#ece6ff]/60 px-3 py-1 text-[11px] font-medium text-[#6d28d9] transition-colors duration-300 group-hover:border-[#c4b0f2]/70 group-hover:bg-[#ece6ff]/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* bottom note */}
          <div
            className={cn(
              'mt-12 flex items-center gap-3',
              !expVisible ? 'opacity-0' : 'blur-in',
            )}
            style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
          >
            <div className="h-px flex-1 bg-linear-to-r from-[#c4b0f2]/40 to-transparent" />
            <span className="text-[11px] font-medium text-[#a78bfa]/60">
              50+ projects shipped across all four domains
            </span>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#0d0b14] py-24 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(124,58,237,0.22) 0%, transparent 60%)',
          }}
        />
        <div
          ref={ctaRef}
          className={cn(
            'relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8',
            !ctaVisible ? 'card-hidden' : 'card-animate',
          )}
        >
          <span className="mb-5 text-[9px] font-semibold uppercase tracking-[0.38em] text-[#a78bfa]/50">
            Start building
          </span>
          <h2 className="mb-6 text-[2.4rem] font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.2rem] md:text-[4rem]">
            Ready to ship{' '}
            <span className="text-[#a78bfa]">something exceptional?</span>
          </h2>
          <p className="mb-10 max-w-lg text-[14.5px] leading-[1.85] text-white/40">
            Whether you need a product built from scratch, an AI layer added, or a hardware system deployed — let&apos;s talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#7c3aed] px-8 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#6d28d9] hover:shadow-[0_8px_32px_rgba(124,58,237,0.45)]"
            >
              Start a project <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/16 px-8 py-4 text-[14px] font-semibold text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              About Artistec
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
