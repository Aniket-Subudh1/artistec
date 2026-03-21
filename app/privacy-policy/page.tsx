'use client'

import React from 'react'
import Link from 'next/link'
import Footer from '@/components/footer/footer'
import { ArrowUpRight } from 'lucide-react'

const lastUpdated = 'March 21, 2026'

const sections = [
  {
    index: '01',
    title: 'Information We Collect',
    body: [
      'We collect information you voluntarily provide when you contact us, request a quote, or use our services. This includes your name, email address, company name, phone number, and any project details you share.',
      'We may also automatically collect certain technical data when you visit our website — such as your IP address, browser type, pages visited, and time spent on pages — via cookies and similar technologies. This data is used strictly to improve site performance and user experience.',
    ],
  },
  {
    index: '02',
    title: 'How We Use Your Information',
    body: [
      'To respond to enquiries, deliver the services you request, and manage our client relationships.',
      'To send project updates, invoices, and relevant service communications. We do not send unsolicited marketing emails without your explicit consent.',
      'To analyse website usage in aggregate, improve our content, and understand which services are most relevant to our visitors.',
      'To comply with legal obligations and protect the legitimate interests of Artistec and its clients.',
    ],
  },
  {
    index: '03',
    title: 'Sharing of Information',
    body: [
      'We do not sell, rent, or trade your personal information to third parties.',
      'We may share limited data with trusted service providers (e.g. hosting, analytics, payment processors) who are contractually obligated to handle it securely and only as instructed.',
      'We may disclose information when required by law, a court order, or to protect the rights and safety of Artistec, our clients, or the public.',
    ],
  },
  {
    index: '04',
    title: 'Data Retention',
    body: [
      'We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law.',
      'Client project data is retained for the duration of the engagement and up to 3 years thereafter for legal and accounting purposes. You may request deletion of your data at any time by contacting us.',
    ],
  },
  {
    index: '05',
    title: 'Cookies',
    body: [
      'Our website uses essential cookies to ensure basic functionality. We may also use analytics cookies (e.g. anonymised Google Analytics) to understand how visitors interact with our site.',
      'You can control or disable cookies through your browser settings. Disabling cookies may affect certain features of the website.',
    ],
  },
  {
    index: '06',
    title: 'Security',
    body: [
      'We implement industry-standard technical and organisational measures to protect your data against unauthorised access, loss, or disclosure. All data in transit is encrypted using TLS.',
      'However, no method of transmission over the internet is 100% secure. We encourage you to contact us immediately if you suspect any unauthorised use of your information.',
    ],
  },
  {
    index: '07',
    title: 'Your Rights',
    body: [
      'Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. You may also have the right to data portability and to object to certain types of processing.',
      'To exercise any of these rights, please contact us at legal@artistec.io. We will respond within 30 days.',
    ],
  },
  {
    index: '08',
    title: 'Third-Party Links',
    body: [
      'Our website may contain links to third-party services or platforms. We are not responsible for the privacy practices or content of those sites. We recommend reviewing their privacy policies independently.',
    ],
  },
  {
    index: '09',
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page reflects the most recent revision. Continued use of our website after changes constitutes your acceptance of the updated policy.',
    ],
  },
  {
    index: '10',
    title: 'Contact',
    body: [
      'If you have any questions about this Privacy Policy or how we handle your data, please contact us at legal@artistec.io or through our Contact page.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#fcfbff] pt-36 pb-20">
        {/* dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.10) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 5% 8%, rgba(215,200,251,0.38) 0%, transparent 58%), ' +
              'radial-gradient(ellipse 45% 40% at 88% 85%, rgba(197,202,245,0.24) 0%, transparent 52%)',
          }}
        />

        {/* watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 select-none font-bold leading-none tracking-[-0.06em] text-[#7c3aed]/4"
          style={{ fontSize: 'clamp(80px, 14vw, 220px)' }}
        >
          PRIVACY
        </span>

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 md:px-12 lg:px-16">
          {/* breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-[11px] text-[#a78bfa]/60">
            <Link href="/" className="hover:text-[#7c3aed] transition-colors duration-150">Home</Link>
            <span>/</span>
            <span className="text-[#7c3aed]">Privacy Policy</span>
          </div>

          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#c4b0f2]/50 bg-[#ece6ff]/60 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6d28d9]">Legal</span>
          </div>

          <h1 className="mb-4 text-[2.6rem] font-bold leading-[1.05] tracking-[-0.04em] text-[#0d0b14] sm:text-[3.4rem]">
            Privacy Policy
          </h1>
          <p className="text-[13px] text-[#4c1d95]/50">Last updated: {lastUpdated}</p>

          <div className="mt-8 h-px bg-linear-to-r from-[#c4b0f2]/50 via-[#a78bfa]/30 to-transparent" />
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────── */}
      <section className="relative w-full bg-[#fcfbff] pb-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 md:px-12 lg:px-16">

          {/* intro */}
          <div className="mb-14 rounded-2xl border border-[#e0d4fb]/60 bg-[#f7f3ff] p-8">
            <p className="text-[15px] leading-[1.9] text-[#1e0a3c]/70">
              Artistec (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This policy explains what personal information we collect, how we use it, and what rights you have in relation to it. By using our website or services, you agree to the practices described herein.
            </p>
          </div>

          {/* sections */}
          <div className="divide-y divide-[#e8e0fb]/60">
            {sections.map((s) => (
              <div key={s.index} className="group py-10">
                <div className="flex items-start gap-6">
                  {/* index */}
                  <span className="mt-0.5 shrink-0 font-bold leading-none tracking-[-0.05em] text-[#7c3aed]/12 transition-colors duration-300 group-hover:text-[#7c3aed]/20"
                    style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
                    {s.index}
                  </span>

                  <div className="flex-1">
                    <h2 className="mb-4 text-[1.15rem] font-bold tracking-[-0.025em] text-[#0d0b14]">
                      {s.title}
                    </h2>
                    <div className="space-y-3">
                      {s.body.map((para, i) => (
                        <p key={i} className="text-[14px] leading-[1.9] text-[#1e0a3c]/62">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA band */}
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#c4b0f2]/40 bg-[#7c3aed]/6 p-8 sm:flex-row sm:items-center">
            <div>
              <p className="mb-1 text-[14px] font-bold text-[#1e0a3c]">Have a question about your data?</p>
              <p className="text-[13px] text-[#4c1d95]/55">We&apos;re happy to help — reach out any time.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#7c3aed] px-6 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#6d28d9] hover:shadow-[0_8px_28px_rgba(124,58,237,0.30)]"
            >
              Contact us <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
