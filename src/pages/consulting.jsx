import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function GameAppConsultingPage() {
  return (
    <>
      <Head>
        <title>Game &amp; App Consulting | Timm Schoenborn</title>
        <meta
          name="description"
          content="Get expert game and app consulting for early-stage projects. From wireframes to launch, Timm Schoenborn offers technical strategy and creative direction."
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
              Game &amp; App Consulting
            </span>
            <h1
              className="font-serif font-semibold leading-[1.06] tracking-[-0.025em] m-0 max-w-[24ch]"
              style={{ fontSize: 'clamp(34px, 5.4vw, 68px)' }}
            >
              Game &amp; App Consulting
            </h1>
          </header>

          {/* ── Price + CTA ─────────────────────────────── */}
          <section className="py-7 border-t border-b border-dark/15 dark:border-light/15">
            <p className="font-serif font-semibold text-[22px] text-[#006786] dark:text-[#62c5ee] m-0 mb-5">
              Starting at $150/session (flexible pricing)
            </p>
            <Link
              href="/hire-me#book-me"
              className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors"
            >
              Book a consultation
            </Link>
          </section>

          {/* ── Strategic Planning ──────────────────────── */}
          <section className="pt-10 pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-5"
              style={{ fontSize: 'clamp(22px, 2.8vw, 28px)' }}
            >
              Strategic Planning for Games &amp; Apps
            </h2>
            <div style={{ maxWidth: '72ch' }}>
              <p className="font-serif text-[16px] leading-[28px] m-0 mb-5 text-dark/85 dark:text-light/85">
                Whether you&apos;re building a mobile app, browser game, or launching a startup MVP, strategic planning can save thousands in dev costs and wasted time. As a full stack developer and creative consultant, I help small teams and solo creators move from idea to reality — efficiently.
              </p>
              <p className="font-serif text-[16px] leading-[28px] m-0 text-dark/85 dark:text-light/85">
                I&apos;ve helped indie devs, entrepreneurs, and agencies prototype games, map product logic, and build technical systems that scale. If you&apos;re stuck trying to decide what tools to use, how to scope your build, or how to go from notes to roadmap — I can help.
              </p>
            </div>
          </section>

          {/* ── What We'll Cover ────────────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              What We&apos;ll Cover Together
            </h2>
            <ul className="m-0 pl-4 grid gap-2" style={{ maxWidth: '72ch' }}>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Wireframing user flow &amp; core functionality
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Choosing the right tools (React Native, Unity, Godot, etc.)
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Scoping MVPs and iterative development
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Translating creative ideas into technical workflows
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                UX best practices for web, mobile, and interactive platforms
              </li>
            </ul>
          </section>

          {/* ── Why Clients Work With Me ─────────────────── */}
          <section className="pb-7">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              Why Clients Work With Me
            </h2>
            <ul className="m-0 pl-4 grid gap-2" style={{ maxWidth: '72ch' }}>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                10+ years building apps, games, and educational tools
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Clear planning, fast execution, zero jargon
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Collaborative whiteboard and prototyping sessions
              </li>
              <li className="font-serif text-[16px] leading-[28px] text-dark/85 dark:text-light/85">
                Remote-friendly and async capable
              </li>
            </ul>
          </section>

          {/* ── CTA ─────────────────────────────────────── */}
          <section className="pb-10">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-4"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)' }}
            >
              Book a Call
            </h2>
            <p
              className="font-serif text-[16px] leading-[28px] m-0 mb-5 text-dark/85 dark:text-light/85"
              style={{ maxWidth: '64ch' }}
            >
              Ready to sketch ideas, define tech scope, or pitch with confidence? Book a consultation below or schedule a 30-minute intro call.
            </p>
            <Link
              href="/hire-me#book-me"
              className="font-serif text-[16px] text-[#006786] dark:text-[#62c5ee] hover:underline"
            >
              Schedule a 30-min intro call →
            </Link>
          </section>

        </Layout>
      </main>
    </>
  )
}
