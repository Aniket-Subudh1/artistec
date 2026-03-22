'use client';
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { WorldMap } from '@/components/ui/world-map';
import { BlurVignette, BlurVignetteArticle } from '@/components/ui/blur-vignette';
import Lottie from 'lottie-react';
import webAnim from '@/public/animation/web.json';
import aiAnim from '@/public/animation/ai.json';
import crmAnim from '@/public/animation/crm.json';
import robotAnim from '@/public/animation/robot.json';
import droneAnim from '@/public/animation/drone.json';

import { ScrambleText } from '@/components/ui/scramble-text';
import { Terminal } from '@/components/ui/terminal';

const services = [
  {
    animationData: webAnim,
    title: 'Website & Mobile App Development',
    description: 'Professional website and mobile application development for Android & iOS, covering UI/UX design, deployment, and modernisation of digital platforms.',
    tag: 'Development',
    index: '01',
    className: 'col-span-3 lg:col-span-2',
    lottieClass: 'scale-110',
  },
  {
    animationData: aiAnim,
    title: 'AI-Powered Content',
    description: 'Generate AI-powered, UX-focused, and SEO-friendly content tailored for your digital product — effortless, effective, and conversion-ready.',
    tag: 'Artificial Intelligence',
    index: '02',
    className: 'col-span-3 lg:col-span-1',
    lottieClass: '',
  },
  {
    animationData: crmAnim,
    title: 'AI, Automation & CRM',
    description: 'AI-powered chatbots, intelligent automation, cybersecurity, and CRM integration for existing websites, apps, and business operations.',
    tag: 'Automation',
    index: '03',
    className: 'col-span-3 lg:col-span-1',
    lottieClass: '',
  },
  {
    animationData: [robotAnim, droneAnim],
    title: 'Robotics, Drones & Smart Systems',
    description: 'Development and deployment of robotics, humanoid, and drone technologies — ready-made or fully customised systems based on client requirements.',
    tag: 'Hardware',
    index: '04',
    className: 'col-span-3 lg:col-span-2',
    lottieClass: 'scale-110',
  },
];

const shiftLng = 8; 

