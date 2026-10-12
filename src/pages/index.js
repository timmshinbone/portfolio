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
    slug: 'mobile-locksmith',
    kicker: 'Local business · Case study',
    title: 'Mobile Locksmith FL',
    body: 'A fast, search-first site for a local locksmith, built to turn phone searches into calls. Calls from organic search rose ~40% in the first year.',
    meta: 'Design · SEO/AEO · Performance',
  },
  {
    slug: 'asmbs',
    kicker: 'Association · Case study',
    title: 'ASMBS',
    body: 'Updated a national medical society\'s WordPress site and Symfony-based member system while dues and event payments stayed live, and merged duplicate member records without losing any.',
    meta: 'WordPress · Symfony · PHP',
  },
  {
    slug: 'aptp',
    kicker: 'Nonprofit · Case study',
    title: 'Albany Park Theater Project',
    body: 'I manage and maintain both WordPress sites for a Chicago youth theater company, including the theme customization, the UI work and the back end.',
    meta: 'WordPress · PHP · Back end',
  },
  {
    slug: 'print-production',
    kicker: 'Production · Case study',
    title: 'Print production',
    body: 'I ran production and managed projects for a print shop of about 20 people: high-volume work for colleges and Chicago area businesses, plus large format, bindery, and everything in between.',
    meta: 'Operations · People · Scheduling',
  },
  {
    slug: 'northwestern-signage',
    kicker: 'Signage · Case study',
    title: 'Northwestern University signage',
    body: 'I managed signage projects for Northwestern University and other large college buildings at a small sign shop, delivered on time and on budget. I sometimes installed them myself to keep the client happy.',
    meta: 'Project management · Clients',
  },
  {
    slug: 'hhh',
    kicker: 'Content platform · Case study',
    title: 'Healthy Homemade Habits',
    body: 'A recipe and wellness site I designed and built with my wife. She publishes and updates it herself, and it gets a little over 2,000 visits a month.',
    meta: 'Design · Build · CMS',
  },
  {
    slug: 'flatratedev',
    kicker: 'Platform · Case study',
    title: 'FlatRateDev',
    body: 'A site for a client\'s fixed-price web build service, built to be fast and SEO/AEO friendly, with Chart.js pricing charts, an instant PDF download of his info sheet, and download tracking built in.',
    meta: 'Product · Design · Build',
  },
  {
    slug: 'albers',
    kicker: 'Campaign · Case study',
    title: 'Albers for Congress',
    body: 'A congressional campaign site with donations and petition sign-ups, live in less than a week. I worked flexibly with the candidate to launch with the information he wanted, and the site helped him gather the signatures he needed to get on the ballot.',
    meta: 'Delivery · Stakeholders',
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
    body: 'Starter projects and teaching APIs I built at General Assembly, so students could spend project weeks on features instead of setup. 150+ developers used them to ship their first real apps.',
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
        <title>Timm Schoenborn · Project Manager, Designer, Software Developer</title>
        <meta
          name="description"
          content="Timm Schoenborn is a project manager, designer and software developer. Production and project management in print and signage, engineering leadership at General Assembly, and his own studio since 2024. Open to roles in the Fox Cities and central Wisconsin, Chicagoland or remote."
        />
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
                Project manager, designer and software developer
              </h2>
              <p className="font-serif text-[17px] leading-[30px] mt-8 mb-0 max-w-[46ch]">
                Architecture taught me to think in systems, and engineering taught me what things
                cost. Teaching and supervising a hundred and fifty developers taught me about people,
                and running my own studio taught me how to deliver. I&apos;d like to bring all four
                to one team.
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
              Background
            </span>
            <h2
              className="font-serif font-semibold leading-[1.2] tracking-[-0.015em] mb-8 max-w-[30ch]"
              style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}
            >
              Where I&apos;ve worked and what I did there
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
                  Design.
                </strong>{' '}
                I earned a B.S. in Architectural Design at the University of Florida and spent years as a professional designer doing print, signage and wayfinding systems. At Perkins &amp; Will I was a Branded Environments Designer: I designed signage systems for projects worldwide alongside architects and engineers, and managed projects from the design side. I also developed the systems we used to track large volumes of signage elements and where each one was installed, which kept those projects accurate and efficient.
              </p>
              <p className="font-serif text-[16px] leading-[28px] mb-7 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  Production.
                </strong>{' '}
                Before Perkins &amp; Will I worked on the production side. At a print shop I was production manager and project manager for a crew of about 20 across three locations, running high-volume work for colleges and Chicago area businesses, including large-format printing, bindery and finishing. At a small sign shop I managed signage projects for big college buildings, including Northwestern University&apos;s, and delivered them on time and on budget. I managed people, schedules and clients in both jobs, and I run software projects the same way.
              </p>
              <p className="font-serif text-[16px] leading-[28px] mb-7 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  Software.
                </strong>{' '}
                I taught myself JavaScript first. In 2019 I completed General Assembly&apos;s Software Engineering Immersive to get formal training and a credential, and to make my React, Node and Python skills job ready. It also gave me a realistic sense of how long software takes to build, which is what makes an estimate or a scope cut honest.
              </p>
              <p className="font-serif text-[16px] leading-[28px] mb-7 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  Teaching and leadership.
                </strong>{' '}
                Then five years at General Assembly, first as Lead Engineering Instructor and then as
                Supervisor of Engineering. I set the standards our remote teams worked to, ran code
                review every week, mentored more than 150 developers into the industry, and supervised
                six to ten instructors, which meant onboarding, scheduling, feedback, escalations, and the
                ceremonies that kept concurrent cohorts moving. Watching those developers land jobs is
                still the part I&apos;m proudest of.
              </p>
              <p className="font-serif text-[16px] leading-[28px] mb-7 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  TRStudios.
                </strong>{' '}
                Since 2024 TRStudios has meant owning every part of a project: scoping with the
                client, designing it, building it in React, Next.js and TypeScript, testing it,
                launching it, and answering for it afterwards. The work so far includes campaign sites, legal and home
                services, consumer wellness, and a contract as lead full-stack developer for a
                national medical association. Nothing sharpens product judgment faster than being the
                person the client calls.
              </p>
              <p className="font-serif text-[16px] leading-[28px] mb-0 text-pretty">
                <strong className="font-serif font-semibold text-[13px] tracking-[0.06em] uppercase text-[#006786] dark:text-[#62c5ee]">
                  Games.
                </strong>{' '}
                I also publish games under my own studio, weatherstew: a children&apos;s game on Google Play that I built myself in Godot, with Cold Harsh Sea 2.0 in development for Steam, and a new web game that I&apos;m working on which will turn into another mobile app.
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
              Things I owned from start to finish
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
                &ldquo;I&apos;m looking for a team where I can own projects from planning to delivery and build a long career doing work I love while supporting my family.&rdquo;
              </blockquote>
            </figure>
            <h3 className="font-serif font-semibold text-[22px] leading-[28px] m-0">
              What I&apos;m looking for
            </h3>
            <p className="font-serif text-[16px] leading-[28px] text-dark/80 dark:text-light/80 mt-5 mb-0 max-w-[58ch]">
              A project, production, product or design leadership role, or a software development role, on a team I can grow with. I&apos;ve done this work in software, print and signage, and architecture, and I&apos;m open to software, manufacturing, construction and print. In person or hybrid in the Fox Cities and central Wisconsin, Chicagoland, or remote.
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
