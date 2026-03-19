'use client';
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ScrambleText } from '@/components/ui/scramble-text';

type Project = {
  id: string;
  name: string;
  tagline: string;
  category: string[];
  year: string;
  status: 'Live' | 'In Development' | 'Shipped';
  gradient: string;
  accentColor: string;
  textColor: string;
  chipStyle: string;
  statusStyle: string;
  span: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: 'P01',
    name: 'PGMaster',
    tagline: 'Smart PG & hostel management platform',
    category: ['SaaS', 'React', 'PostgreSQL'],
    year: '2025',
    status: 'Live',
    gradient: 'linear-gradient(140deg, #1a0a3c 0%, #2d1560 42%, #3d1f7a 100%)',
    accentColor: '#9b7fff',
    textColor: '#e8deff',
    chipStyle: 'bg-white/10 text-[#c4b0ff] border border-[#6d4ef7]/40',
    statusStyle: 'bg-[#9b7fff]/15 text-[#c4b0ff] border border-[#9b7fff]/35',
    span: 'col-span-12 md:col-span-7',
    image: '/projects/PGMaster.png',
  },
  {
    id: 'P02',
    name: 'Saveful',
    tagline: 'Personal finance & smart savings tracker',
    category: ['Web App', 'Next.js', 'Supabase'],
    year: '2026',
    status: 'Live',
    gradient: 'linear-gradient(140deg, #1e0438 0%, #330a5c 42%, #4a1275 100%)',
    accentColor: '#c084fc',
    textColor: '#f0d9ff',
    chipStyle: 'bg-white/10 text-[#d8a8ff] border border-[#9333ea]/40',
    statusStyle: 'bg-[#c084fc]/15 text-[#d8a8ff] border border-[#c084fc]/35',
    span: 'col-span-12 md:col-span-5',
    image: '/projects/Saveful.png',
  },
  {
    id: 'P03',
    name: 'JogaadIndia',
    tagline: "India's innovation & jugaad marketplace",
    category: ['Platform', 'Next.js', 'MongoDB'],
    year: '2025',
    status: 'Live',
    gradient: 'linear-gradient(140deg, #080e30 0%, #111d52 42%, #1a2870 100%)',
    accentColor: '#818cf8',
    textColor: '#dde2ff',
    chipStyle: 'bg-white/10 text-[#a5adff] border border-[#4f5edb]/40',
    statusStyle: 'bg-[#818cf8]/15 text-[#a5adff] border border-[#818cf8]/35',
    span: 'col-span-12 md:col-span-4',
    image: '/projects/JogaadIndia.png',
  },
  {
    id: 'P04',
    name: 'GT Tech',
    tagline: 'Industry 4.0 solutions for digital transformation',
    category: ['Web App', 'Next.js', 'AWS'],
    year: '2025',
    status: 'Live',
    gradient: 'linear-gradient(140deg, #1a0330 0%, #2e0852 42%, #420d6e 100%)',
    accentColor: '#b46ef5',
    textColor: '#edd9ff',
    chipStyle: 'bg-white/10 text-[#cc9ef8] border border-[#8b2fc9]/40',
    statusStyle: 'bg-[#b46ef5]/15 text-[#cc9ef8] border border-[#b46ef5]/35',
    span: 'col-span-12 md:col-span-4',
    image: '/projects/gttech.png',
  },
  {
    id: 'P05',
    name: 'QwikTest',
    tagline: 'Online examination and assessment platform',
    category: ['SaaS', 'React', 'MongoDB'],
    year: '2026',
    status: 'Live',
    gradient: 'linear-gradient(140deg, #0f0728 0%, #1f1250 42%, #2e1c6e 100%)',
    accentColor: '#a78bfa',
    textColor: '#e6dcff',
    chipStyle: 'bg-white/10 text-[#c0adff] border border-[#7c5cf0]/40',
    statusStyle: 'bg-[#a78bfa]/15 text-[#c0adff] border border-[#a78bfa]/35',
    span: 'col-span-12 md:col-span-4',
    image: '/projects/qwiktest.png',
  },
];

