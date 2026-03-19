'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Globe3D, GlobeMarker } from '@/components/ui/3d-globe';
import { ScrambleText } from '@/components/ui/scramble-text';
import { cn } from '@/lib/utils';
import { LiquidButton } from '@/components/ui/start-project-button';

const ctaMarkers: GlobeMarker[] = [
  { lat: 29.3759, lng: 47.9774, src: 'https://assets.aceternity.com/avatars/1.webp', label: 'Kuwait City' },
  { lat: 40.7128, lng: -74.006, src: 'https://assets.aceternity.com/avatars/2.webp', label: 'New York' },
  { lat: 51.5074, lng: -0.1278, src: 'https://assets.aceternity.com/avatars/3.webp', label: 'London' },
  { lat: 28.6139, lng: 77.209, src: 'https://assets.aceternity.com/avatars/4.webp', label: 'New Delhi' },
  { lat: 48.8566, lng: 2.3522, src: 'https://assets.aceternity.com/avatars/5.webp', label: 'Paris' },
  { lat: 1.3521, lng: 103.8198, src: 'https://assets.aceternity.com/avatars/6.webp', label: 'Singapore' },
  { lat: 25.2048, lng: 55.2708, src: 'https://assets.aceternity.com/avatars/7.webp', label: 'Dubai' },
  { lat: 35.6762, lng: 139.6503, src: 'https://assets.aceternity.com/avatars/8.webp', label: 'Tokyo' },
  { lat: 43.6532, lng: -79.3832, src: 'https://assets.aceternity.com/avatars/9.webp', label: 'Toronto' },
];

export default function CTA() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#fcfbff]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 5% 90%, rgba(215,200,251,0.28) 0%, transparent 55%), ' +
            'radial-gradient(ellipse 55% 45% at 95% 10%, rgba(197,202,245,0.22) 0%, transparent 52%)',
        }}
      />

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
              Let&apos;s Build
            </span>
            <div className="h-6 w-px bg-gray-200" />
          </div>

          <div className="flex flex-1 flex-col">
            <div
              className="mb-7 flex items-center gap-4 fade-up-sm"
              style={{ animationDelay: '0ms', animationFillMode: 'both' }}
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400 lg:hidden">
                Let&apos;s Build
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
                  <ScrambleText text="Ready to build" delay={150} duration={900} trigger={visible} />{' '}
                  <span className="text-[#d7c8fb]/92">
                    <ScrambleText text="something great?" delay={500} duration={800} trigger={visible} />
                  </span>
                </>
              ) : (
                <>Ready to build <span className="text-[#d7c8fb]/92">something great?</span></>
              )}
            </h2>

            <p
              className="max-w-md text-[14px] leading-[1.85] text-gray-500 blur-in"
              style={{ animationDelay: '0.55s', animationFillMode: 'both', opacity: visible ? undefined : 0 }}
            >
              From the Middle East to Silicon Valley, we design and ship products that cut through the noise — on time, on budget, at scale.
            </p>

            <div
              className="mt-9 h-px bg-gray-200"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s 0.6s' }}
            />
          </div>
        </div>

        <div
          className={cn(!visible ? 'card-hidden' : 'card-animate')}
          style={{ animationDelay: '150ms' }}
        >
          <div className="relative h-100 w-full overflow-hidden rounded-2xl border border-[#c4b0f2]/40 bg-linear-to-br from-[#ede8ff] via-[#f0ebff] to-[#f5f2ff] shadow-[0_1px_3px_rgba(139,92,246,0.06),0_8px_32px_rgba(139,92,246,0.10)]">

            <div className="pointer-events-none absolute inset-0 z-20 bg-linear-to-r from-[#ede8ff] via-[#ede8ff]/70 via-35% to-transparent" />

            <div className="relative z-30 flex h-full flex-col justify-center p-8 md:p-14">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7c3aed]/60">
                Get started today
              </p>

              <h3 className="max-w-sm text-[1.65rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#1e0a4c] sm:text-[2.1rem]">
                Your Vision.
                <br />
                Our Code.
                <br />
                <span className="text-[#7c3aed]">Delivered Globally.</span>
              </h3>

              <p className="mt-4 max-w-xs text-[13px] leading-[1.8] text-[#4c1d95]/65">
                Trusted by builders across the Middle East, South Asia, Europe, and North America.
              </p>

              <div className="mt-7">
                <LiquidButton label="Start Your Project" href="#contact" />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-0 divide-x divide-[#c4b0f2]/40">
                <div className="pr-5">
                  <p className="text-[1.1rem] font-bold text-[#1e0a4c]">50+</p>
                  <p className="text-[11px] text-[#4c1d95]/55">Projects Shipped</p>
                </div>
                <div className="px-5">
                  <p className="text-[1.1rem] font-bold text-[#1e0a4c]">4+</p>
                  <p className="text-[11px] text-[#4c1d95]/55">Regions Served</p>
                </div>
                <div className="pl-5">
                  <p className="text-[1.1rem] font-bold text-[#1e0a4c]">100%</p>
                  <p className="text-[11px] text-[#4c1d95]/55">On-time Delivery</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-72 -bottom-96 z-10 size-160 md:-bottom-80 md:size-180">
              <Globe3D
                className="h-full w-full"
                markers={ctaMarkers}
                config={{
                  atmosphereColor: '#a78bfa',
                  atmosphereIntensity: 0.6,
                  showAtmosphere: true,
                  bumpScale: 5,
                  autoRotateSpeed: 0.5,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
