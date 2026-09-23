import React from 'react'

const degrees = [
  {
    credential: 'B.S. Architectural Design',
    school: 'University of Florida',
    location: 'Gainesville, FL',
    time: '2009 – 2012',
    note: 'Foundation in design principles, project management, and building systems for physical and digital scopes.',
  },
  {
    credential: 'Software Engineering Immersive',
    school: 'General Assembly',
    location: 'Chicago, IL',
    time: '2019',
    note: 'Intensive full-stack program; practical skills in JavaScript, React, Node, Python, and Agile development.',
  },
  {
    credential: 'A.A. Architecture / Computer Science',
    school: 'Santa Fe College',
    location: 'Gainesville, FL',
    time: '2007 – 2009',
    note: 'Core computer science principles alongside design communication and creative problem-solving.',
  },
]

const DegreeEntry = ({ credential, school, location, time, note }) => (
  <article className="mb-6 last:mb-0">
    <div className="flex items-baseline justify-between gap-4 flex-wrap">
      <h3 className="font-serif font-semibold text-[15px] leading-[20px] m-0 text-dark dark:text-light">
        {credential}
      </h3>
      <span className="font-serif text-[11px] tracking-[0.04em] text-dark/60 dark:text-light/60 whitespace-nowrap flex-shrink-0">
        {time}
      </span>
    </div>
    <p className="font-serif italic text-[13px] leading-[18px] text-dark/70 dark:text-light/70 mt-0.5 mb-1 m-0">
      {school} · {location}
    </p>
    <p className="font-serif text-[14px] leading-[22px] text-dark/80 dark:text-light/80 m-0">
      {note}
    </p>
  </article>
)

const Education = () => (
  <section className="mt-14 mb-10">
    <h2 className="font-serif font-semibold text-[11px] tracking-[0.1em] uppercase text-[#006786] dark:text-[#62c5ee] mb-6">
      Education
    </h2>
    {degrees.map((d) => (
      <DegreeEntry key={d.credential} {...d} />
    ))}
  </section>
)

export default Education
