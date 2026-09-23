import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

const VideoSlot = () => (
  <figure className="m-0">
    <div
      className="relative bg-[#eae9e9] dark:bg-[#2d2b2b] rounded-sm overflow-hidden"
      style={{ aspectRatio: '16 / 9' }}
    >
      {/* Replace this div with <video poster="..." controls> when the intro file is ready.
          Place the video at public/videos/intro.mp4 and poster at public/images/intro-poster.jpg */}
      <div className="absolute inset-0 grid place-content-center justify-items-center gap-4 text-center p-6">
        <svg
          width="48"
          height="48"
          viewBox="0 0 256 256"
          fill="none"
          aria-hidden="true"
          className="text-[#d6006c] dark:text-[#ff90b1]"
        >
          <circle cx="128" cy="128" r="96" fill="currentColor" fillOpacity="0.18" />
          <circle cx="128" cy="128" r="96" stroke="currentColor" strokeWidth="12" />
          <path d="M108 88l56 40-56 40z" fill="currentColor" />
        </svg>
        <span className="font-serif text-[13px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70">
          Ninety seconds, in my own voice
        </span>
      </div>
    </div>
    <figcaption className="font-serif text-[15px] leading-[28px] text-dark/70 dark:text-light/70 mt-4">
      Who I am, what I do, and what I&apos;m looking for next.
    </figcaption>
  </figure>
)

const caseStudies = [
  {
    slug: 'flatratedev',
    kicker: 'Platform · Case study',
    title: 'FlatRateDev',
    body: 'A productized web-build service: fixed-scope packages, a pricing comparison built in Chart.js, and Playwright coverage over the whole funnel.',
    meta: 'Product · Design · Build',
  },
  {
    slug: 'albers',
    kicker: 'Campaign · Case study',
    title: 'A congressional race',
    body: 'A campaign site built to an immovable deadline, tested end to end, and handed to a non-technical team who had to run it alone.',
    meta: 'Delivery · Stakeholders',
  },
  {
    slug: 'asmbs',
    kicker: 'Association · Case study',
    title: 'ASMBS',
    body: 'Member-facing interfaces and admin tooling for a national medical society, built with staff directly rather than through a spec.',
    meta: 'Requirements · Full stack',
  },
  {
    slug: 'mobile-locksmith',
    kicker: 'Local business · Case study',
    title: 'Mobile Locksmith FL',
    body: 'A search-first site for a local service business, where the only goal is turning a stressed visitor on a phone into a call.',
    meta: 'Design · SEO · Performance',
  },
  {
    slug: 'trstudios',
    kicker: 'Studio · Case study',
    title: 'TRStudios',
    body: 'Building the business behind the builds: defined offers, a repeatable delivery process and a pipeline of in-house products.',
    meta: 'Business · Process · Roadmap',
  },
  {
    slug: 'teaching',
    kicker: 'People · Case study',
    title: 'Teaching toolkit',
    body: 'Boilerplates and teaching APIs that removed setup from project weeks and helped 150+ developers ship their first real apps.',
    meta: 'Leadership · Systems',
  },
]

