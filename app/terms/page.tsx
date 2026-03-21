'use client'

import React from 'react'
import Link from 'next/link'
import Footer from '@/components/footer/footer'
import { ArrowUpRight } from 'lucide-react'

const lastUpdated = 'March 21, 2026'

const sections = [
  {
    index: '01',
    title: 'Acceptance of Terms',
    body: [
      'By accessing or using any portion of the Artistec website or engaging our services, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use immediately.',
      'These terms apply to all visitors, clients, and any other party who accesses or uses Artistec\'s website or services in any capacity.',
    ],
  },
  {
    index: '02',
    title: 'Services',
    body: [
      'Artistec provides professional digital services including, but not limited to, website and mobile application development, AI-powered content production, intelligent automation and CRM integration, and robotics & smart systems development.',
      'The specific scope, deliverables, timeline, and pricing for any engagement are defined in a separate Statement of Work (SOW) or Service Agreement signed between Artistec and the client. In the event of any conflict between these Terms and an SOW, the SOW shall prevail.',
    ],
  },
  {
    index: '03',
    title: 'Client Obligations',
    body: [
      'Clients are responsible for providing accurate, complete, and timely information, materials, and feedback required for Artistec to deliver the agreed services.',
      'Delays caused by the client\'s failure to provide required inputs, approvals, or feedback in a timely manner may result in revised delivery timelines. Artistec will not be held liable for project delays attributable to the client.',
      'Clients must ensure they have all necessary rights and licences for any content, trademarks, images, or data they provide to Artistec for use in a project.',
    ],
  },
  {
    index: '04',
    title: 'Payment Terms',
    body: [
      'Payment terms are outlined in each individual SOW or invoice. Unless otherwise agreed in writing, invoices are payable within 14 calendar days of the invoice date.',
      'Artistec reserves the right to pause or suspend work on any project where payment is overdue by more than 14 days. Project timelines will be adjusted accordingly upon resumption.',
      'All fees are exclusive of applicable taxes unless stated otherwise. Clients are responsible for any withholding taxes, VAT, or similar charges imposed by their local jurisdiction.',
    ],
  },
  {
    index: '05',
    title: 'Intellectual Property',
    body: [
      'Upon receipt of full payment for a project, Artistec assigns to the client full ownership of the custom-developed deliverables created specifically for that project, except where third-party components (open-source libraries, licensed assets, etc.) are used.',
      'Artistec retains ownership of all pre-existing tools, frameworks, methodologies, templates, and proprietary internal systems used in delivering the project. A non-exclusive, perpetual licence to use these in the context of the delivered product is granted to the client.',
      'Artistec reserves the right to showcase completed work in its portfolio, case studies, and marketing materials unless the client has explicitly requested confidentiality in writing.',
    ],
  },
  {
    index: '06',
    title: 'Confidentiality',
    body: [
      'Both parties agree to keep confidential any proprietary, technical, or business information disclosed during the course of the engagement that is designated as confidential or that would reasonably be understood to be confidential given the nature of the information.',
      'This obligation survives the termination of the engagement and remains in effect for a period of 3 years unless otherwise agreed in a separate Non-Disclosure Agreement (NDA).',
    ],
  },
  {
    index: '07',
    title: 'Limitation of Liability',
    body: [
      'To the maximum extent permitted by applicable law, Artistec\'s total liability to a client in connection with any project or service shall not exceed the total fees paid by the client for that specific project in the 12 months preceding the claim.',
      'Artistec shall not be liable for any indirect, incidental, consequential, special, or exemplary damages — including loss of revenue, data, goodwill, or business opportunity — regardless of whether Artistec was advised of the possibility of such damages.',
    ],
  },
  {
    index: '08',
    title: 'Warranties & Disclaimer',
    body: [
      'Artistec warrants that it will perform services with reasonable skill and care consistent with industry standards.',
      'Except as expressly stated above, the website and services are provided "as is" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
    ],
  },
  {
    index: '09',
    title: 'Termination',
    body: [
      'Either party may terminate an engagement by providing 30 days\' written notice. In the event of termination, the client shall pay for all work completed and reasonable costs incurred up to the date of termination.',
      'Artistec may terminate immediately and without notice if the client materially breaches these terms, fails to make payment, or engages in fraudulent or unlawful conduct.',
    ],
  },
  {
    index: '10',
    title: 'Governing Law',
    body: [
      'These Terms & Conditions shall be governed by and construed in accordance with the laws of Kuwait. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Kuwait.',
      'For international clients, the parties agree to attempt resolution through good-faith negotiation before pursuing formal legal proceedings.',
    ],
  },
  {
    index: '11',
    title: 'Amendments',
    body: [
      'Artistec reserves the right to update these Terms & Conditions at any time. The "Last Updated" date at the top of this page will reflect changes. Continued use of the website or services after any amendment constitutes acceptance of the revised terms.',
      'For active client engagements, material changes to terms will be communicated in writing and require mutual agreement before taking effect.',
    ],
  },
  {
    index: '12',
    title: 'Contact',
    body: [
      'For any questions regarding these Terms & Conditions, please contact us at legal@artistec.io or through our Contact page.',
    ],
  },
]

export default function TermsPage() {
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
          style={{ fontSize: 'clamp(60px, 10vw, 180px)' }}
        >
          TERMS
        </span>

        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 md:px-12 lg:px-16">
          {/* breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-[11px] text-[#a78bfa]/60">
            <Link href="/" className="hover:text-[#7c3aed] transition-colors duration-150">Home</Link>
            <span>/</span>
            <span className="text-[#7c3aed]">Terms &amp; Conditions</span>
          </div>

          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#c4b0f2]/50 bg-[#ece6ff]/60 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6d28d9]">Legal</span>
          </div>

          <h1 className="mb-4 text-[2.6rem] font-bold leading-[1.05] tracking-[-0.04em] text-[#0d0b14] sm:text-[3.4rem]">
            Terms &amp; Conditions
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
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern the relationship between Artistec and its clients and website visitors. Please read them carefully before engaging our services or using this website. These Terms are effective as of the date displayed above.
            </p>
          </div>

          {/* sections */}
          <div className="divide-y divide-[#e8e0fb]/60">
            {sections.map((s) => (
              <div key={s.index} className="group py-10">
                <div className="flex items-start gap-6">
                  {/* index */}
                  <span
                    className="mt-0.5 shrink-0 font-bold leading-none tracking-[-0.05em] text-[#7c3aed]/12 transition-colors duration-300 group-hover:text-[#7c3aed]/20"
                    style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
                  >
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
              <p className="mb-1 text-[14px] font-bold text-[#1e0a3c]">Questions about these terms?</p>
              <p className="text-[13px] text-[#4c1d95]/55">Our team is happy to clarify anything before you commit.</p>
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
