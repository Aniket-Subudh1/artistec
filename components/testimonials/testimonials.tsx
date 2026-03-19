'use client';
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Marquee } from '@/components/ui/marquee';
import { ScrambleText } from '@/components/ui/scramble-text';

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'VantageAI',
    body: "Artistec delivered our AI platform ahead of schedule. The quality of work and attention to detail is unmatched — our system now handles 10x the load we projected.",
    initials: 'SM',
    color: '#7c3aed',
  },
  {
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'NovaBuild',
    body: "The mobile app they built exceeded every expectation. Clean code, stunning design, delivered two weeks ahead of schedule. We'll be back for every future product.",
    initials: 'MC',
    color: '#9333ea',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Operations',
    company: 'Orbis Logistics',
    body: "Their drone and robotics team built us a fully custom fleet management system. It's running 24/7 with zero downtime. Phenomenal engineering.",
    initials: 'PN',
    color: '#6d28d9',
  },
  {
    name: 'Liam O\'Brien',
    role: 'Co-founder',
    company: 'PulseMedia',
    body: "The AI content engine they developed generates copy that sounds genuinely human. Our organic traffic doubled in the first quarter after deployment.",
    initials: 'LO',
    color: '#8b5cf6',
  },
  {
    name: 'Elena Vasquez',
    role: 'Product Manager',
    company: 'StreamLine',
    body: "From concept to deployment the team was communicative and precise. The CRM integration alone saved our ops team 20+ hours per week.",
    initials: 'EV',
    color: '#7c3aed',
  },
  {
    name: 'David Park',
    role: 'CEO',
    company: 'NeuraScale',
    body: "We've worked with many dev agencies. Artistec is in a different league — technically brilliant, always on time, and they truly understand product vision.",
    initials: 'DP',
    color: '#4c1d95',
  },
  {
    name: 'Amara Osei',
    role: 'Director of Engineering',
    company: 'BridgeTech',
    body: "The automation workflows they built cut our manual processing time by 75%. The team brought ideas we hadn't even considered. Real partners, not just vendors.",
    initials: 'AO',
    color: '#6d28d9',
  },
  {
    name: 'Tom Nakamura',
    role: 'VP Product',
    company: 'Axiom Labs',
    body: "Artistec rebuilt our legacy platform in four months. Migration was seamless, the new UI is night and day, and performance improved by an order of magnitude.",
    initials: 'TN',
    color: '#9333ea',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({
  name,
  role,
  company,
  body,
  initials,
  color,
}: {
  name: string;
  role: string;
  company: string;
  body: string;
  initials: string;
  color: string;
}) {
  return (
    <figure className={cn(
      'relative w-72 shrink-0 cursor-pointer overflow-hidden rounded-2xl border p-5',
      'border-[#c4b0f2]/40 bg-[#f5f2ff]/70',
      'hover:bg-[#ede8ff]/90 hover:border-[#a78bfa]/60',
      'transition-all duration-300',
    )}>
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 50% 110%, transparent 42%, rgba(124,58,237,0.10) 100%)',
        }}
      />
      <div className="relative flex items-center gap-3 mb-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#2e1065]">{name}</p>
          <p className="text-[11px] text-[#6d28d9]/55">
            {role} · {company}
          </p>
        </div>
      </div>
      <blockquote className="relative text-[12.5px] leading-[1.85] text-[#4c1d95]/70">
        &ldquo;{body}&rdquo;
      </blockquote>
    </figure>
  );
}

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#fcfbff]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 90% 10%, rgba(215,200,251,0.28) 0%, transparent 58%), ' +
            'radial-gradient(ellipse 55% 40% at 5% 80%, rgba(197,202,245,0.20) 0%, transparent 52%), ' +
            'radial-gradient(ellipse 40% 35% at 50% 50%, rgba(167,139,250,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="h-px bg-gray-200" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        <div
          className={cn('mb-14 flex items-stretch gap-8', !visible ? 'card-hidden' : 'card-animate')}
          style={{ animationDelay: '0ms' }}
        >
          <div
            className="hidden lg:flex shrink-0 flex-col items-center"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s 0.1s' }}
          >
            <div className="w-px flex-1 bg-linear-to-b from-transparent to-gray-200" />
            <span
              className="shrink-0 py-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-gray-400"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Client Stories
            </span>
            <div className="h-6 w-px bg-gray-200" />
          </div>

          <div className="flex flex-1 flex-col">
            <div
              className="mb-7 flex items-center gap-4 fade-up-sm"
              style={{ animationDelay: '0ms', animationFillMode: 'both' }}
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400 lg:hidden">
                Client Stories
              </span>
              <div className="h-px flex-1 bg-gray-200" />
              <span className="shrink-0 text-[11px] font-light tracking-widest text-[#c4b0f2]">01</span>
            </div>

            <h2
              className="mb-4 text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-gray-900 sm:text-[2.6rem] md:text-[3.2rem] blur-in"
              style={{ animationDelay: '0.1s', animationFillMode: 'both', opacity: visible ? undefined : 0 }}
            >
              {visible ? (
                <>
                  <ScrambleText text="Trusted by builders" delay={150} duration={900} trigger={visible} />{' '}
                  <span className="text-[#d7c8fb]/92">
                    <ScrambleText text="across the globe." delay={500} duration={800} trigger={visible} />
                  </span>
                </>
              ) : (
                <>Trusted by builders <span className="text-[#d7c8fb]/92">across the globe.</span></>
              )}
            </h2>

            <p
              className="max-w-md text-[14px] leading-[1.85] text-gray-500 blur-in"
              style={{ animationDelay: '0.55s', animationFillMode: 'both', opacity: visible ? undefined : 0 }}
            >
              Real results from real clients — from AI-powered platforms to robotics systems. Here&apos;s what teams say about working with Artistec.
            </p>

            <div
              className="mt-9 h-px bg-gray-200"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s 0.6s' }}
            />
          </div>
        </div>

        <div
          className={cn('relative', !visible ? 'card-hidden' : 'card-animate')}
          style={{ animationDelay: '200ms' }}
        >
          <Marquee pauseOnHover className="[--duration:28s] [--gap:1rem]">
            {firstRow.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="mt-4 [--duration:32s] [--gap:1rem]">
            {secondRow.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#fcfbff]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#fcfbff]" />
        </div>

      </div>
    </section>
  );
}
