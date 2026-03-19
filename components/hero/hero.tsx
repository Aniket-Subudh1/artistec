'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrambleText, Typewriter } from '@/components/ui/scramble-text'

const heroCutoutPath =
  'M64 0H780C804 0 824 20 824 44V56C824 80 844 100 868 100H938C972 100 1000 128 1000 162V556C1000 590 972 618 938 618H474C450 618 430 598 430 574V542C430 508 402 480 368 480H64C30 480 2 452 2 418V62C2 28 30 0 64 0Z'


const heroBorderSvg = (id: string) => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-2 h-full w-full"
    preserveAspectRatio="none"
    viewBox="0 0 1000 620"
  >
    <path d={heroCutoutPath} fill="none" stroke="rgba(243,239,251,0.86)" strokeWidth="1.25" />
  </svg>
)

const floatingTags = ['Web & Mobile Apps', 'AI Content & CRM', 'Robotics & Drones']

const ribbonBase = [
  'WEB APPS', 'MOBILE', 'AI / ML', 'CRM', 'UI / UX',
  'API', 'ROBOTICS', 'CLOUD', 'DEVOPS', 'FULL-STACK',
].reduce<string[]>((acc, s) => [...acc, s, '✦'], [])
const ribbonItems = [...ribbonBase, ...ribbonBase]

