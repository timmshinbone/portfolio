import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { caseStudies, getCaseStudy } from '@/data/caseStudies'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const EMAIL = 'timmschoenborn@gmail.com'

const ThickThinRule = () => (
  <div
    className="text-dark dark:text-light"
    style={{ height: 5, border: 0, margin: 0, borderTop: '2px solid currentColor', borderBottom: '1px solid currentColor' }}
  />
)

const HairlineRule = () => (
  <div
    className="text-dark dark:text-light"
    style={{ height: 0, border: 0, borderTop: '1px solid currentColor' }}
  />
)

const ImgPlaceholder = ({ ratio = '16/9', src, alt = '' }) => (
  <div
    className="halftone-wrap bg-[#eae9e9] dark:bg-[#2d2b2b] rounded-sm relative overflow-hidden grid place-items-center"
    style={{ aspectRatio: ratio }}
    aria-hidden={src ? undefined : true}
  >
    {src ? (
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
      />
    ) : (
      <span className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/30 dark:text-light/30">
        Image
      </span>
    )}
  </div>
)

// Small-caps "Fig. N" label used in figcaptions (item 9)
const FigLabel = ({ n }) => (
  <span
    className="font-serif text-[10px] tracking-[0.1em] uppercase text-dark/55 dark:text-light/55 mr-2"
    style={{ fontVariant: 'small-caps' }}
  >
    Fig. {n}
  </span>
)

// Hide unfilled "[ ... ]" placeholders on the live page
const isPlaceholder = (s) => typeof s === 'string' && s.trim().startsWith('[')

