import React from 'react'

const skillGroups = [
  {
    label: 'Leadership',
    text: 'Team supervision & hiring · mentoring and feedback · Agile ceremonies & milestone planning · escalations · stakeholder communication',
  },
  {
    label: 'Design',
    text: 'Design systems & component libraries · wayfinding and signage · print and environmental graphics · accessibility (WCAG) · Figma, Adobe CS',
  },
  {
    label: 'Build',
    text: 'React · Next.js · TypeScript · Node · Tailwind, Sass · Playwright, Jest · Git-based CI/CD · Docker · REST APIs · Godot',
  },
]

const Skills = () => (
  <section className="mt-14 mb-10">
    <h2 className="font-serif font-semibold text-[11px] tracking-[0.1em] uppercase text-[#006786] dark:text-[#62c5ee] mb-6">
      Skills
    </h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
      }}
    >
      {skillGroups.map(({ label, text }) => (
        <div key={label}>
          <h3 className="font-serif font-semibold text-[11px] tracking-[0.1em] uppercase text-[#006786] dark:text-[#62c5ee] mb-2">
            {label}
          </h3>
          <p className="font-serif text-[14px] leading-[22px] text-dark/80 dark:text-light/80 m-0">
            {text}
          </p>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
