import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { caseStudies } from '@/data/caseStudies'
import { motion, useReducedMotion } from 'framer-motion'

const repos = [
  {
    title: 'Cold Harsh Sea',
    type: 'Game — proof of concept',
    liveUrl: 'https://timmshinbone.github.io/cold_harsh_sea/',
    ghUrl: 'https://github.com/timmshinbone/cold_harsh_sea',
  },
  {
    title: 'Monster Pets',
    type: 'Teaching — MERN stack lesson app',
    liveUrl: 'https://monster-pets.netlify.app/',
    ghUrl: 'https://github.com/sei-ec-remote/monster-pets-client',
  },
  {
    title: 'AvoGatoCollector',
    type: 'Teaching — Django collection tracker',
    liveUrl: 'https://avogatocollector.onrender.com/cats/2',
    ghUrl: 'https://github.com/timmshinbone/avocado_catcollector/tree/main',
  },
  {
    title: 'Library API',
    type: 'Teaching API — seed scripts, curl scripts, endpoint tables',
    ghUrl: 'https://github.com/sei-ec-remote/library-api',
  },
  {
    title: 'React Auth Boilerplate',
    type: 'Boilerplate — React with authentication',
    ghUrl: 'https://github.com/timmshinbone/react-auth-boilerplate',
  },
  {
    title: 'Express + Mongoose + LiquidJS Boilerplate',
    type: 'Boilerplate — full stack with Shopify templating',
    ghUrl: 'https://github.com/timmshinbone/mongoose-liquid-express-boilerplate',
  },
  {
    title: 'Express + Mongoose Auth API',
    type: 'Boilerplate — Node/Express REST API with auth',
    ghUrl: 'https://github.com/timmshinbone/express-mongoose-auth-api-boilerplate',
  },
  {
    title: 'Django REST Framework API',
    type: 'Boilerplate — Python/Django REST with auth',
    ghUrl: 'https://github.com/timmshinbone/django-auth-api-boilerplate',
  },
]

const CaseStudyCard = ({ slug, kicker, title, dek }) => {
  const prefersReduced = useReducedMotion()
  return (
    <Link
      href={`/projects/${slug}`}
      className="flex flex-col gap-2.5 p-4 rounded-sm shadow-[0_1px_2px_rgb(45_43_43/.14)] hover:shadow-[0_3px_10px_rgb(45_43_43/.16)] transition-shadow bg-[#eae9e9] dark:bg-[#2d2b2b] text-dark dark:text-light"
      style={{ textDecoration: 'none' }}
    >
      <span className="font-serif text-[10px] tracking-[0.1em] uppercase text-[#006786] dark:text-[#62c5ee]">
        {kicker}
      </span>
      <motion.h2
        layout
        layoutId={prefersReduced ? undefined : `case-study-title-${slug}`}
        className="font-serif font-semibold text-[17px] leading-[1.2] m-0"
      >
        {title}
      </motion.h2>
      <p className="font-serif text-[13px] opacity-80 flex-1 m-0 line-clamp-3">{dek}</p>
    </Link>
  )
}

const RepoRow = ({ title, type, liveUrl, ghUrl }) => (
  <li className="flex items-baseline justify-between gap-4 flex-wrap py-3 border-b border-dark/10 dark:border-light/10 last:border-0">
    <div className="min-w-0">
      <span className="font-serif font-semibold text-[15px] leading-[20px] text-dark dark:text-light">
        {title}
      </span>
      <span className="font-serif text-[13px] text-dark/60 dark:text-light/60 ml-3">
        {type}
      </span>
    </div>
    <div className="flex gap-4 flex-shrink-0">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-[13px] text-[#006786] dark:text-[#62c5ee] hover:underline"
        >
          Live
        </a>
      )}
      <a
        href={ghUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-serif text-[13px] text-[#006786] dark:text-[#62c5ee] hover:underline"
      >
        GitHub
      </a>
    </div>
  </li>
)

const projects = () => {
  return (
    <>
      <Head>
        <title>Timm Schoenborn | Projects Page</title>
        <meta name="description" content="Full stack projects and case studies by Timm Schoenborn — web apps, marketing sites, developer tooling, and teaching resources." />
      </Head>
      <main className="text-dark dark:text-light">
        <Layout className="pt-10 pb-16">

          {/* ── Case studies ────────────────────────────────── */}
          <section>
            <span className="block font-serif text-[13px] leading-[14px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 mb-4">
              Selected work
            </span>
            <h1
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] mb-8"
              style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
            >
              Things I owned end to end
            </h1>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {caseStudies.map(cs => (
                <CaseStudyCard
                  key={cs.slug}
                  slug={cs.slug}
                  kicker={cs.kicker}
                  title={cs.title}
                  dek={cs.dek}
                />
              ))}
            </div>
          </section>

          {/* ── Repos & boilerplates ────────────────────────── */}
          <section className="mt-16">
            <div
              className="text-dark dark:text-light mb-8"
              style={{ height: 0, borderTop: '1px solid currentColor', opacity: 0.15 }}
            />
            <span className="block font-serif text-[13px] leading-[14px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 mb-4">
              Teaching &amp; boilerplates
            </span>
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] mb-6"
              style={{ fontSize: 'clamp(18px, 2.4vw, 24px)' }}
            >
              Open repos and lesson projects
            </h2>
            <ul className="m-0 p-0 list-none">
              {repos.map(r => (
                <RepoRow key={r.title} {...r} />
              ))}
            </ul>
          </section>

        </Layout>
      </main>
    </>
  )
}

export default projects