const WorkCard = ({ slug, kicker, title, body, meta }) => (
  <Link
    href={`/projects/${slug}`}
    className="flex flex-col gap-2.5 p-4 rounded-sm shadow-[0_1px_2px_rgb(45_43_43/.14)] hover:shadow-[0_3px_10px_rgb(45_43_43/.16)] transition-shadow bg-[#eae9e9] dark:bg-[#2d2b2b] text-dark dark:text-light"
    style={{ textDecoration: 'none' }}
  >
    <span className="font-serif text-[10px] tracking-[0.1em] uppercase text-[#006786] dark:text-[#62c5ee]">
      {kicker}
    </span>
    <h3 className="font-serif font-semibold text-[17px] leading-[1.2] m-0">
      {title}
    </h3>
    <p className="font-serif text-[13px] opacity-80 flex-1 m-0">{body}</p>
    <p className="font-serif text-[11px] text-dark/50 dark:text-light/50 m-0">{meta}</p>
  </Link>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Full Stack Developer | Hire Timm Schoenborn</title>
        <meta
          name="description"
          content="Timm Schoenborn is a full stack developer offering web, app, and SEO services. Book a consultation today."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Timm Schoenborn",
              url: "https://timmschoenborn.com",
              jobTitle: "Freelance Web Developer",
              sameAs: [
                "https://www.linkedin.com/in/timm-schoenborn/",
                "https://github.com/timmshinbone"
              ]
            })
          }}
        />
      </Head>

      <main className="text-dark dark:text-light">
        <Layout>

          {/* ── Intro ─────────────────────────────────────── */}
          <section
            className="items-start pt-14 pb-10"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '42px clamp(32px, 5vw, 84px)',
              alignItems: 'start',
            }}
          >
            <div>
              <h2 className="font-serif font-semibold leading-[1.1] tracking-[-0.02em] m-0"
                  style={{ fontSize: 'clamp(26px, 3.8vw, 42px)' }}>
                A generalist on purpose, not by accident.
              </h2>
              <p className="font-serif text-[17px] leading-[30px] mt-8 mb-0 max-w-[46ch]">
                Architecture taught me systems. Engineering taught me what things cost. Teaching and
                supervising a hundred and fifty developers taught me people. Running my own studio
                taught me delivery. I&apos;d like to bring all four to one team.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="mailto:timmschoenborn@gmail.com"
                  className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors"
                >
                  Let&apos;s talk
                </a>
                <a
                  href="/TS2025R35um3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] text-[#006786] dark:text-[#62c5ee] px-[5px] py-2.5 hover:bg-[#006786]/10 dark:hover:bg-[#62c5ee]/10 rounded-sm transition-colors"
                >
                  Read the résumé
                </a>
              </div>
            </div>

            <VideoSlot />
          </section>

          {/* ── Arc ───────────────────────────────────────── */}
          <section id="arc" className="py-10">
            <span className="block font-serif text-[13px] leading-[14px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 mb-4">
              The long way round
            </span>
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] mb-8 max-w-[30ch]"
              style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
            >
              How five disciplines ended up in one résumé
            </h2>
            <div
              style={{
                columnWidth: '30ch',
                columnGap: 'clamp(32px, 4vw, 64px)',
                maxWidth: '1000px',
              }}
            >
              <p className="font-serif text-[16px] leading-[28px] mb-7 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  The drawing board.
                </strong>{' '}
                I earned a B.S. in Architectural Design at the University of Florida and spent years
                as a professional designer — print, signage and wayfinding systems, including work at
                Perkins &amp; Will. Designing for real spaces used by real people leaves you with
                habits: build the system underneath first, sweat every detail, and never forget
                somebody has to live with what you made.
              </p>
              <p className="font-serif text-[16px] leading-[28px] mb-7 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  The keyboard.
                </strong>{' '}
                In 2019 I went through General Assembly&apos;s Software Engineering Immersive so I
                could build the things I had been drawing. That year taught me what work actually
                costs — how to estimate it, how to cut scope honestly, and why any plan that ignores
                the build is just a wish with a deadline attached.
              </p>
              <p className="font-serif text-[16px] leading-[28px] mb-7 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  The room.
                </strong>{' '}
                Then five years at General Assembly, first as Lead Engineering Instructor and then as
                Supervisor of Engineering. I set the standards our remote teams worked to, ran code
                review every week, mentored more than 150 developers into the industry, and supervised
                six to ten instructors — onboarding, scheduling, feedback, escalations, and the
                ceremonies that kept concurrent cohorts moving. Watching those developers land jobs is
                still the part I&apos;m proudest of.
              </p>
              <p className="font-serif text-[16px] leading-[28px] mb-7 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  The whole thing.
                </strong>{' '}
                Since 2024 TRStudios has meant owning every part of a project: scoping with the
                client, designing it, building it in React, Next.js and TypeScript, testing it,
                launching it, and answering for it afterwards — campaign sites, legal and home
                services, consumer wellness, and a contract as lead full-stack developer for a
                national medical association. Nothing sharpens product judgment faster than being the
                person the client calls.
              </p>
              <p className="font-serif text-[16px] leading-[28px] mb-0 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  After hours.
                </strong>{' '}
                I publish games under my own studio, weatherstew — a children&apos;s game on Google
                Play built end to end in Godot, and Cold Harsh Sea 2.0 in development for Steam. Same
                muscle as the day job, used for the fun of it.
              </p>
            </div>
          </section>

          {/* ── Selected work ─────────────────────────────── */}
          <section id="work" className="py-10">
            <span className="block font-serif text-[13px] leading-[14px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 mb-4">
              Selected work
            </span>
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] mb-8"
              style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
            >
              Things I owned end to end
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
              }}
            >
              {caseStudies.map((cs) => (
                <WorkCard key={cs.slug} {...cs} />
              ))}
            </div>
          </section>

          {/* ── Pull quote + contact ───────────────────────── */}
          <section id="next" className="py-10 pb-14">
            <figure className="m-0 mb-10">
              <blockquote
                className="font-serif italic font-normal leading-[42px] tracking-[-0.01em] max-w-[36ch] m-0"
                style={{ fontSize: 'clamp(20px, 2.6vw, 30px)' }}
              >
                &ldquo;After years of doing every job myself, what I want is to do one job well,
                with people I like.&rdquo;
              </blockquote>
            </figure>
            <h3 className="font-serif font-semibold text-[22px] leading-[28px] m-0">
              What I&apos;m looking for
            </h3>
            <p className="font-serif text-[16px] leading-[28px] text-dark/80 dark:text-light/80 mt-5 mb-0 max-w-[58ch]">
              A product, project or design leadership role on a team I can grow with for the long
              haul. Software, construction, manufacturing — I care more about the problem and the
              people than the industry. Remote, or anywhere in Chicagoland.
            </p>
            <div className="flex flex-wrap gap-4 mt-7">
              <a
                href="mailto:timmschoenborn@gmail.com"
                className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors"
              >
                timmschoenborn@gmail.com
              </a>
              <a
                href="tel:+13524276997"
                className="inline-flex items-center justify-center font-serif font-semibold text-[14px] leading-[1.2] border border-dark/20 dark:border-light/20 text-dark dark:text-light px-[18px] py-2.5 rounded-sm hover:bg-dark/5 dark:hover:bg-light/5 transition-colors"
              >
                (352) 427-6997
              </a>
            </div>
          </section>

        </Layout>
      </main>
    </>
  )
}