// Hero: autoplaying video if present, static image fallback, no grayscale treatment
const HeroMedia = ({ video, image, alt }) => {
  if (video) {
    return (
      <div
        className="rounded-sm overflow-hidden relative bg-[#eae9e9] dark:bg-[#2d2b2b]"
        style={{ aspectRatio: '16 / 9' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="absolute inset-0 w-full h-full object-cover object-top"
          src={video}
        />
      </div>
    )
  }
  if (image) {
    return (
      <div
        className="rounded-sm overflow-hidden relative bg-[#eae9e9] dark:bg-[#2d2b2b]"
        style={{ aspectRatio: '16 / 9' }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
          priority
        />
      </div>
    )
  }
  return <ImgPlaceholder ratio="16/9" alt={alt} />
}

// Modal that plays a walkthrough video — portrait by default, landscape when landscape=true
const MobileVideoModal = ({ videoUrl, onClose, prefersReduced, landscape = false }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        key="mobile-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.18 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          key="mobile-modal-content"
          initial={prefersReduced ? false : { scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={prefersReduced ? false : { scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="relative flex-shrink-0"
          style={landscape
            ? { aspectRatio: '16 / 9', maxHeight: '85dvh', maxWidth: 'min(100%, 840px)' }
            : { aspectRatio: '9 / 16', maxHeight: '85dvh', maxWidth: 'min(100%, 420px)' }
          }
          onClick={(e) => e.stopPropagation()}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            playsInline
            controls
            className="w-full h-full rounded-sm object-cover bg-black"
            src={videoUrl}
          />
          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute top-2.5 right-2.5 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white text-[13px] font-sans font-bold hover:bg-black/80 transition-colors"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Lightbox for enlarged figure images
const ImageModal = ({ src, alt, onClose, prefersReduced }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        key="img-lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.18 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85"
        onClick={onClose}
      >
        <motion.div
          key="img-lightbox-content"
          initial={prefersReduced ? false : { scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={prefersReduced ? false : { scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="relative"
          style={{ maxWidth: '90vw', maxHeight: '90dvh' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="block max-w-full max-h-[90dvh] object-contain rounded-sm"
          />
          <button
            onClick={onClose}
            aria-label="Close image"
            className="absolute top-2.5 right-2.5 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white text-[13px] font-sans font-bold hover:bg-black/80 transition-colors"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function CaseStudy({ study }) {
  const prefersReduced = useReducedMotion()
  const problem = study.problem.filter((p) => !isPlaceholder(p))
  const results = study.results.filter((r) => !isPlaceholder(r.stat))
  const differently = study.differently.filter((p) => !isPlaceholder(p))

  // Reading progress bar (item 7)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window
      const { scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      setProgress(max > 0 ? (scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile video modal state
  const [mobileModalOpen, setMobileModalOpen] = useState(false)

  // POE video modal state
  const [poeModalOpen, setPoeModalOpen] = useState(false)

  // Image lightbox state
  const [lightbox, setLightbox] = useState(null) // { src, alt }

  // Click-to-copy email state (item 8)
  const [copied, setCopied] = useState(false)
  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <Head>
        <title>{`${study.title} | Timm Schoenborn`}</title>
        <meta name="description" content={study.dek} />
      </Head>

      {/* Reading progress bar — 2px cyan line at top of viewport (item 7) */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 z-[60] h-[2px] bg-[#006786] dark:bg-[#62c5ee] pointer-events-none"
        style={{
          width: `${progress}%`,
          transition: prefersReduced ? 'none' : 'width 80ms linear',
        }}
      />

      <main className="text-dark dark:text-light">
        <Layout>

          {/* ── Header ──────────────────────────────────────── */}
          <header className="pt-[42px]">
            <p className="m-0 mb-7 font-serif text-[13px] tracking-[0.08em] uppercase">
              <Link href="/projects" className="text-[#006786] dark:text-[#62c5ee]">
                ← Work
              </Link>
            </p>
            <span className="block font-serif text-[13px] leading-[14px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 mb-[14px]">
              {study.kicker}
            </span>
            {/* layoutId morphs from the projects card title (item 4) */}
            <motion.h1
              layout
              layoutId={prefersReduced ? undefined : `case-study-title-${study.slug}`}
              className="font-serif font-semibold leading-[1.06] tracking-[-0.025em] m-0 max-w-[24ch]"
              style={{ fontSize: 'clamp(34px, 5.4vw, 68px)' }}
            >
              {study.title}
            </motion.h1>
            <p className="font-serif text-[18px] leading-[30px] max-w-[58ch] mt-[30px] mb-0">
              {study.dek}
            </p>
          </header>

          {/* ── Facts row ───────────────────────────────────── */}
          <section aria-label="Project facts" className="pt-[42px] pb-[28px]">
            <ThickThinRule />
            <div
              className="py-[18px]"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                gap: '20px 40px',
              }}
            >
              {[
                { label: 'My role', value: study.facts.role },
                { label: 'Timeline', value: study.facts.timeline },
                { label: 'Build', value: study.facts.build },
                { label: 'Outcome', value: study.facts.outcome },
              ].filter(({ value }) => value && !isPlaceholder(value)).map(({ label, value }) => (
                <p key={label} className="m-0">
                  <span className="block font-serif text-[11px] tracking-[0.1em] uppercase text-dark/65 dark:text-light/65 mb-1">
                    {label}
                  </span>
                  <span className="font-serif text-[15.5px] leading-[24px]">{value}</span>
                </p>
              ))}
            </div>
            <HairlineRule />
          </section>

          {/* ── 16:9 Hero ───────────────────────────────────── */}
          <figure className="m-0 mt-[28px]">
            <HeroMedia
              video={study.heroVideo}
              image={study.heroImage}
              alt={study.heroCaption}
            />
            <figcaption className="font-serif text-[15px] leading-[28px] text-dark/70 dark:text-light/70 mt-[14px]">
              <FigLabel n={1} />
              {study.heroCaption}
            </figcaption>
            {study.mobileVideo && (
              <p className="m-0 mt-3">
                <button
                  onClick={() => setMobileModalOpen(true)}
                  className="font-serif text-[14px] text-[#006786] dark:text-[#62c5ee] hover:underline underline-offset-2"
                >
                  Want to see what it looks like on mobile? Quick walkthrough →
                </button>
              </p>
            )}
            {study.poeVideo && (
              <p className="m-0 mt-3">
                <button
                  onClick={() => setPoeModalOpen(true)}
                  className="font-serif text-[14px] text-[#006786] dark:text-[#62c5ee] hover:underline underline-offset-2"
                >
                  Want a walkthrough of Port of Entry? Quick tour →
                </button>
              </p>
            )}
          </figure>

          {mobileModalOpen && (
            <MobileVideoModal
              videoUrl={study.mobileVideo}
              onClose={() => setMobileModalOpen(false)}
              prefersReduced={prefersReduced}
            />
          )}

          {poeModalOpen && (
            <MobileVideoModal
              videoUrl={study.poeVideo}
              onClose={() => setPoeModalOpen(false)}
              prefersReduced={prefersReduced}
              landscape
            />
          )}

          {lightbox && (
            <ImageModal
              src={lightbox.src}
              alt={lightbox.alt}
              onClose={() => setLightbox(null)}
              prefersReduced={prefersReduced}
            />
          )}

          {/* ── Problem ─────────────────────────────────────── */}
          <section className="pt-[56px] pb-[28px]">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '34px clamp(32px, 5vw, 84px)',
                alignItems: 'start',
              }}
            >
              <div>
                <h2
                  className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 max-w-[22ch]"
                  style={{ fontSize: 'clamp(26px, 3vw, 34px)' }}
                >
                  {study.problemHead}
                </h2>
              </div>
              <div style={{ display: 'grid', gap: '28px' }}>
                {problem.map((p, i) => (
                  <p key={i} className="font-serif text-[16px] leading-[28px] m-0">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* ── What I actually did ─────────────────────────── */}
          <section className="pt-[28px] pb-[28px]">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '34px clamp(32px, 5vw, 84px)',
                alignItems: 'start',
              }}
            >
              <div>
                <h2
                  className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 max-w-[22ch]"
                  style={{ fontSize: 'clamp(26px, 3vw, 34px)' }}
                >
                  What I actually did
                </h2>
              </div>
              <div style={{ display: 'grid', gap: '28px' }}>
                {study.whatIDid.map(({ head, body }) => (
                  <p key={head} className="font-serif text-[16px] leading-[28px] m-0">
                    <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                      {head}
                    </strong>{' '}
                    {body}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* ── Three 4:3 figures — auto Fig. N numbering (item 9) ── */}
          <section className="pt-[28px] pb-[42px]">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {study.figures.map(({ src, caption }, i) => (
                <figure key={i} className="m-0">
                  {src && (
                    <button
                      type="button"
                      onClick={() => setLightbox({ src, alt: caption })}
                      className="block w-full p-0 bg-transparent border-0 cursor-zoom-in rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006786] dark:focus-visible:outline-[#62c5ee]"
                      aria-label={`Enlarge: ${caption}`}
                    >
                      <ImgPlaceholder ratio="4/3" src={src} alt={caption} />
                    </button>
                  )}
                  {src && (
                    <figcaption className="font-serif text-[14px] leading-[24px] text-dark/70 dark:text-light/70 mt-3">
                      <FigLabel n={i + 2} />
                      {caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>

          {/* ── Results row ─────────────────────────────────── */}
          <section aria-label="Results" className="pt-[28px] pb-[42px]" hidden={results.length === 0}>
            <span className="block font-serif text-[13px] leading-[14px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 mb-5">
              Results
            </span>
            <HairlineRule />
            <div
              className="mt-5"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '24px 48px',
              }}
            >
              {results.map(({ stat, label }) => (
                <p key={label} className="m-0">
                  <span
                    className="block font-serif font-semibold leading-none text-[#006786] dark:text-[#62c5ee]"
                    style={{ fontSize: '34px' }}
                  >
                    {stat}
                  </span>
                  <span className="block font-serif text-[15px] leading-[24px] mt-2.5">
                    {label}
                  </span>
                </p>
              ))}
            </div>
            <div className="mt-5">
              <HairlineRule />
            </div>
          </section>

          {/* ── What I'd do differently ─────────────────────── */}
          <section className="pt-[28px] pb-[42px]" hidden={differently.length === 0}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '34px clamp(32px, 5vw, 84px)',
                alignItems: 'start',
              }}
            >
              <div>
                <h2
                  className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] m-0 max-w-[22ch]"
                  style={{ fontSize: 'clamp(26px, 3vw, 34px)' }}
                >
                  What I&apos;d do differently
                </h2>
              </div>
              <div style={{ display: 'grid', gap: '28px' }}>
                {differently.map((p, i) => (
                  <p key={i} className="font-serif text-[16px] leading-[28px] m-0">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* ── Next + CTA ──────────────────────────────────── */}
          <section className="pt-[28px] pb-[56px]">
            <h3 className="font-serif font-semibold text-[24px] leading-[30px] m-0 max-w-[28ch]">
              Next:{' '}
              <Link
                href={`/projects/${study.nextSlug}`}
                className="text-[#006786] dark:text-[#62c5ee]"
              >
                {study.nextLabel}
              </Link>
            </h3>
            <div className="flex gap-[15px] flex-wrap mt-6">
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] border border-dark/20 dark:border-light/20 text-dark dark:text-light px-[18px] py-2.5 rounded-sm hover:bg-dark/5 dark:hover:bg-light/5 transition-colors"
                >
                  Visit the live site
                </a>
              )}
              {(study.moreLinks || []).map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] border border-dark/20 dark:border-light/20 text-dark dark:text-light px-[18px] py-2.5 rounded-sm hover:bg-dark/5 dark:hover:bg-light/5 transition-colors"
                >
                  {label}
                </a>
              ))}
              {/* Click-to-copy email (item 8) */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors"
                aria-label={copied ? 'Email copied to clipboard' : `Copy email address ${EMAIL}`}
              >
                {copied ? (
                  <em className="not-italic font-normal text-[12px] tracking-[0.04em]">
                    Copied
                  </em>
                ) : (
                  EMAIL
                )}
              </button>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] text-[#006786] dark:text-[#62c5ee] px-[5px] py-2.5 hover:bg-[#006786]/10 dark:hover:bg-[#62c5ee]/10 rounded-sm transition-colors"
              >
                ← All work
              </Link>
            </div>
          </section>

        </Layout>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: caseStudies.map(c => ({ params: { slug: c.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const study = getCaseStudy(params.slug)
  if (!study) return { notFound: true }
  return { props: { study } }
}
