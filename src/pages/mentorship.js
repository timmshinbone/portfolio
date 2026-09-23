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
          content="Personalized JavaScript, React, Next.js, and game dev mentorship with Timm Schoenborn. Book a remote session today."
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
              Level Up With Personal Mentorship
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
              Personalized Mentorship &amp; Code Tutoring
            </h2>
            <div style={{ maxWidth: '72ch' }}>
              <p className="font-serif text-[16px] leading-[28px] italic m-0 mb-4 text-dark/80 dark:text-light/80">
                Accelerate your journey in web development, app creation, or game design with a mentor who&apos;s been there.
              </p>
              <p className="font-serif text-[16px] leading-[28px] m-0 mb-5 text-dark/85 dark:text-light/85">
                Are you a self-taught developer stuck in tutorial hell? A bootcamp grad trying to land that first job? A designer or entrepreneur looking to level up your technical fluency? You don&apos;t need another YouTube playlist — you need a personalized plan, real accountability, and an expert in your corner.
              </p>
              <p className="font-serif text-[16px] leading-[28px] m-0 text-dark/85 dark:text-light/85">
                With over a decade of experience in web development, full stack architecture, and software education, I&apos;ve helped more than 150+ developers sharpen their skills and break into the tech industry. Whether you&apos;re learning JavaScript, React, Next.js, or diving into game engines like Unity, Unreal, or Godot, I&apos;ll meet you exactly where you are and get you where you want to go — faster.
              </p>
            </div>
          </section>

          {/* ── What You'll Learn ───────────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              What You&apos;ll Learn (Tailored To You)
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
                SEO &amp; Performance Optimization: build faster, rank higher, reach more users
              </li>
            </ul>
          </section>

          {/* ── Why Choose Me ───────────────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              Why Choose Me?
            </h2>
            <ul className="m-0 pl-4 grid gap-2" style={{ maxWidth: '72ch' }}>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Experienced educator — former lead instructor at General Assembly, trained 150+ developers
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Results-driven — students now working at top tech companies
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Project-based learning — we&apos;ll build real apps, not just watch videos
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Flexible format — one-off sessions or structured multi-week curriculum
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Remote first — learn from anywhere in the world, on your schedule
              </li>
            </ul>
          </section>

          {/* ── CTA ─────────────────────────────────────── */}
          <section className="pb-10">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              Ready to Start?
            </h2>
            <p
              className="font-serif text-[16px] leading-[28px] m-0 mb-5 text-dark/85 dark:text-light/85"
              style={{ maxWidth: '64ch' }}
            >
              Whether you want to polish your portfolio, prep for interviews, or finally launch that app — you can book a free 30-minute discovery call today.
            </p>
            <Link
              href="/hire-me#book-me"
              className="font-serif text-[16px] text-[#006786] dark:text-[#62c5ee] hover:underline"
            >
              Grab a time that works for you →
            </Link>
          </section>

        </Layout>
      </main>
    </>
  )
}
