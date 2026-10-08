import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function MentorshipPage() {
  return (
    <>
      <Head>
        <title>Mentorship &amp; Code Tutoring | Timm Schoenborn</title>
        <meta
          name="description"
          content="One-on-one JavaScript, React, Next.js, and game dev mentorship with Timm Schoenborn, a former General Assembly lead instructor. Sessions are remote."
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
              Mentorship &amp; Code Tutoring
            </span>
            <h1
              className="font-serif font-semibold leading-[1.06] tracking-[-0.025em] m-0 max-w-[24ch]"
              style={{ fontSize: 'clamp(34px, 5.4vw, 68px)' }}
            >
              One-on-One Help Learning to Code
            </h1>
          </header>

          {/* ── Price + CTA ─────────────────────────────── */}
          <section className="py-7 border-t border-b border-dark/15 dark:border-light/15">
            <p className="font-serif font-semibold text-[22px] text-[#006786] dark:text-[#62c5ee] m-0 mb-5">
              $50/hr (discounts available)
            </p>
            <Link
              href="/hire-me#book-me"
              className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors"
            >
              Book a free discovery call
            </Link>
          </section>

          {/* ── Personalized Mentorship ──────────────────── */}
          <section className="pt-10 pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-5"
              style={{ fontSize: 'clamp(22px, 2.8vw, 28px)' }}
            >
              Who This Is For
            </h2>
            <div style={{ maxWidth: '72ch' }}>
              <p className="font-serif text-[16px] leading-[28px] italic m-0 mb-4 text-dark/80 dark:text-light/80">
                Help with web development, app building or game design from someone who&apos;s done the work and taught it.
              </p>
              <p className="font-serif text-[16px] leading-[28px] m-0 mb-5 text-dark/85 dark:text-light/85">
                This is for self-taught developers who&apos;ve done the tutorials and want to build something of their own, bootcamp grads looking for a first job, and designers or founders who want to get more comfortable with the technical side. We&apos;ll make a plan around your goals, and I&apos;ll keep you to it.
              </p>
              <p className="font-serif text-[16px] leading-[28px] m-0 text-dark/85 dark:text-light/85">
                I&apos;ve spent over a decade in web development, full stack architecture, and software education, and I&apos;ve helped more than 150 developers improve their skills and get into the tech industry. I can help with JavaScript, React and Next.js, and with game engines like Unity, Unreal and Godot. We start from what you already know.
              </p>
            </div>
          </section>

          {/* ── What You'll Learn ───────────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              What We Can Work On
            </h2>
            <ul className="m-0 pl-4 grid gap-2" style={{ maxWidth: '72ch' }}>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Frontend Development: HTML, CSS, JavaScript, React, Tailwind, Next.js
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Backend Foundations: Node.js, Express, REST APIs, PostgreSQL, MongoDB
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Game Dev: principles of gameplay, scene design, physics, and scripting
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Career Coaching: portfolios, GitHub reviews, job search strategy, mock interviews
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                SEO &amp; Performance Optimization: faster pages and better search rankings
              </li>
            </ul>
          </section>

          {/* ── Why Choose Me ───────────────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              My Background
            </h2>
            <ul className="m-0 pl-4 grid gap-2" style={{ maxWidth: '72ch' }}>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Former lead instructor at General Assembly, where I trained 150+ developers
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Former students of mine now work at well-known tech companies
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Project-based: we&apos;ll spend our time building real apps
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Book a one-off session or a structured multi-week curriculum
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Remote, so you can join from anywhere and pick times that suit you
              </li>
            </ul>
          </section>

          {/* ── CTA ─────────────────────────────────────── */}
          <section className="pb-10">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              Getting Started
            </h2>
            <p
              className="font-serif text-[16px] leading-[28px] m-0 mb-5 text-dark/85 dark:text-light/85"
              style={{ maxWidth: '64ch' }}
            >
              If you want to polish a portfolio, prepare for interviews or finally ship that app, start with a free 30-minute discovery call.
            </p>
            <Link
              href="/hire-me#book-me"
              className="font-serif text-[16px] text-[#006786] dark:text-[#62c5ee] hover:underline"
            >
              Pick a time on my calendar →
            </Link>
          </section>

        </Layout>
      </main>
    </>
  )
}
