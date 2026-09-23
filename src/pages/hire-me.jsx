import Head from 'next/head'
import { useEffect } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const services = [
  {
    title: 'Game & App Consulting',
    description: 'Plan features, review your tech stack, and avoid pitfalls in early-stage game or app development.',
    price: 'Starts around $150/session (negotiable based on project needs)',
    serviceLink: 'consulting',
  },
  {
    title: 'Full Stack Development',
    description: 'From websites to mobile apps, I offer complete frontend and backend development using modern frameworks.',
    price: 'Typical range: $2,000–$15,000/project (rates flexible)',
    serviceLink: 'development',
  },
  {
    title: 'SEO Optimization',
    description: "Improve your site's speed, metadata, accessibility, and visibility on search engines.",
    price: 'Starts at $300/site (negotiable based on complexity)',
    serviceLink: 'seo-services',
  },
  {
    title: 'Tutoring & Mentorship',
    description: 'Learn JavaScript, React, WordPress, or game dev principles with personalized support.',
    price: '$50/hr (bundles and student pricing available)',
    serviceLink: 'mentorship',
  },
]

export default function HireMe() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.getElementById(hash.substring(1))
      if (el) {
        setTimeout(() => {
          const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Hire a Freelance Web Developer &amp; SEO Consultant | Timm Schoenborn</title>
        <meta name="description" content="Remote full stack development, SEO consulting, and app strategy from Timm Schoenborn — a seasoned engineer and mentor helping businesses build better tech." />
      </Head>

      <main className="text-dark dark:text-light">
        <Layout className="py-10">

          {/* ── Page header ──────────────────────────────── */}
          <section className="pb-10">
            <h1
              className="font-serif font-semibold leading-[1.06] tracking-[-0.025em] m-0 mb-6 max-w-[24ch]"
              style={{ fontSize: 'clamp(34px, 5.4vw, 68px)' }}
            >
              Build Something Great With Me
            </h1>
            <p className="font-serif text-[18px] leading-[30px] max-w-[52ch] m-0 text-dark/80 dark:text-light/80">
              Remote full stack development, SEO consulting, and app strategy from a seasoned engineer and mentor.
            </p>
          </section>

          <div
            className="text-dark dark:text-light"
            style={{ height: 0, borderTop: '1px solid currentColor', opacity: 0.15 }}
          />

          {/* ── Services grid ────────────────────────────── */}
          <section className="py-10">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '40px 48px',
              }}
            >
              {services.map(({ title, description, price, serviceLink }) => (
                <article key={serviceLink} className="flex flex-col gap-3">
                  <h2 className="font-serif font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] m-0">
                    {title}
                  </h2>
                  <p className="font-serif text-[15px] leading-[24px] text-dark/80 dark:text-light/80 m-0 flex-1">
                    {description}
                  </p>
                  <p className="font-serif font-semibold text-[14px] text-[#006786] dark:text-[#62c5ee] m-0">
                    {price}
                  </p>
                  <Link
                    href={`/${serviceLink}`}
                    className="font-serif text-[14px] text-[#006786] dark:text-[#62c5ee] hover:underline self-start"
                  >
                    Learn more →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <div
            className="text-dark dark:text-light"
            style={{ height: 0, borderTop: '1px solid currentColor', opacity: 0.15 }}
          />

          {/* ── Book a Call ──────────────────────────────── */}
          <section id="book-me" className="pt-10 pb-6 scroll-mt-16">
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 mb-5"
              style={{ fontSize: 'clamp(26px, 3vw, 34px)' }}
            >
              Book a Call
            </h2>
            <p className="font-serif text-[16px] leading-[28px] max-w-[52ch] m-0 mb-2 text-dark/80 dark:text-light/80">
              Use the tool below to schedule a free discovery call or consultation session.
            </p>
            <p className="font-serif text-[16px] leading-[28px] max-w-[52ch] m-0 mb-6 text-dark/80 dark:text-light/80">
              Please add which of my services you are interested in when you add details to the booking.
            </p>
            <div
              className="bg-[#eae9e9] dark:bg-[#2d2b2b] rounded-sm overflow-hidden"
              style={{ height: 700 }}
            >
              <iframe
                src="https://calendly.com/timmschoenborn/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule Appointment"
                className="bg-light dark:bg-dark rounded-lg"
              ></iframe>
            </div>
          </section>

        </Layout>
      </main>
    </>
  )
}
