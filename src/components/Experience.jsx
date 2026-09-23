import React from 'react'

const jobs = [
  {
    role: 'Founder & Lead Developer',
    company: 'TRStudios LLC',
    location: 'Highland Park, IL',
    time: '2024 – Present',
    bullets: [
      'Own design, implementation, QA and launch for production React, Next.js and TypeScript products across political campaigns, legal, home services and consumer wellness.',
      'Ship through Git-based CI/CD with preview deployments; write Playwright suites and run accessibility and SEO testing before every launch.',
    ],
  },
  {
    role: 'Lead Full Stack Developer (Contract)',
    company: 'ASMBS — American Society for Metabolic and Bariatric Surgery',
    location: '',
    time: '2025',
    bullets: [
      'Built member-facing interfaces and admin tooling for a national medical association, working with staff directly to turn requirements into shipped features.',
    ],
  },
  {
    role: 'Supervisor of Engineering & Lead Instructor',
    company: 'General Assembly',
    location: 'Chicago, IL / Remote',
    time: '2019 – 2024',
    bullets: [
      'Supervised a team of 6–10 instructors and teaching assistants across concurrent remote cohorts: onboarding, scheduling, performance feedback and escalations.',
      'Taught daily cohorts of 15–25 and mentored 150+ developers into the industry; ran Agile ceremonies and milestone planning, and shipped internal tooling.',
    ],
  },
  {
    role: 'Print, Signage & Branded Environments',
    company: 'Chicago, IL · Digital printing, sign fabrication & environmental design',
    location: '',
    time: '2012 – 2019',
    bullets: [
      'Branded Environments Designer, Perkins & Will (2016–19) — designed, planned and implemented complex signage systems for projects worldwide alongside architects and engineers.',
      'Project Manager, FastSigns (2014–16) — led cross-functional teams on scope, schedule and resources to deliver on time and on budget.',
      'Production Manager, Quartet Digital Printing (2012–15) — managed staff, inventory and equipment; raised output and cut costs for Fortune 500 and university clients.',
    ],
  },
  {
    role: 'Manager, Coffee Stand & Book Buying',
    company: 'Independent bookstore · Gainesville, FL',
    location: '',
    time: 'Early career',
    bullets: [
      'Ran the café and the used-book buy/sell desk through peak semester rushes — staffing, inventory, pricing and cash handling — first experience owning a small operation end to end.',
    ],
  },
]

const JobEntry = ({ role, company, location, time, bullets }) => (
  <article className="mb-8 last:mb-0">
    <div className="flex items-baseline justify-between gap-4 flex-wrap">
      <h3 className="font-serif font-semibold text-[15px] leading-[20px] m-0 text-dark dark:text-light">
        {role}
      </h3>
      <span className="font-serif text-[11px] tracking-[0.04em] text-dark/60 dark:text-light/60 whitespace-nowrap flex-shrink-0">
        {time}
      </span>
    </div>
    <p className="font-serif italic text-[13px] leading-[18px] text-dark/70 dark:text-light/70 mt-0.5 mb-2 m-0">
      {company}{location ? ` · ${location}` : ''}
    </p>
    <ul className="m-0 pl-4 grid gap-1">
      {bullets.map((b, i) => (
        <li key={i} className="font-serif text-[14px] leading-[22px] text-dark/85 dark:text-light/85">
          {b}
        </li>
      ))}
    </ul>
  </article>
)

const Experience = () => (
  <section className="mt-14 mb-10">
    <h2 className="font-serif font-semibold text-[11px] tracking-[0.1em] uppercase text-[#006786] dark:text-[#62c5ee] mb-6">
      Experience
    </h2>
    {jobs.map((job) => (
      <JobEntry key={job.role} {...job} />
    ))}
  </section>
)

export default Experience
