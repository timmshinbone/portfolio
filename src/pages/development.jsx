import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function FullStackDevPage() {
  return (
    <>
      <Head>
        <title>Full Stack Development | Timm Schoenborn</title>
        <meta
          name="description"
          content="Custom full stack development with Timm Schoenborn. From scalable APIs to responsive UI design—modern web and app solutions tailored to your business."
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
              Full Stack Development
            </span>
            <h1
              className="font-serif font-semibold leading-[1.06] tracking-[-0.025em] m-0 max-w-[24ch]"
              style={{ fontSize: 'clamp(34px, 5.4vw, 68px)' }}
            >
              Modern Apps. Built Right.
            </h1>
          </header>

          {/* ── Price + CTA ─────────────────────────────── */}
          <section className="py-7 border-t border-b border-dark/15 dark:border-light/15">
            <p className="font-serif font-semibold text-[22px] text-[#006786] dark:text-[#62c5ee] m-0 mb-5">
              Project-Based | Starting at $2,000
            </p>
            <Link
              href="/hire-me#book-me"
              className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors"
            >
              Book a free discovery call
            </Link>
          </section>

          {/* ── Complete Development Solutions ──────────── */}
          <section className="pt-10 pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-5"
              style={{ fontSize: 'clamp(22px, 2.8vw, 28px)' }}
            >
              Complete Development Solutions
            </h2>
            <p
              className="font-serif text-[16px] leading-[28px] m-0 text-dark/85 dark:text-light/85"
              style={{ maxWidth: '72ch' }}
            >
              I specialize in delivering high-performance full stack web and app experiences — from sleek landing pages to complex SaaS platforms. Whether you need help planning architecture, setting up cloud deployments, or refining frontend UI/UX, I bring a decade of hands-on engineering and product experience.
            </p>
          </section>

          {/* ── What I Build ────────────────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              What I Build
            </h2>
            <ul className="m-0 pl-4 grid gap-2" style={{ maxWidth: '72ch' }}>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                React/Next.js frontends with Tailwind and accessibility in mind
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Scalable APIs using Node.js, Express, PostgreSQL, or Supabase
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Full stack apps with secure authentication, file storage, Stripe payments, and more
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Optimized deployment pipelines: Vercel, Netlify, or custom servers
              </li>
            </ul>
          </section>

          {/* ── Why Work With Me ────────────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              Why Work With Me?
            </h2>
            <ul className="m-0 pl-4 grid gap-2" style={{ maxWidth: '72ch' }}>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Developer &amp; designer in one — clean UI meets clean code
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Architect first — I help clients avoid technical debt before it happens
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Real world experience — I&apos;ve launched apps, dashboards, and tools for real businesses
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Remote ready — async, Slack-friendly, and timezone-savvy
              </li>
            </ul>
          </section>

          {/* ── CTA ─────────────────────────────────────── */}
          <section className="pb-10">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              Ready to Build Something?
            </h2>
            <p
              className="font-serif text-[16px] leading-[28px] m-0 mb-5 text-dark/85 dark:text-light/85"
              style={{ maxWidth: '64ch' }}
            >
              Let&apos;s talk through your next big thing. You can book a free 30-minute discovery call to walk through your idea, budget, and timeline.
            </p>
            <Link
              href="/hire-me#book-me"
              className="font-serif text-[16px] text-[#006786] dark:text-[#62c5ee] hover:underline"
            >
              Book your call now →
            </Link>
          </section>

        </Layout>
      </main>
    </>
  )
}