function ProjectCard({
  project,
  delay,
  visible,
}: {
  project: Project;
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isFeatured = project.id === 'P01';

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl cursor-pointer select-none',
        'transition-all duration-500 ease-out',
        !visible ? 'card-hidden' : 'card-animate',
        project.span,
      )}
      style={{
        animationDelay: `${delay}ms`,
        background: project.gradient,
        border: `1px solid ${hovered ? project.accentColor + '55' : 'rgba(180,160,255,0.22)'}`,
        boxShadow: hovered
          ? `0 20px 80px ${project.accentColor}22, 0 4px 20px ${project.accentColor}18`
          : '0 2px 16px rgba(120,100,200,0.07)',
        transform: hovered ? 'translateY(-4px) scale(1.005)' : 'translateY(0) scale(1)',
        transition: 'border-color 0.4s, box-shadow 0.4s, transform 0.4s',
        minHeight: isFeatured ? '420px' : '340px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shimmer sweep on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: `linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)`,
          transform: hovered ? 'translateX(120%)' : 'translateX(-120%)',
          transition: 'transform 0.7s ease',
        }}
      />

      {/* Top shimmer bar */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-30 h-px origin-left"
        style={{
          background: `linear-gradient(to right, ${project.accentColor}, transparent)`,
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.6s ease',
          opacity: 0.8,
        }}
      />

      {/* Ambient glow blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -right-12 z-0 rounded-full"
        style={{
          width: '240px',
          height: '240px',
          background: `radial-gradient(circle, ${project.accentColor}22 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />

      {isFeatured ? (
        /* Featured card: left content + right image panel */
        <div className="relative z-10 flex h-full flex-col lg:flex-row">
          {/* Mobile/tablet image panel */}
          <div
            className="relative flex items-center justify-center overflow-hidden lg:hidden"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}18 0%, ${project.accentColor}0a 100%)`,
              height: '130px',
              borderBottom: `1px dashed ${project.accentColor}33`,
            }}
          >
            {project.image ? (
              <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-2 select-none" aria-hidden>
                <div className="rounded-lg border-2 border-dashed p-3.5" style={{ borderColor: project.accentColor + '38' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={project.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <span className="text-[8.5px] font-semibold tracking-[0.16em] uppercase" style={{ color: project.accentColor + '55' }}>Preview</span>
              </div>
            )}
          </div>

          {/* Left: content */}
          <div className="relative flex flex-1 flex-col justify-between p-6 lg:max-w-[55%] lg:p-8 xl:p-10">
            {/* Watermark */}
            <div className="pointer-events-none absolute right-4 bottom-10 font-black leading-none select-none" aria-hidden
              style={{ fontSize: 'clamp(55px, 7vw, 88px)', color: project.accentColor, opacity: hovered ? 0.10 : 0.05, transition: 'opacity 0.5s ease', letterSpacing: '-0.05em' }}
            >{project.id}</div>
            {/* Top row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.category.map((c) => (
                  <span key={c} className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-[0.11em] uppercase', project.chipStyle)}>{c}</span>
                ))}
              </div>
              <span className={cn('inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase', project.statusStyle)}>
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full" style={{ background: project.accentColor, boxShadow: `0 0 5px ${project.accentColor}` }} />
                {project.status}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: project.accentColor + '99' }}>{project.id}</span>
              <h3 className="font-bold leading-none tracking-[-0.04em]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: project.textColor }}>
                {project.name}
              </h3>
              <p className="max-w-xs text-[13px] leading-[1.85]" style={{ color: project.textColor + 'aa' }}>
                {project.tagline}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-[11px] font-semibold tracking-[0.12em]" style={{ color: project.accentColor + 'aa' }}>{project.year}</span>
                <div className="flex items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
                  <span className="text-[11px] font-bold tracking-wide" style={{ color: project.accentColor }}>View project</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: project.accentColor }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right: image panel */}
          <div
            className="relative hidden lg:flex flex-1 items-center justify-center m-4 ml-0 rounded-xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}18 0%, ${project.accentColor}0a 100%)`,
              border: `1px dashed ${project.accentColor}40`,
              minHeight: '260px',
            }}
          >
            {project.image ? (
              <img src={project.image} alt={project.name} className="h-full w-full object-cover rounded-xl" />
            ) : (
              <div className="flex flex-col items-center gap-3 select-none" aria-hidden>
                <div className="rounded-xl border-2 border-dashed p-5" style={{ borderColor: project.accentColor + '40' }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={project.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: project.accentColor + '66' }}>Project Preview</span>
              </div>
            )}
            {/* Corner label */}
            <div className="absolute bottom-3 right-3 rounded-lg px-2 py-1" style={{ background: project.accentColor + '18' }}>
              <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: project.accentColor + '88' }}>Screenshot</span>
            </div>
          </div>
        </div>
      ) : (
        /* Regular cards: top image strip + bottom content */
        <div className="relative z-10 flex h-full flex-col">
          {/* Image strip */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              height: '130px',
              background: `linear-gradient(135deg, ${project.accentColor}18 0%, ${project.accentColor}0a 100%)`,
              borderBottom: `1px dashed ${project.accentColor}33`,
            }}
          >
            {project.image ? (
              <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-2 select-none" aria-hidden>
                <div className="rounded-lg border-2 border-dashed p-3.5" style={{ borderColor: project.accentColor + '38' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={project.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <span className="text-[8.5px] font-semibold tracking-[0.16em] uppercase" style={{ color: project.accentColor + '55' }}>Preview</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between p-6">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex flex-wrap gap-1.5">
                {project.category.map((c) => (
                  <span key={c} className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-[0.11em] uppercase', project.chipStyle)}>{c}</span>
                ))}
              </div>
              <span className={cn('inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase', project.statusStyle)}>
                {project.status === 'Live' && (
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full" style={{ background: project.accentColor, boxShadow: `0 0 5px ${project.accentColor}` }} />
                )}
                {project.status}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {/* Project ID watermark */}
              <div className="pointer-events-none absolute right-4 bottom-12 font-black leading-none select-none" aria-hidden
                style={{ fontSize: 'clamp(55px, 7vw, 88px)', color: project.accentColor, opacity: hovered ? 0.10 : 0.05, transition: 'opacity 0.5s ease', letterSpacing: '-0.05em' }}
              >{project.id}</div>

              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: project.accentColor + '99' }}>{project.id}</span>
              <h3 className="font-bold leading-none tracking-[-0.04em]" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: project.textColor }}>
                {project.name}
              </h3>
              <p className="text-[12px] leading-[1.75] line-clamp-2" style={{ color: project.textColor + '88' }}>{project.tagline}</p>
            </div>

            <div className="flex items-center justify-between gap-4 mt-3">
              <span className="text-[11px] font-semibold tracking-[0.12em]" style={{ color: project.accentColor + 'aa' }}>{project.year}</span>
              <div className="flex items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
                <span className="text-[11px] font-bold tracking-wide" style={{ color: project.accentColor }}>View project</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: project.accentColor }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
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
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#fcfbff]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 92% 10%, rgba(167,139,250,0.12) 0%, transparent 55%), ' +
            'radial-gradient(ellipse 50% 35% at 5% 80%, rgba(99,102,241,0.09) 0%, transparent 50%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="h-px bg-linear-to-r from-transparent via-[#d4c8f8] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        <div
          className={cn(
            'mb-20 flex items-stretch gap-8',
            !visible ? 'card-hidden' : 'card-animate',
          )}
          style={{ animationDelay: '0ms' }}
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
              Our Work
            </span>
            <div className="h-6 w-px bg-gray-200" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col">
            <div
              className="mb-7 flex items-center gap-4 fade-up-sm"
              style={{ animationDelay: '0ms', animationFillMode: 'both' }}
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400 lg:hidden">
                Our Work
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
                  <ScrambleText text="Products we have" delay={150} duration={900} trigger={visible} />{' '}
                  <span className="text-[#d7c8fb]/92">
                    <ScrambleText text="proudly shipped." delay={500} duration={800} trigger={visible} />
                  </span>
                </>
              ) : (
                <>Products we have <span className="text-[#d7c8fb]/92">proudly shipped.</span></>
              )}
            </h2>

            <p
              className="max-w-md text-[14px] leading-[1.85] text-gray-500 blur-in"
              style={{ animationDelay: '0.55s', animationFillMode: 'both', opacity: visible ? undefined : 0 }}
            >
              From AI platforms to aerospace systems - every project we take on becomes a benchmark.
              A curated selection of products shipped under the Artistec umbrella.
            </p>

            <div
              className="mt-9 h-px bg-gray-200"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s 0.6s' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} visible={visible} />
          ))}
        </div>

        <div
          className={cn(
            'mt-14 flex justify-center',
            !visible ? 'card-hidden' : 'card-animate',
          )}
          style={{ animationDelay: `${projects.length * 80 + 100}ms` }}
        >
          <button
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#d4c0fa] bg-white px-7 py-3 text-[13px] font-semibold tracking-wide text-[#7c3aed] shadow-[0_2px_16px_rgba(124,58,237,0.10)] transition-all duration-300 hover:bg-[#f5eeff] hover:border-[#b89aee] hover:shadow-[0_4px_28px_rgba(124,58,237,0.18)] hover:-translate-y-0.5"
          >
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-12" />
            View all projects
          </button>
        </div>

      </div>
    </section>
  );
}