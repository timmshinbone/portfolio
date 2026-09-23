export const caseStudies = [
  {
    slug: 'flatratedev',
    kicker: 'Case study · Product, design and delivery',
    title: 'FlatRateDev: a website you can price before you call anyone',
    dek: 'A productized web-build service, taken from a vague idea to a live offer: the packaging and pricing model, the site that sells it, the tooling that proves it works, and the delivery process behind it. I was the product manager, the designer and the engineer.',
    facts: {
      role: 'Product owner, designer, lead developer',
      timeline: '2024 – present, TRStudios LLC',
      build: 'Next.js · TypeScript · Chart.js · Playwright · Vercel',
      outcome: '[ add a real number here ]',
    },
    heroCaption: 'The pricing page does the selling: three fixed packages, and a comparison that shows what the same build costs elsewhere.',
    problemHead: 'The problem was pricing, not code',
    problem: [
      'Small businesses asking for a website can\'t tell the difference between a $1,500 build and a $15,000 one, so they do the only rational thing: they stall. Every discovery call I ran spent its first twenty minutes on the same three questions, and the proposals that followed were bespoke, slow to write, and easy to compare unfavourably against a template service.',
      'The insight wasn\'t technical. If the price and the scope are published, the sales conversation starts at "which one" instead of "how much" — and the build itself can be standardised behind it.',
    ],
    whatIDid: [
      {
        head: 'Defined the product.',
        body: 'Three packages with hard scope boundaries, priced from my own delivery data rather than a guess — what each tier costs me in hours, where the margin is, and which requests have to fall outside it to keep the promise honest.',
      },
      {
        head: 'Designed the argument.',
        body: 'The site is a sales document, so it\'s structured like one: the price first, the comparison second, the proof third. I built the cost comparison as a live Chart.js graphic so the claim is legible in two seconds instead of three paragraphs.',
      },
      {
        head: 'Built it to be trusted.',
        body: 'Next.js and TypeScript, with rendering chosen per page type so the marketing pages are static and fast. Playwright end-to-end suites cover the funnel — every path a prospect can take to the contact form is tested, because a broken form on a sales site is the whole product failing.',
      },
      {
        head: 'Made delivery repeatable.',
        body: 'A fixed price only works if the process is fixed too: a standard kickoff, a component library reused across builds, preview deployments for client review, and an accessibility and SEO pass before every launch.',
      },
    ],
    figures: [
      { caption: 'The Chart.js comparison — the claim, made checkable.' },
      { caption: 'Scope boundaries published up front, in plain language.' },
      { caption: 'The funnel under test, on every deploy.' },
    ],
    results: [
      { stat: '[ 00 ]', label: 'Builds delivered on the fixed-price model' },
      { stat: '[ 00% ]', label: 'Less time from first call to signed scope' },
      { stat: '[ 00 ]', label: 'Launches with zero post-launch scope disputes' },
    ],
    differently: [
      'I priced the tiers from my own delivery data, which was the right instinct and too small a sample. With a second round I\'d instrument the funnel properly from day one and let the drop-off between "saw the price" and "started a conversation" tell me where the tiers are wrong, rather than inferring it from the calls I happened to have.',
      'I\'d also write the scope boundaries with a client in the room. Every boundary I had to defend later was one I\'d worded for myself instead of for the person reading it.',
    ],
    nextSlug: 'albers',
    nextLabel: 'Albers for Congress',
    liveUrl: 'https://www.flatratedev.com/',
  },
  {
    slug: 'albers',
    kicker: 'Case study · Delivery under a fixed deadline',
    title: 'Albers for Congress: a campaign site that couldn\'t miss election day',
    dek: 'A congressional campaign needed a site that could take donations, carry the platform, and change daily — run by volunteers with no developer on staff. I scoped it, designed it, built it and handed it over.',
    facts: {
      role: 'Project lead, designer, full stack developer',
      timeline: '[ 20XX ] · [ N ] weeks to launch',
      build: '[ Stack — e.g. .NET / React ] · donation integration · responsive',
      outcome: '[ add a real number here ]',
    },
    heroCaption: 'Donate is never more than one tap away — on every page, at every screen size.',
    problemHead: 'The deadline was the spec',
    problem: [
      'A campaign has one date that can\'t move. Everything else — platform copy, endorsements, events, the candidate\'s photo — changes constantly, and it changes through whoever is on the team that week, not through a developer.',
      '[ Placeholder: describe the starting point — no site, an old site, a template that couldn\'t take donations — and the one thing the campaign most needed the site to do. ]',
    ],
    whatIDid: [
      {
        head: 'Scoped to the calendar.',
        body: 'Worked backwards from launch and election day to a short list of must-haves — donate, platform, get involved — and pushed everything else to a second release. [ Placeholder: what got cut and why. ]',
      },
      {
        head: 'Designed for trust.',
        body: 'A political site is read by skeptics. Clear hierarchy, plain language, fast loads on phones, and the candidate\'s own voice up front rather than stock campaign graphics.',
      },
      {
        head: 'Integrated the money.',
        body: 'Wired in [ donation platform ] so contributions flowed through a compliant processor, and tested every path to the donate button end to end before launch.',
      },
      {
        head: 'Handed it off.',
        body: 'Documented the content workflow so staff and volunteers could update the site alone — [ Placeholder: CMS, docs, training session ].',
      },
    ],
    figures: [
      { caption: 'Every path to the donate button, tested before launch.' },
      { caption: 'Policy positions, written for a phone screen.' },
      { caption: 'Most visitors arrived from social on a phone.' },
    ],
    results: [
      { stat: '[ 00 ]', label: 'Days from kickoff to launch' },
      { stat: '[ $00k ]', label: 'Raised through the site' },
      { stat: '[ 00 ]', label: 'Content updates made by staff without a developer' },
    ],
    differently: [
      '[ Placeholder: an honest lesson — e.g. I\'d build the content editing workflow first, not last, because that is the part the client lives in every day after I leave. ]',
    ],
    nextSlug: 'asmbs',
    nextLabel: 'ASMBS member tools',
    liveUrl: 'https://albersforcongress.com/',
  },
  {
    slug: 'asmbs',
    kicker: 'Case study · Requirements to shipped features',
    title: 'ASMBS: tools for a national medical society, built with the people who use them',
    dek: 'The American Society for Metabolic and Bariatric Surgery runs its members, events and content on two systems — an AMS and a CMS. I led full stack work across both, working with staff directly rather than through a spec.',
    facts: {
      role: 'Manager, Software Engineering (contract)',
      timeline: 'March – May 2025 · Newberry, FL',
      build: 'WordPress · Symfony · PHP · MariaDB',
      outcome: '[ add a real number here ]',
    },
    heroCaption: 'Member-facing tools sit on top of years of association data — the work was making them usable without breaking it.',
    problemHead: 'Two systems, one staff, no spec',
    problem: [
      'An association lives in its data: memberships, certifications, events, dues. At ASMBS that data spanned an Association Management System and a WordPress content system, and the staff who depended on both had requests that had never been written down as requirements.',
      '[ Placeholder: the specific pain — slow admin pages, manual data entry, members unable to find something — that made this work urgent. ]',
    ],
    whatIDid: [
      {
        head: 'Turned requests into requirements.',
        body: 'Sat with staff to understand how they actually worked, then translated that into scoped, prioritised tickets they could review and sign off on.',
      },
      {
        head: 'Built across both systems.',
        body: 'Shipped features in Symfony and PHP on the AMS side and WordPress on the CMS side, keeping MariaDB data consistent between them.',
      },
      {
        head: 'Improved performance and usability.',
        body: '[ Placeholder: a specific tool or page you rebuilt and what got faster or simpler. ]',
      },
      {
        head: 'Left it maintainable.',
        body: 'Documented what I changed and why, so the next developer inherits decisions, not just code.',
      },
    ],
    figures: [
      { caption: 'Admin tooling, rebuilt around how staff actually work.' },
      { caption: '[ Placeholder caption: what changed. ]' },
      { caption: 'How the AMS and CMS talk to each other.' },
    ],
    results: [
      { stat: '[ 00 ]', label: 'Features shipped in the engagement' },
      { stat: '[ 00% ]', label: 'Faster load on key admin pages' },
      { stat: '[ 00 ]', label: 'Staff hours saved per week' },
    ],
    differently: [
      '[ Placeholder: an honest lesson — e.g. I\'d push for a written system map in week one; most of my time went to rediscovering how the two systems depended on each other. ]',
    ],
    nextSlug: 'mobile-locksmith',
    nextLabel: 'Mobile Locksmith FL',
    liveUrl: 'https://asmbs.org/',
  },
  {
    slug: 'mobile-locksmith',
    kicker: 'Case study · Local business & search',
    title: 'Mobile Locksmith FL: a site that has to work when someone is locked out',
    dek: 'A local service business lives or dies on the phone ringing. I designed and built a fast, search-first site whose only job is to turn a stressed person on a phone into a call.',
    facts: {
      role: 'Designer, developer, SEO',
      timeline: '[ 20XX ] · TRStudios LLC',
      build: '[ Stack ] · local SEO · performance',
      outcome: '[ add a real number here ]',
    },
    heroCaption: 'The phone number is the product. Everything else on the page supports it.',
    problemHead: 'The customer is standing outside',
    problem: [
      'Nobody browses a locksmith\'s website. They search on a phone, often at night, and pick whichever result looks trustworthy and loads first. That makes speed, local search ranking and a visible phone number the whole brief.',
      '[ Placeholder: where the business was before — no site, poor ranking, calls coming only through a directory. ]',
    ],
    whatIDid: [
      {
        head: 'Designed for one action.',
        body: 'Tap-to-call on every screen, service area and hours stated plainly, and nothing that slows a panicked visitor down.',
      },
      {
        head: 'Built for speed.',
        body: 'Lightweight pages, optimised images and a clean build so the site loads fast on a weak signal.',
      },
      {
        head: 'Structured for local search.',
        body: 'Service and area pages, structured data and [ Google Business Profile work ] so the business shows up where people are searching.',
      },
      {
        head: 'Kept it simple to own.',
        body: '[ Placeholder: hosting, updates, handoff. ]',
      },
    ],
    figures: [
      { caption: 'Tap to call, above the fold, on every page.' },
      { caption: 'One page per service and area, written for search.' },
      { caption: 'Fast on a weak signal.' },
    ],
    results: [
      { stat: '[ 00 ]', label: 'Lighthouse performance score' },
      { stat: '[ 00% ]', label: 'Increase in calls from search' },
      { stat: '[ #0 ]', label: 'Local ranking for [ key term ]' },
    ],
    differently: [
      '[ Placeholder: an honest lesson — e.g. I\'d add call tracking at launch, so the result is measured rather than reported by the owner. ]',
    ],
    nextSlug: 'trstudios',
    nextLabel: 'TRStudios',
    liveUrl: 'https://mobilelocksmithfl.com/',
  },
  {
    slug: 'trstudios',
    kicker: 'Case study · Running the studio',
    title: 'TRStudios: building a studio, not just the sites it ships',
    dek: 'TRStudios is my development studio: client work, workshops and consultation, plus a pipeline of our own products. This is the story of the business side — positioning, process and the product roadmap — as much as the code.',
    facts: {
      role: 'Founder & lead developer',
      timeline: '2024 – present · Highland Park, IL',
      build: 'React · Next.js · TypeScript · Node · Vercel',
      outcome: '[ add a real number here ]',
    },
    heroCaption: 'One studio, three offers: custom development, workshops and consultation.',
    problemHead: "Freelance doesn't scale; a studio might",
    problem: [
      'After years of freelancing I had the skills but not the structure: every engagement started from zero, and there was no way to grow past the hours I could personally bill.',
      "TRStudios is the answer to that — a named business with defined offers, a repeatable delivery process, and its own products so revenue isn't only tied to client hours.",
    ],
    whatIDid: [
      {
        head: 'Positioned the offers.',
        body: 'Split the work into custom development, workshops and consultation, each with its own page, audience and buying path.',
      },
      {
        head: 'Standardised delivery.',
        body: 'A shared kickoff, component library, preview deployments for client review, and an accessibility and SEO pass before every launch — the same process behind FlatRateDev.',
      },
      {
        head: 'Built a product pipeline.',
        body: 'Scoped four in-house products — FieldKit Sync (field service SaaS), DeetSheet (sales notes), VirtualBoss (AI productivity) and PlantSpace AI (plant planning) — and prioritised them by [ Placeholder: criteria ].',
      },
      {
        head: 'Ran the business.',
        body: 'Client communication, pricing, invoicing and scheduling — [ Placeholder: tools and habits that keep it running ].',
      },
    ],
    figures: [
      { caption: 'The in-house product pipeline.' },
      { caption: 'FieldKit Sync: multi-tenant field service SaaS in progress.' },
      { caption: 'Workshops: teaching as a line of business.' },
    ],
    results: [
      { stat: '[ 00 ]', label: 'Client projects delivered' },
      { stat: '[ 0 ]', label: 'In-house products in development' },
      { stat: '[ 00 ]', label: 'Workshops or consultations run' },
    ],
    differently: [
      "[ Placeholder: an honest lesson — e.g. I'd commit to one in-house product at a time; four in parallel means none of them ships as fast as it should. ]",
    ],
    nextSlug: 'teaching',
    nextLabel: 'Teaching toolkit at General Assembly',
    liveUrl: 'https://www.trstudiosllc.com/',
  },
  {
    slug: 'teaching',
    kicker: 'Case study · People & systems',
    title: 'Teaching toolkit: the boilerplates that helped 150+ developers ship',
    dek: "At General Assembly I taught and supervised software engineering cohorts. The most durable thing I built wasn't a lesson — it was a set of starter projects and teaching APIs that made every student's first real app less likely to fail.",
    facts: {
      role: 'Lead instructor, instructional team supervisor',
      timeline: '2020 – 2024 · Chicago / Remote',
      build: 'React · Express · Mongoose · Django REST · LiquidJS',
      outcome: '~50% improvement in student success and graduation rates',
    },
    heroCaption: 'Starter projects for React, Express and Django — auth, structure and docs already solved.',
    problemHead: 'Students were failing on setup, not skill',
    problem: [
      'Project weeks kept going wrong in the same place: students burned their first days on authentication, folder structure and wiring an API, and arrived at the actual feature exhausted and behind.',
      "The fix wasn't more lectures. It was removing the parts that weren't the lesson, so students spent their time on the parts that were.",
    ],
    whatIDid: [
      {
        head: 'Built the boilerplates.',
        body: 'React Auth, Express + Mongoose Auth API, Express + Mongoose + LiquidJS, and Django REST Framework starters — each with auth, structure and documentation in place.',
      },
      {
        head: 'Built a teaching API.',
        body: 'The Library API: seed scripts, curl scripts and endpoint tables, used to teach API consumption in React, jQuery and vanilla JavaScript.',
      },
      {
        head: 'Taught with real apps.',
        body: 'Lesson projects like the Monster Pets MERN app gave students a complete, working reference to read before building their own.',
      },
      {
        head: 'Led the team.',
        body: 'Supervised instructors and assistants across remote cohorts, and pioneered the emergency remote protocols when Covid-19 moved everything online.',
      },
    ],
    figures: [
      { caption: 'The Library API — seed, curl and endpoint docs.' },
      { caption: 'A complete MERN reference app for students.' },
      { caption: '[ Placeholder caption. ]' },
    ],
    results: [
      { stat: '150+', label: 'Developers taught into the industry' },
      { stat: '400+', label: 'Student projects consulted' },
      { stat: '~50%', label: 'Improvement in success and graduation rates' },
    ],
    differently: [
      "[ Placeholder: an honest lesson — e.g. I'd version the boilerplates alongside the curriculum; drift between the two cost students time every time a dependency moved. ]",
    ],
    nextSlug: 'flatratedev',
    nextLabel: 'FlatRateDev',
    liveUrl: 'https://github.com/timmshinbone',
  },
]

export function getCaseStudy(slug) {
  return caseStudies.find(c => c.slug === slug) || null
}