const mapDots = [
  { start: { lat: 13.3759, lng: 41.9774 + shiftLng }, end: { lat: 42.5869, lng: -82.9194 + shiftLng } },
  { start: { lat: 13.3759, lng: 41.9774 + shiftLng }, end: { lat: 20.2961, lng: 85.8245 + shiftLng } },
  { start: { lat: 13.3759, lng: 41.9774 + shiftLng }, end: { lat: 48.8566, lng: 2.3522 + shiftLng } },
  { start: { lat: 20.2961, lng: 85.8245 + shiftLng }, end: { lat: 48.8566, lng: 2.3522 + shiftLng } },
];
function BentoCard({
  animationData,
  title,
  description,
  tag,
  index,
  className,
  lottieClass,
  delay = 0,
  visible,
}: {
  animationData: object | object[];
  title: string;
  description: string;
  tag: string;
  index: string;
  className?: string;
  lottieClass?: string;
  delay?: number;
  visible: boolean;
}) {
  const animations = Array.isArray(animationData) ? animationData : [animationData];

  return (
    <div
      className={cn(
        'group col-span-3',
        !visible ? 'card-hidden' : 'card-animate',
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <BlurVignette
        radius="22px"
        inset="80px"
        transitionLength="160px"
        blur="18px"
        classname={cn(
          'aspect-auto w-full bg-linear-to-br from-(--card-surface) via-(--card-surface-strong) to-(--card-surface-soft) transition-all duration-500 ease-out',
          'border border-[#ece8fb] shadow-[0_1px_3px_rgba(139,92,246,0.04),0_6px_24px_rgba(139,92,246,0.07)]',
          'hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(139,92,246,0.08),0_20px_48px_rgba(139,92,246,0.13)] hover:border-[#d9cefc]',
        )}
        style={{ height: '22rem' } as React.CSSProperties}
      >
        <div
          className={cn(
            'w-full overflow-hidden bg-(--card-surface) transition-transform duration-700 ease-out group-hover:scale-[1.03]',
            animations.length > 1 ? 'h-[64%]' : 'h-full',
          )}
        >
          <div
            className={cn(
              'h-full w-full',
              animations.length > 1
                ? 'grid grid-cols-2 gap-0'
                : 'block',
            )}
          >
            {animations.map((animation, animationIndex) => (
              <div
                key={`${title}-${animationIndex}`}
                className={cn(
                  'min-h-0',
                  animations.length > 1
                    ? 'flex h-full items-center justify-center border-r border-[#ece8fb]/70 last:border-r-0 px-1.5 sm:px-3'
                    : 'h-full w-full',
                )}
              >
                <Lottie
                  animationData={animation}
                  loop
                  autoplay
                  className={cn(
                    'opacity-90',
                    animations.length > 1 ? 'h-full w-full scale-[0.82] sm:scale-[0.94]' : 'h-full w-full',
                    lottieClass,
                  )}
                />
              </div>
            ))}
          </div>
        </div>

        <BlurVignetteArticle classname="h-[36%] w-[calc(100%-1rem)] ml-2 mt-auto mb-2">
          <div className="flex h-full flex-col justify-start gap-1.5 rounded-[14px] border border-[#b79cee]/35 bg-[#7c3aed]/24 px-4 pb-4 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#6d28d9]/70">
                {tag}
              </span>
              <span className="text-[11px] font-light tracking-widest text-[#a78bfa]/60">
                {index}
              </span>
            </div>
            <h3 className="text-[14px] font-semibold leading-snug tracking-[-0.02em] text-[#2e1065]">
              {title}
            </h3>
            <p className="line-clamp-2 text-[11.5px] leading-[1.8] text-[#4c1d95]/70">
              {description}
            </p>
          </div>
        </BlurVignetteArticle>
      </BlurVignette>
    </div>
  );
}

export default function Services() {
  const [visible, setVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 }
    );
    const obs2 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setMapVisible(true); }, { threshold: 0.05 }
    );
    if (sectionRef.current) obs1.observe(sectionRef.current);
    if (mapRef.current) obs2.observe(mapRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#fcfbff]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 8% 15%, rgba(215,200,251,0.30) 0%, transparent 58%), ' +
            'radial-gradient(ellipse 55% 45% at 92% 72%, rgba(197,202,245,0.24) 0%, transparent 52%), ' +
            'radial-gradient(ellipse 38% 38% at 52% 98%, rgba(167,139,250,0.13) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        <div
          className={cn(
            'relative mb-16 overflow-hidden rounded-[34px] border border-[#d9cdf9] bg-[#090611] shadow-[0_20px_70px_rgba(70,28,131,0.16)]',
            !visible ? 'card-hidden' : 'card-animate',
          )}
          style={{ animationDelay: '0ms' }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 45% 55% at 50% 56%, rgba(143,92,255,0.26) 0%, transparent 58%), ' +
                'radial-gradient(ellipse 34% 24% at 26% 20%, rgba(255,255,255,0.06) 0%, transparent 72%), ' +
                'linear-gradient(180deg, rgba(10,7,19,0.94) 0%, rgba(16,10,31,0.98) 100%)',
            }}
          />

          <div className="relative">
            <video
              className="relative block h-auto w-full"
              src="/video2.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />

            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(9,6,17,0.18) 0%, rgba(9,6,17,0.06) 32%, rgba(9,6,17,0.30) 100%), ' +
                  'radial-gradient(ellipse 46% 58% at 50% 52%, rgba(143,92,255,0.14) 0%, transparent 60%)',
              }}
            />

            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#090611] to-transparent" />
          </div>
        </div>

        <div
          className={cn('mb-14 flex items-stretch gap-8', !visible ? 'card-hidden' : 'card-animate')}
          style={{ animationDelay: '90ms' }}
        >
          {/* Rotated label strip — lg+ only */}
          <div
            className="hidden lg:flex shrink-0 flex-col items-center"
            style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s 0.1s' }}
          >
            <div className="w-px flex-1 bg-linear-to-b from-transparent to-gray-200" />
            <span
              className="shrink-0 py-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-gray-400"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              What We Do
            </span>
            <div className="h-6 w-px bg-gray-200" />
          </div>

          <div className="flex flex-1 flex-col">
            <div
              className="mb-7 flex items-center gap-4 fade-up-sm"
              style={{ animationDelay: '0ms', animationFillMode: 'both' }}
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400 lg:hidden">
                What We Do
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
                  <ScrambleText text="Full-spectrum solutions" delay={150} duration={900} trigger={visible} />{' '}
                  <span className="text-[#d7c8fb]/92">
                    <ScrambleText text="for the next era." delay={500} duration={800} trigger={visible} />
                  </span>
                </>
              ) : (
                <>Full-spectrum solutions <span className="text-[#d7c8fb]/92">for the next era.</span></>
              )}
            </h2>

            <p
              className="max-w-md text-[14px] leading-[1.85] text-gray-500 blur-in"
              style={{ animationDelay: '0.55s', animationFillMode: 'both', opacity: visible ? undefined : 0 }}
            >
              From intelligent software and AI automation to physical-world robotics and smart systems — we design, build, and deliver across every technical domain Artistec operates in.
            </p>

            <div
              className="mt-9 h-px bg-gray-200"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s 0.6s' }}
            />
          </div>
        </div>

        <div
          className="grid grid-cols-3 gap-4"
          style={{ gridAutoRows: '22rem' }}
        >
          {services.map((s, i) => (
            <BentoCard
              key={i}
              animationData={s.animationData}
              title={s.title}
              description={s.description}
              tag={s.tag}
              index={s.index}
              className={s.className}
              lottieClass={s.lottieClass}
              delay={i * 90}
              visible={visible}
            />
          ))}
        </div>

        <div ref={mapRef} className="mt-24">
          <div
            className={cn('mb-10 flex items-stretch gap-8', !mapVisible ? 'card-hidden' : 'card-animate')}
            style={{ animationDelay: '0ms' }}
          >
            <div
              className="hidden lg:flex shrink-0 flex-col items-center"
              style={{ opacity: mapVisible ? 1 : 0, transition: 'opacity 0.5s 0.1s' }}
            >
              <div className="w-px flex-1 bg-linear-to-b from-transparent to-gray-200" />
              <span
                className="shrink-0 py-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-gray-400"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Global Reach
              </span>
              <div className="h-6 w-px bg-gray-200" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col">
              <div
                className="mb-7 flex items-center gap-4 fade-up-sm"
                style={{ animationFillMode: 'both' }}
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400 lg:hidden">
                  Global Reach
                </span>
                <div className="h-px flex-1 bg-gray-200" />
                <span className="shrink-0 text-[11px] font-light tracking-widest text-[#c4b0f2]">02</span>
              </div>

              <h3
                className="mb-4 text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.035em] text-gray-900 sm:text-[2.2rem] blur-in"
                style={{ animationDelay: '0.1s', animationFillMode: 'both', opacity: mapVisible ? undefined : 0 }}
              >
                {mapVisible ? (
                  <>
                    <ScrambleText text="Headquartered in Kuwait." delay={100} duration={800} trigger={mapVisible} />{' '}
                    <span className="text-[#d7c8fb]/92">
                      <ScrambleText text="Operating globally." delay={500} duration={700} trigger={mapVisible} />
                    </span>
                  </>
                ) : (
                  <>Headquartered in Kuwait. <span className="text-[#d7c8fb]/92">Operating globally.</span></>
                )}
              </h3>

              <p
                className="max-w-lg text-[14px] leading-[1.85] text-gray-500 blur-in"
                style={{ animationDelay: '0.5s', animationFillMode: 'both', opacity: mapVisible ? undefined : 0 }}
              >
                Our network of trusted partners spans the Middle East, South Asia, Europe, and North America — delivering to the same standard wherever you are.
              </p>

              <div
                className="mt-8 h-px bg-gray-200"
                style={{ opacity: mapVisible ? 1 : 0, transition: 'opacity 0.5s 0.6s' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div
              className={cn(!mapVisible ? 'card-hidden' : 'card-animate')}
              style={{ animationDelay: '80ms' }}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#bca6f2]/45 bg-(--card-surface-soft) shadow-[0_4px_32px_rgba(124,58,237,0.10)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse 90% 55% at 50% 110%, rgba(124,58,237,0.12) 0%, transparent 60%)' }}
                />

                <div className="relative flex items-center gap-5 border-b border-[#c4b0f2]/30 px-5 py-4">
                  {(['4+', '20+', '50+'] as const).map((val, i) => (
                    <React.Fragment key={val}>
                      {i > 0 && <div className="h-6 w-px bg-[#c4b0f2]/40" />}
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6d28d9]/50">
                          {['Regions', 'Partners', 'Projects'][i]}
                        </p>
                        <p className="mt-0.5 text-[1.4rem] font-semibold leading-none tracking-tight text-[#2e1065]">{val}</p>
                      </div>
                    </React.Fragment>
                  ))}
                  <div className="ml-auto flex gap-1.5">
                    {(['#c084fc', '#a78bfa', '#7c3aed', '#6d28d9'] as const).map(c => (
                      <div key={c} className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>

                <div className="relative flex-1 px-3 py-1">
                  <WorldMap dots={mapDots} lineColor="#7c3aed" />
                </div>

                <div className="relative border-t border-[#c4b0f2]/25 px-5 py-2.5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#6d28d9]/40">
                    Middle East · South Asia · Europe · North America
                  </span>
                </div>
              </div>
            </div>

            <div
              className={cn(!mapVisible ? 'card-hidden' : 'card-animate')}
              style={{ animationDelay: '180ms' }}
            >
              <Terminal
                theme="light"
                username="artistec"
                commands={[
                  'artistec deploy --project skybridge --env prod',
                  'npm run build',
                  'artistec status --all',
                  'artistec logs --service api --tail 20',
                ]}
                outputs={{
                  0: [
                    '✔  Compiling 47 modules…',
                    '✔  Bundle optimised. 184 kB gzipped.',
                    '✔  Deployed to edge — Kuwait / EU-West / US-East.',
                    '✔  SSL certificate renewed. Live → skybridge.io',
                  ],
                  1: ['✓  Compiled successfully in 3.2s.'],
                  2: [
                    'skybridge.io   ● online   99.98% uptime',
                    'neura-crm.io   ● online   99.95% uptime',
                    'voxai.app      ● online   100.0% uptime',
                  ],
                  3: [
                    '[12:04:31]  GET /api/health  →  200  18ms',
                    '[12:04:33]  POST /api/query  →  200  42ms',
                    '[12:04:35]  Health check passed. All systems nominal.',
                  ],
                }}
                typingSpeed={38}
                delayBetweenCommands={900}
                className="h-full"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
