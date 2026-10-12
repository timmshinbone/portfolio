import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Image from 'next/image'
import myHobbies from '../../public/images/profile/myHobbies.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}>{value}</span>
}

const Stat = ({ value, label }) => (
  <div className="text-center sm:text-left">
    <div
      className="font-serif font-semibold leading-none text-[#006786] dark:text-[#62c5ee]"
      style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
    >
      <AnimatedNumber value={value} />+
    </div>
    <p className="font-serif text-[13px] uppercase tracking-[0.06em] text-dark/60 dark:text-light/60 mt-2 m-0">
      {label}
    </p>
  </div>
)

const About = () => {
  return (
    <>
      <Head>
        <title>About Timm Schoenborn | Project Manager, Designer, Software Developer</title>
        <meta name="description" content="Timm Schoenborn&apos;s background in project and production management, design and software development: experience, skills and education." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Timm Schoenborn",
              url: "https://timmschoenborn.com",
              jobTitle: "Project Manager, Designer and Software Developer",
              sameAs: [
                "https://www.linkedin.com/in/timm-schoenborn/",
                "https://github.com/timmshinbone"
              ]
            })
          }}
        />
      </Head>

      <main className="dark:text-light">
        <Layout className="py-10">

          {/* ── Bio ──────────────────────────────────────── */}
          <section
            className="items-start"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'start',
            }}
          >
            <div>
              <h1
                className="font-serif font-semibold leading-[1.1] tracking-[-0.02em] m-0 mb-6 text-dark dark:text-light"
                style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
              >
                About
              </h1>
              <p className="font-serif text-[16px] leading-[28px] m-0 max-w-[58ch] text-dark/90 dark:text-light/90">
                I&apos;ve worked as a designer, a production and project manager, and a software engineering leader. I ran production for a print shop of about 20 people, managed Northwestern University&apos;s signage projects at a sign shop, designed signage systems at Perkins &amp; Will, and spent five years at General Assembly teaching developers and supervising instructors. Since 2024 I&apos;ve run my own studio, where I scope, design, ship and support client products. I also run{' '}
                <strong className="font-semibold">weatherstew</strong>, an indie game studio with a
                published title. I&apos;m looking for a project, production, product or design leadership role, or a senior development role.
              </p>
              <Link
                href="/hire-me#book-me"
                className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors mt-6"
              >
                Let&apos;s talk
              </Link>
            </div>

            <figure className="m-0 w-[clamp(160px,20vw,240px)] sm:hidden">
              <Image
                src={myHobbies}
                alt="An AI-generated scene combining coding, golf, music, game design, and baking"
                className="w-full h-auto rounded-sm"
                priority
                sizes="240px"
              />
              <figcaption className="font-serif text-[12px] leading-[18px] text-dark/60 dark:text-light/60 mt-2">
                Some of what I do outside of work.
              </figcaption>
            </figure>
          </section>

          {/* ── Stats ────────────────────────────────────── */}
          <div
            className="my-12 py-8 border-t border-b border-dark/15 dark:border-light/15"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            <Stat value={150} label="Students Taught" />
            <Stat value={400} label="Projects Consulted" />
            <Stat value={14} label="Years of Experience" />
          </div>

          {/* ── Divider rule ─────────────────────────────── */}
          <div
            className="text-dark dark:text-light mb-0"
            style={{ height: 0, borderTop: '1px solid currentColor', opacity: 0.12 }}
          />

          <Skills />

          <div
            className="text-dark dark:text-light"
            style={{ height: 0, borderTop: '1px solid currentColor', opacity: 0.12 }}
          />

          <Experience />

          <div
            className="text-dark dark:text-light"
            style={{ height: 0, borderTop: '1px solid currentColor', opacity: 0.12 }}
          />

          <Education />

        </Layout>
      </main>
    </>
  )
}

export default About
