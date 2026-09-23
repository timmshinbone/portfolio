import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function SEOConsultingPage() {
  return (
    <>
      <Head>
        <title>SEO Consulting &amp; Optimization | Timm Schoenborn</title>
        <meta
          name="description"
          content="Professional SEO services by Timm Schoenborn. Improve search visibility, performance, and structure for better Google rankings."
        />
      </Head>

      <main className="text-dark dark:text-light">
        <Layout className="py-10">

          {/* ── Header ──────────────────────────────────── */}
          <header className="pb-8">
            <p className="font-serif text-[13px] tracking-[0.08em] uppercase m-0 mb-7">
              <Link href="/hire-me" className="text-[#006786] dark:text-[#62c5ee]">
                ← Hire Me
              </Link>
            </p>
            <span className="block font-serif text-[13px] leading-[14px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 mb-[14px]">
              SEO Consulting &amp; Optimization
            </span>
            <h1
              className="font-serif font-semibold leading-[1.06] tracking-[-0.025em] m-0 max-w-[24ch]"
              style={{ fontSize: 'clamp(34px, 5.4vw, 68px)' }}
            >
              Drive More Traffic With Smarter SEO
            </h1>
          </header>

          {/* ── Price + CTA ─────────────────────────────── */}
          <section className="py-7 border-t border-b border-dark/15 dark:border-light/15">
            <p className="font-serif font-semibold text-[22px] text-[#006786] dark:text-[#62c5ee] m-0 mb-5">
              $300/site (flexible based on needs)
            </p>
            <Link
              href="/hire-me#book-me"
              className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors"
            >
              Schedule a strategy call
            </Link>
          </section>

          {/* ── Technical SEO Tailored to You ───────────── */}
          <section className="pt-10 pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-5"
              style={{ fontSize: 'clamp(22px, 2.8vw, 28px)' }}
            >
              Technical SEO Tailored to You
            </h2>
            <div style={{ maxWidth: '72ch' }}>
              <p className="font-serif text-[16px] leading-[28px] italic m-0 mb-4 text-dark/80 dark:text-light/80">
                Boost your visibility. Fix slow pages. Outrank your competitors.
              </p>
              <p className="font-serif text-[16px] leading-[28px] m-0 mb-5 text-dark/85 dark:text-light/85">
                I help startups, agencies, and growing businesses improve their site&apos;s technical and on-page SEO — from audit to implementation. With real-world experience in performance tuning, accessibility, semantic markup, and mobile-first optimizations, I&apos;ll help your site stand out in a crowded search landscape.
              </p>
              <p className="font-serif text-[16px] leading-[28px] m-0 text-dark/85 dark:text-light/85">
                Whether you&apos;re launching a new product, rebuilding your site, or stuck on Core Web Vitals, I&apos;ll identify what&apos;s holding you back and show you how to fix it.
              </p>
            </div>
          </section>

          {/* ── What's Included ─────────────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              What&apos;s Included
            </h2>
            <ul className="m-0 pl-4 grid gap-2" style={{ maxWidth: '72ch' }}>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Full SEO audit (site speed, meta tags, heading structure, schema)
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Keyword research and competitor analysis
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Google PageSpeed &amp; Core Web Vitals tuning
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                On-page and semantic markup improvements
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Accessibility and mobile-first best practices
              </li>
            </ul>
          </section>

          {/* ── Why It Works ────────────────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              Why It Works
            </h2>
            <ul className="m-0 pl-4 grid gap-2" style={{ maxWidth: '72ch' }}>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Clear reporting, prioritized tasks, no fluff
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                No lock-in — actionable insights you can implement yourself or with me
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Includes performance, structure, UX and technical SEO fixes
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Remote-friendly, async-friendly, documentation provided
              </li>
            </ul>
          </section>

          {/* ── CTA ─────────────────────────────────────── */}
          <section className="pb-10">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              Let&apos;s Optimize
            </h2>
            <p
              className="font-serif text-[16px] leading-[28px] m-0 mb-5 text-dark/85 dark:text-light/85"
              style={{ maxWidth: '64ch' }}
            >
              Get the clarity and roadmap you need to make real SEO gains. Book a free discovery call to talk goals, traffic, and tactics.
            </p>
            <Link
              href="/hire-me#book-me"
              className="font-serif text-[16px] text-[#006786] dark:text-[#62c5ee] hover:underline"
            >
              Schedule your strategy call now →
            </Link>
          </section>

        </Layout>
      </main>
    </>
  )
}