const Hero = () => {
  const ribbonLeftRef = useRef<HTMLDivElement>(null)
  const ribbonRightRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)
  const mobileHeadlineRef = useRef<HTMLHeadingElement>(null)
  const mobileParagraphRef = useRef<HTMLParagraphElement>(null)
  const mobileTagsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ribbonLeftRef.current, { y: '-50%' }, { y: '0%', duration: 22, ease: 'none', repeat: -1 })
      gsap.fromTo(ribbonRightRef.current, { y: '0%' }, { y: '-50%', duration: 22, ease: 'none', repeat: -1 })

      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, filter: 'blur(14px)', y: 18 },
          { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.1, ease: 'power3.out', delay: 0.2 },
        )
      }
      if (tagsRef.current) {
        gsap.fromTo(
          tagsRef.current.children,
          { opacity: 0, y: 10, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'back.out(1.5)', stagger: 0.12, delay: 1.0 },
        )
      }
      if (mobileHeadlineRef.current) {
        gsap.fromTo(
          mobileHeadlineRef.current,
          { opacity: 0, filter: 'blur(14px)', y: 18 },
          { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.1, ease: 'power3.out', delay: 0.2 },
        )
      }
      if (mobileParagraphRef.current) {
        gsap.fromTo(
          mobileParagraphRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 1.0 },
        )
      }
      if (mobileTagsRef.current) {
        gsap.fromTo(
          mobileTagsRef.current.children,
          { opacity: 0, y: 10, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'back.out(1.5)', stagger: 0.12, delay: 1.3 },
        )
      }
    })
    return () => ctx.revert()
  }, [])

  const clippedVideo = (clipId: string) => (
    <div
      className="absolute inset-0 z-1"
      style={{
        clipPath: `path('${heroCutoutPath}')`,
      }}
    >
   
    </div>
  )

  return (
    <section className="relative isolate overflow-hidden bg-[#fcfbff] pt-20 sm:pt-24 lg:pt-28  lg:h-screen">
      <div className="mx-auto max-w-[1420px] px-3 pb-8 sm:px-5 sm:pb-10 lg:px-6 lg:pb-14">

        <div className="hidden lg:grid lg:grid-cols-[74px_minmax(0,1fr)_220px_60px] lg:items-stretch lg:gap-4 xl:grid-cols-[80px_minmax(0,1fr)_240px_66px] xl:gap-5">

          <aside className="relative py-6">
            <div className="absolute -top-10 left-1/2 flex gap-1 -translate-x-1/2 ">
              <div className="relative w-[28px] overflow-hidden border border-[#cdbcf1]/70 bg-[#c9b8f6]/88 shadow-[0_12px_28px_rgba(168,144,224,0.16)] xl:w-[30px]">
                <div ref={ribbonLeftRef} className="flex flex-col items-center gap-3.5 py-3 will-change-transform">
                  {ribbonItems.map((item, i) =>
                    item === '✦' ? (
                      <span key={i} className="shrink-0 select-none text-[20px] text-[#1a103e]/28">✦</span>
                    ) : (
                      <span
                        key={i}
                        className="shrink-0 select-none text-[15px] font-bold tracking-[0.24em] text-[#1a103e]/62 [writing-mode:vertical-lr]"
                      >
                        {'{ ' + item + ' }'}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="relative w-[28px] overflow-hidden border border-[#d8c9f5]/75 bg-[#d7c8fb]/92 shadow-[0_12px_28px_rgba(168,144,224,0.14)] xl:w-[30px]">
                <div ref={ribbonRightRef} className="flex flex-col items-center gap-3.5 py-3 will-change-transform">
                  {ribbonItems.map((item, i) =>
                    item === '✦' ? (
                      <span key={i} className="shrink-0 select-none text-[20px] text-[#1a103e]/24">✦</span>
                    ) : (
                      <span
                        key={i}
                        className="shrink-0 select-none text-[15px] font-bold tracking-[0.24em] text-[#1a103e]/56 [writing-mode:vertical-lr]"
                      >
                        {'{ ' + item + ' }'}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </aside>


          <div className="relative pb-14 pt-3  left-30 xl:pb-16">
            <div
              className="relative mx-auto max-w-[980px] overflow-visible xl:max-w-[1040px]"
              style={{ aspectRatio: '1000 / 620', width: '100%' }}
            >
              <div className="absolute inset-0 rounded-[40px] bg-transparent" />

            
              <div
                className="absolute inset-0 z-1 overflow-hidden"
                style={{
                  WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 620' preserveAspectRatio='none'%3E%3Cpath d='${encodeURIComponent(heroCutoutPath)}' fill='black'/%3E%3C/svg%3E")`,
                  maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 620' preserveAspectRatio='none'%3E%3Cpath d='${encodeURIComponent(heroCutoutPath)}' fill='black'/%3E%3C/svg%3E")`,
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }}
              >
                <div className="relative h-full w-full overflow-hidden bg-[#cfb4ff]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(198,162,255,0.48),rgba(173,122,255,0.34)),radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_82%_64%,rgba(255,255,255,0.12),transparent_18%)]" />
                </div>
              </div>

              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-2 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 1000 620"
              >
                <path d={heroCutoutPath} fill="none" stroke="rgba(243,239,251,0.86)" strokeWidth="1.25" />
              </svg>

              <div className="absolute left-6 top-8 z-3 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/84 shadow-[0_14px_30px_rgba(160,126,214,0.18)] backdrop-blur-md">
                <Image src="/logo.png" alt="Artistec logo" width={32} height={32} className="h-8 w-8 object-contain" />
              </div>

              <div className="absolute -right-3 mt-3 z-3 flex flex-col items-end gap-2">
                <span className="rounded-full border border-grey/65 bg-white/84 px-4 py-2 text-[10px] font-medium text-[#675f78] shadow-[0_10px_24px_rgba(156,126,204,0.10)] backdrop-blur-md">
                  Digital product engineering
                </span>
                <span className="rounded-full border border-grey/65 bg-white/84 px-4 py-2 text-[10px] font-medium text-[#675f78] shadow-[0_10px_24px_rgba(156,126,204,0.10)] backdrop-blur-md">
                  AI automation & smart systems
                </span>
              </div>

              <div className="absolute left-7 top-[30%] z-3 max-w-[160px] text-white xl:max-w-[180px]">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/8 backdrop-blur-md">
                  <span className="text-[22px] leading-none">✺</span>
                </div>
                <p className="text-[12px] font-medium leading-[1.7] text-white/80 blur-in" style={{ animationDelay: '0.7s', animationFillMode: 'both', opacity: 0 }}>
                  <Typewriter
                    text="Artistec creates software, content, and intelligent systems that move ideas from concept to real-world execution."
                    delay={750}
                    speed={28}
                    cursor
                  />
                </p>
                <div ref={tagsRef} className="mt-5 flex flex-wrap gap-2">
                  {floatingTags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3.5 py-1.5 text-[9px] font-medium backdrop-blur-md ${
                        index === 1
                          ? 'border-white/70 bg-white text-[#4c4360] shadow-[0_8px_20px_rgba(255,255,255,0.16)]'
                          : 'border-white/35 bg-white/10 text-white'
                      }`}
                      style={{ opacity: 0 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-8 right-8 z-3 w-[166px] rounded-[30px] border border-white bg-white/10 px-5 py-5 text-white shadow-[0_20px_36px_rgba(110,77,179,0.16)] backdrop-blur-lg">
                <div className="mb-4 flex justify-end">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white p-1.5">
                    <Image src="/logo.png" alt="Artistec badge" width={24} height={24} className="h-6 w-6 object-contain" />
                  </div>
                </div>
                <p className="text-right text-[0.92rem] font-medium text-white/82">Full-spectrum</p>
                <p className="text-right text-[2.15rem] font-semibold leading-none tracking-[-0.05em]">Builds</p>
                <p className="mt-1 text-right text-[9px] uppercase tracking-[0.22em] text-white/58">Artistec solutions</p>
                <div className="mt-5 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[3.5rem] font-light leading-none tracking-[-0.1em]">360</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/58">Delivery</p>
                  </div>
                  <div className="flex flex-col gap-2 pb-1 text-white/74">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 text-[10px]">○</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 text-[10px]">↗</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 text-[10px]">◎</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-0 -left-20 z-4 max-w-[540px] xl:max-w-[580px]">
                <h1 ref={headlineRef} className="text-[4rem] font-bold leading-[0.9] tracking-[-0.04em] text-[#17131f] xl:text-[2rem]" style={{ opacity: 0 }}>
                  <ScrambleText text="Artistec Builds" delay={250} duration={1100} />
                </h1>
                <p className="mt-3 max-w-[460px] text-[15px] leading-[1.7] text-[#7e758f] xl:max-w-[500px] blur-in" style={{ animationDelay: '1.1s', opacity: 0, animationFillMode: 'both' }}>
                  From websites and mobile apps to AI-powered content, CRM workflows, robotics, and drone solutions, we create technology that is practical, scalable, and built around your business goals.
                </p>
              </div>

              <div className="absolute bottom-[14px] left-[54%] z-4 flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-[0_14px_28px_rgba(34,22,55,0.08)]">
                <span className="h-3 w-3 rounded-full bg-[#2a2338]" />
                <span className="h-3 w-3 rounded-full bg-[#d9d1ea]" />
                <span className="h-3 w-3 rounded-full bg-[#e8e2f4]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between py-6 -mt-15">
            <div className="rounded-[30px] border border-[#efe8f8] ml-30 -mr-30 bg-white px-6 py-5 shadow-[0_20px_44px_rgba(156,126,204,0.08)]">
              <p className="text-center text-[1.05rem] font-semibold tracking-[-0.03em] text-[#181322]">Websites, Apps & UI/UX</p>
              <p className="mt-3 text-center text-[11px] leading-[1.75] text-[#7d748d]">
                Design and development for modern websites, mobile apps,
                <br />and digital platforms that need to launch cleanly and grow fast.
              </p>
              <div className="mt-5 relative h-[96px] overflow-hidden object-center justify-center items-center rounded-[18px] bg-[#181321] shadow-[0_14px_26px_rgba(24,19,33,0.16)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(128,75,217,0.34),rgba(15,10,25,0.44))]" />
              </div>
            </div>
            <div className="rounded-[30px] border border-[#efe8f8] -mt-20 ml-30 -mr-30 bg-white px-6 py-5 shadow-[0_20px_44px_rgba(156,126,204,0.08)]">
              <p className="text-center text-[1.05rem] font-semibold tracking-[-0.03em] text-[#181322]">AI Automation & Smart Systems</p>
              <p className="mt-3 text-center text-[11px] leading-[1.75] text-[#7d748d]">
                AI content, CRM integration, automation, robotics, and drone solutions tailored to how your business actually operates.
              </p>
              <div className="mt-5 relative h-[96px] overflow-hidden object-center justify-center items-center rounded-[18px] bg-[#181321] shadow-[0_14px_26px_rgba(24,19,33,0.16)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(128,75,217,0.34),rgba(15,10,25,0.44))]" />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="relative inline-flex h-16 w-16 -mt-20 left-10 items-center justify-center rounded-full border border-[#e2d8f1] bg-white text-[#271f35] shadow-[0_18px_36px_rgba(156,126,204,0.10)]">
                <Image src="/arrow.webp" alt="Open" width={22} height={22} className="h-10 w-10 object-contain" />
              </button>
            </div>
          </div>
        </div>

  
        <div className="lg:hidden">
          <div className="mx-auto max-w-[760px] px-1 sm:px-0">
            <div className="relative overflow-visible rounded-[26px]" style={{ aspectRatio: '1000 / 620' }}>

              <div
                className="absolute inset-0 z-1 overflow-hidden"
                style={{
                  WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 620' preserveAspectRatio='none'%3E%3Cpath d='${encodeURIComponent(heroCutoutPath)}' fill='black'/%3E%3C/svg%3E")`,
                  maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 620' preserveAspectRatio='none'%3E%3Cpath d='${encodeURIComponent(heroCutoutPath)}' fill='black'/%3E%3C/svg%3E")`,
                  WebkitMaskSize: '100% 100%',
                  maskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }}
              >
                <div className="relative h-full w-full overflow-hidden bg-[#cfb4ff]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(198,162,255,0.42),rgba(173,122,255,0.26)),radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_82%_64%,rgba(255,255,255,0.10),transparent_18%)]" />
                </div>
              </div>

              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-2 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 1000 620"
              >
                <path d={heroCutoutPath} fill="none" stroke="rgba(243,239,251,0.86)" strokeWidth="1.25" />
              </svg>

              <div className="absolute left-4 top-5 z-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/84 shadow-[0_12px_24px_rgba(160,126,214,0.18)] backdrop-blur-md">
                <Image src="/logo.png" alt="Artistec logo" width={26} height={26} className="h-6 w-6 object-contain" />
              </div>

              <div className="absolute right-0 top-0 z-3 flex flex-col items-end gap-1.5">
                <span className="rounded-full border border-gray/65 bg-white/84 px-3 py-1.5 text-[8px] font-medium text-[#675f78] backdrop-blur-md">
                  Digital products
                </span>
                <span className="rounded-full border border-gray/65 bg-white/84 px-3 py-1.5 text-[8px] font-medium text-[#675f78] backdrop-blur-md">
                  AI & automation
                </span>
              </div>

              <div className="absolute bottom-5 right-4 z-3 w-[128px] rounded-[24px] border border-white/30 bg-white/10 px-4 py-4 text-white shadow-[0_18px_30px_rgba(110,77,179,0.14)] backdrop-blur-lg">
                <p className="text-right text-[0.75rem] font-medium text-white/82">Full-spectrum</p>
                <p className="text-right text-[1.5rem] font-semibold leading-none tracking-[-0.05em]">Builds</p>
                <div className="mt-3 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[2.4rem] font-light leading-none tracking-[-0.08em]">360</p>
                    <p className="text-[7px] uppercase tracking-[0.18em] text-white/60">Delivery</p>
                  </div>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 text-[9px]">◎</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-2 sm:-mt-10 sm:rounded-[32px] sm:px-7 sm:py-6">
              <h1
                ref={mobileHeadlineRef}
                className="text-[2.4rem] font-bold leading-[0.92] tracking-[-0.07em] text-[#17131f] sm:text-[3rem]"
                style={{ opacity: 0 }}
              >
                <ScrambleText text="Artistec Builds Software, Automation, and Smart Systems" delay={200} duration={1200} />
              </h1>
              <div ref={mobileTagsRef} className="mt-4 flex flex-wrap gap-2">
                {floatingTags.map((tag, index) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-3.5 py-1.5 text-[10px] font-medium ${
                      index === 1
                        ? 'border-[#d7c8fb] bg-[#d7c8fb]/20 text-[#4c4360]'
                        : 'border-[#e2d8f1] bg-white text-[#7e758f]'
                    }`}
                    style={{ opacity: 0 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                ref={mobileParagraphRef}
                className="mt-4 text-[13px] leading-[1.7] text-[#7e758f] sm:max-w-[34rem] sm:text-[14px]"
                style={{ opacity: 0 }}
              >
                From websites and mobile apps to AI-powered content, CRM workflows, robotics, and drone solutions, we create technology that is practical, scalable, and built around your business goals.
              </p>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="rounded-[26px] border border-[#efe8f8] bg-white px-5 py-8 shadow-[0_18px_36px_rgba(156,126,204,0.07)]">
                <p className="text-[1rem] font-semibold tracking-[-0.03em] text-[#181322]">Websites, Apps & UI/UX</p>
                <p className="mt-2 text-[11px] leading-[1.7] text-[#7d748d]">
                  Design and development for modern websites, mobile apps, and digital platforms that need to launch cleanly and grow fast.
                </p>
                <div className="mt-4 relative h-40 overflow-hidden rounded-[16px] bg-[#181321]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(128,75,217,0.34),rgba(15,10,25,0.44))]" />
                </div>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="rounded-[26px] border border-[#efe8f8] bg-white px-5 py-8 shadow-[0_18px_36px_rgba(156,126,204,0.07)]">
                  <p className="text-[1rem] font-semibold tracking-[-0.03em] text-[#181322]">AI Automation & Smart Systems</p>
                  <p className="mt-2 text-[11px] leading-[1.7] text-[#7d748d]">
                    AI content, CRM integration, automation, robotics, and drone solutions tailored to how your business actually operates.
                  </p>
                  <div className="mt-4 relative h-40 overflow-hidden rounded-[16px] bg-[#181321]">
                    <video
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                      src="/video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(128,75,217,0.34),rgba(15,10,25,0.44))]" />
                  </div>
                </div>

                <div className="flex justify-end sm:justify-start">
                  <button className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#e2d8f1] bg-white shadow-[0_16px_32px_rgba(156,126,204,0.10)]">
                    <Image src="/arrow.webp" alt="Open" width={20} height={20} className="h-9 w-9 object-contain" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero