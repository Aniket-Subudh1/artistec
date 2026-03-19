'use client';
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { WorldMap } from '@/components/ui/world-map';
import Lottie from 'lottie-react';
import webAnim from '@/public/animation/web.json';
import aiAnim from '@/public/animation/ai.json';
import crmAnim from '@/public/animation/crm.json';
import droneAnim from '@/public/animation/drone.json';
import { ArrowRight } from 'lucide-react';
import { ScrambleText } from '@/components/ui/scramble-text';

const services = [
  {
    animationData: webAnim,
    title: 'Website & Mobile App Development',
    description: 'Professional website and mobile application development for Android & iOS, covering UI/UX design, deployment, and modernisation of digital platforms.',
    className: 'col-span-3 lg:col-span-2',
    lottieClass: 'scale-110',
  },
  {
    animationData: aiAnim,
    title: 'AI-Powered Content',
    description: 'Generate AI-powered, UX-focused, and SEO-friendly content tailored for your digital product — effortless, effective, and conversion-ready.',
    className: 'col-span-3 lg:col-span-1',
    lottieClass: '',
  },
  {
    animationData: crmAnim,
    title: 'AI, Automation & CRM',
    description: 'AI-powered chatbots, intelligent automation, cybersecurity, and CRM integration for existing websites, apps, and business operations.',
    className: 'col-span-3 lg:col-span-1',
    lottieClass: '',
  },
  {
    animationData: droneAnim,
    title: 'Robotics, Drones & Smart Systems',
    description: 'Development and deployment of robotics, humanoid, and drone technologies — ready-made or fully customised systems based on client requirements.',
    className: 'col-span-3 lg:col-span-2',
    lottieClass: 'scale-110',
  },
];

const mapDots = [
  { start: { lat: 29.3759, lng: 47.9774 }, end: { lat: 42.5869, lng: -82.9194 } },
  { start: { lat: 29.3759, lng: 47.9774 }, end: { lat: 20.2961, lng: 85.8245 } },
  { start: { lat: 29.3759, lng: 47.9774 }, end: { lat: 48.8566, lng: 2.3522 } },
  { start: { lat: 20.2961, lng: 85.8245 }, end: { lat: 48.8566, lng: 2.3522 } },
];

function BentoCard({
  animationData,
  title,
  description,
  className,
  lottieClass,
  delay = 0,
  visible,
}: {
  animationData: object;
  title: string;
  description: string;
  className?: string;
  lottieClass?: string;
  delay?: number;
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        'group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-2xl',
        'border border-[#ede9f8] bg-white',
        '[box-shadow:0_0_0_1px_rgba(167,139,250,0.05),0_2px_6px_rgba(107,111,212,0.04),0_12px_28px_rgba(107,111,212,0.06)]',
        'transition-all duration-500 ease-out',
        'hover:scale-[1.012] hover:border-[#d7c8fb] hover:[box-shadow:0_0_0_1px_rgba(215,200,251,0.4),0_12px_40px_rgba(167,139,250,0.22)]',
        !visible ? 'card-hidden' : 'card-animate',
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Shimmer line at top — slides on hover */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-30 h-0.5 origin-left scale-x-0 rounded-full bg-linear-to-r from-[#d7c8fb] via-[#a78bfa] to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100"
      />

      {/* Lottie animation — absolutely fills top portion */}
      <div className="absolute inset-x-0 top-0 h-[58%] overflow-hidden">
        <div
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            maskImage: 'linear-gradient(to bottom, #000 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 40%, transparent 100%)',
          }}
        >
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className={cn('h-full w-full', lottieClass)}
          />
        </div>
      </div>

      {/* Gradient bridge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 z-10"
        style={{
          top: '38%',
          bottom: 0,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.94) 18%, #ffffff 40%)',
        }}
      />

      {/* Card content */}
      <div className="relative z-20 p-5 sm:p-6">
        {/* Accent line */}
        <div className="mb-3 h-px w-10 rounded-full bg-[#d7c8fb] transition-all duration-500 group-hover:w-16 group-hover:bg-[#a78bfa]" />

        <div className="flex flex-col gap-1.5 transition-all duration-300 ease-out group-hover:-translate-y-7">
          <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.025em] text-gray-900">
            {title}
          </h3>
          <p className="text-[12.5px] leading-[1.85] text-gray-500">
            {description}
          </p>
        </div>

        {/* CTA — revealed on hover */}
        <div
          className={cn(
            'pointer-events-none absolute bottom-5 left-5 flex translate-y-3 items-center gap-1.5 opacity-0',
            'transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto',
          )}
        >
          <span className="text-[12px] font-semibold tracking-wide text-[#7c3aed]">Learn more</span>
          <ArrowRight className="h-3.5 w-3.5 text-[#7c3aed] transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Hover glow overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(215,200,251,0.16) 0%, transparent 70%)',
        }}
      />
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
          className={cn('mb-14 flex flex-col items-center text-center gap-4', !visible ? 'card-hidden' : 'card-animate')}
          style={{ animationDelay: '0ms' }}
        >
          <div className="flex items-center gap-3 fade-up-sm" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
            <span className="h-px w-8 bg-gray-300" />
            <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-gray-400">What We Do</span>
            <span className="h-px w-8 bg-gray-300" />
          </div>
          <h2
            className="max-w-3xl text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-gray-900 sm:text-[2.6rem] md:text-[3.2rem] blur-in"
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
            className="max-w-xl text-[14px] leading-[1.85] text-gray-500 blur-in"
            style={{ animationDelay: '0.55s', animationFillMode: 'both', opacity: visible ? undefined : 0 }}
          >
            From intelligent software and AI automation to physical-world robotics and smart systems — we design, build, and deliver across every technical domain Artistech operates in.
          </p>
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
              className={s.className}
              lottieClass={s.lottieClass}
              delay={i * 90}
              visible={visible}
            />
          ))}
        </div>

        <div ref={mapRef} className="mt-24">
          <div
            className={cn('mb-10 flex flex-col items-center text-center gap-3', !mapVisible ? 'card-hidden' : 'card-animate')}
            style={{ animationDelay: '0ms' }}
          >
            <div className="flex items-center gap-3 fade-up-sm" style={{ animationFillMode: 'both' }}>
              <span className="h-px w-8 bg-gray-300" />
              <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-gray-400">Global Reach</span>
              <span className="h-px w-8 bg-gray-300" />
            </div>
            <h3
              className="text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.035em] text-gray-900 sm:text-[2.2rem] blur-in"
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
          </div>

          <div
            className={cn(!mapVisible ? 'card-hidden' : 'card-animate')}
            style={{ animationDelay: '80ms' }}
          >
            <div className="rounded-2xl border border-[#e8eaf6] bg-[#fafafa] p-4 sm:p-5 shadow-[0_2px_20px_0_rgba(107,111,212,0.06)]">
              <WorldMap dots={mapDots} lineColor="#6b6fd4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
