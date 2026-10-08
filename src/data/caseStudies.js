export const caseStudies = [
  {
    slug: 'mobile-locksmith',
    kicker: 'Case study · Local business & search',
    title: 'Mobile Locksmith FL: a site that has to work when someone is locked out',
    dek: 'A local service business lives or dies on the phone ringing. I designed and built a fast, search-first site whose only job is to turn a stressed person on a phone into a call.',
    facts: {
      role: 'Designer, developer, SEO',
      timeline: '[ 20XX ] · TRStudios LLC',
      build: 'Next.js · Vercel · local SEO · performance',
      outcome: '+40% calls from organic search in year one',
    },
    heroImage: '/images/projects/mobileLocksmith/01-home-desktop-hero.png',
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
        body: 'Lightweight pages, optimized images and a clean build so the site loads fast on a weak signal.',
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
      { src: '/images/projects/mobileLocksmith/05-commercial-desktop-hero.png', caption: 'Tap to call, above the fold, on every page.' },
      { src: '/images/projects/mobileLocksmith/06-car-keys-desktop-hero.png', caption: 'One page per service and area, written for search.' },
      { src: '/images/projects/mobileLocksmith/07-about-desktop-hero.png', caption: 'Fast on a weak signal.' },
    ],
    results: [
      { stat: '94', label: 'Lighthouse performance score' },
      { stat: '+40%', label: 'Increase in calls from organic search' },
      { stat: '#3', label: 'Local ranking for "locksmith near me"' },
    ],
    differently: [
      '[ Placeholder: an honest lesson — e.g. I\'d add call tracking at launch, so the result is measured rather than reported by the owner. ]',
    ],
    nextSlug: 'asmbs',
    nextLabel: 'ASMBS member tools',
    liveUrl: 'https://mobilelocksmithfl.com/',
  },
  {
    slug: 'asmbs',
    kicker: 'Case study · Requirements to shipped features',
    title: 'ASMBS: tools for a national medical society, built with the people who use them',
    dek: 'The American Society for Metabolic and Bariatric Surgery runs its members, events and content on two systems, an AMS and a CMS. I led full stack work across both and worked directly with staff, since there was no spec.',
    facts: {
      role: 'Manager, Software Engineering (contract)',
      timeline: 'March – May 2025 · Newberry, FL',
      build: 'WordPress · Symfony · PHP · MariaDB',
      outcome: '12 features shipped across both systems',
    },
    heroImage: '/images/projects/asmbs/01-home-desktop-hero.png',
    heroCaption: 'Member-facing tools sit on top of years of association data. The job was making them usable without breaking any of it.',
    problemHead: 'Two systems, one staff, no spec',
    problem: [
      'An association lives in its data: memberships, certifications, events, dues. At ASMBS that data spanned an Association Management System and a WordPress content system, and the staff who depended on both had requests that had never been written down as requirements.',
      '[ Placeholder: the specific pain — slow admin pages, manual data entry, members unable to find something — that made this work urgent. ]',
    ],
    whatIDid: [
      {
        head: 'Turned requests into requirements.',
        body: 'Sat with staff to understand how they actually worked, then translated that into scoped, prioritized tickets they could review and sign off on.',
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
        body: 'Documented what I changed and why, so the next developer knows the reasoning behind the code.',
      },
    ],
    figures: [
      { src: '/images/projects/asmbs/06-for-patients-desktop-hero.png', caption: 'Admin tooling, rebuilt around how staff actually work.' },
      { src: '/images/projects/asmbs/07-membership-desktop-hero.png', caption: '[ Placeholder caption: what changed. ]' },
      { src: '/images/projects/asmbs/11-find-a-surgeon-desktop-hero.png', caption: 'How the AMS and CMS talk to each other.' },
    ],
    results: [
      { stat: '12', label: 'Features shipped in the engagement' },
      { stat: '55%', label: 'Faster on key admin page loads' },
      { stat: '~7 hrs', label: 'Staff time saved per week' },
    ],
    differently: [
      '[ Placeholder: an honest lesson — e.g. I\'d push for a written system map in week one; most of my time went to rediscovering how the two systems depended on each other. ]',
    ],
    nextSlug: 'print-production',
    nextLabel: 'Print production',
    liveUrl: 'https://asmbs.org/',
  },
  {
    slug: 'print-production',
    kicker: 'Case study · Production & operations',
    title: 'Print production: running the floor at a print shop of about 15 people',
    dek: 'At Quartet Digital Printing I was the production manager and the project manager for a crew of about 15. We did high-volume printing for colleges and Evanston businesses, plus large-format printing, bindery and finishing. My job was getting every order through the shop and out the door on time.',
    facts: {
      role: 'Production manager & project manager',
      timeline: '2012 – 2015 · Chicago, IL',
      build: 'High-volume digital print · large format · bindery & finishing',
      outcome: 'Raised output and cut costs for university and Fortune 500 clients',
    },
    heroCaption: 'High-volume print, large format and bindery, all in one shop.',
    problemHead: 'A lot of small deadlines at once',
    problem: [
      'A print shop working for colleges and local businesses always has a lot of jobs open at the same time, each with its own stock, finishing and due date, and all of them compete for the same equipment and the same people. A rush for one client turns into a delay for another unless somebody is sequencing the work.',
      'That made the job mostly a scheduling problem: knowing what each order needed, in what order, from whom, and when it had to leave the shop.',
    ],
    whatIDid: [
      {
        head: 'Managed the crew.',
        body: 'Ran a team of about 15 across printing, large format and bindery: who was on which job, what came next, and what moved when a job changed.',
      },
      {
        head: 'Scheduled the work.',
        body: "Sequenced high-volume runs for colleges and Evanston businesses around the large-format and finishing jobs that needed the same people and equipment, so one client's rush order didn't push everyone else late.",
      },
      {
        head: 'Managed the projects.',
        body: 'I was also the project manager, so I carried jobs from the first request to the finished piece and was the person clients called when something changed.',
      },
      {
        head: 'Watched the costs.',
        body: 'Managed staff, inventory and equipment, and raised output while cutting costs for the university and Fortune 500 clients the shop served.',
      },
    ],
    figures: [
      { caption: 'Large-format work, printed and finished in the shop.' },
      { caption: 'Bindery and finishing, the last stop before a job went out.' },
      { caption: 'High-volume work for colleges and Evanston businesses.' },
    ],
    results: [
      { stat: '[ 00 ]', label: 'Jobs through the shop in a typical month' },
      { stat: '[ 0 days ]', label: 'Typical turnaround on a standard order' },
      { stat: '[ 00% ]', label: 'Increase in output while I ran production' },
    ],
    differently: [
      '[ Placeholder: an honest lesson from the shop, for example something you would schedule, track or staff differently now. ]',
    ],
    nextSlug: 'northwestern-signage',
    nextLabel: 'Northwestern University signage',
  },
  {
    slug: 'northwestern-signage',
    kicker: 'Case study · Project management',
    title: 'Northwestern University signage: big college buildings, managed from a small sign shop',
    dek: "At FastSigns, a small sign shop, I was the project manager on signage for large college buildings, including Northwestern University's projects. I kept scope, schedule and the client lined up from start to finish.",
    facts: {
      role: 'Project manager',
      timeline: '2014 – 2016 · Chicago, IL',
      build: 'Signage for large college buildings',
      outcome: 'Projects delivered on time and on budget',
    },
    heroCaption: 'Building signage for Northwestern University.',
    problemHead: 'Big buildings, small shop',
    problem: [
      'A large college building needs a lot of signage, all of it consistent, and all of it ready by the date the building needs it.',
      'A small sign shop takes that on with a small team. That puts the weight on project management: scope agreed up front, a schedule the shop can actually hit, and one person the university can call.',
    ],
    whatIDid: [
      {
        head: 'Managed the Northwestern projects.',
        body: "I managed Northwestern University's signage projects for the shop, from scope through delivery.",
      },
      {
        head: 'Ran the schedule.',
        body: 'Led cross-functional teams on scope, schedule and resources for each job, so projects landed on time and on budget.',
      },
      {
        head: 'Took it to the design side.',
        body: 'After the sign shop I joined Perkins & Will as a Branded Environments Designer. I designed signage systems for projects worldwide alongside architects and engineers, and managed projects there too, this time from the design side of the same work.',
      },
    ],
    figures: [
      { caption: 'Signage in a Northwestern University building.' },
      { caption: 'Sign work at building scale, run from a small shop.' },
      { caption: 'Perkins & Will: signage systems from the design side.' },
    ],
    results: [
      { stat: '[ 00 ]', label: 'Northwestern buildings or projects I managed' },
      { stat: '[ 000 ]', label: 'Signs in the largest single package' },
      { stat: '[ 0 ]', label: 'People on the shop team' },
    ],
    differently: [
      '[ Placeholder: an honest lesson, for example how you would scope or schedule a large building package differently now. ]',
    ],
    nextSlug: 'hhh',
    nextLabel: 'Healthy Homemade Habits',
  },
  {
    slug: 'hhh',
    kicker: 'Case study · Personal brand & content platform',
    title: 'Healthy Homemade Habits: a site your partner can run without calling you',
    dek: 'My wife had the expertise: years of cooking healthy food and building habits that actually stick. She needed a platform to publish it. I designed and built it so she could create and update without touching code.',
    facts: {
      role: 'Designer & developer',
      timeline: '[ 20XX ] – present · TRStudios LLC',
      build: 'Next.js · React · [ CMS / data layer ]',
      outcome: '2,400 monthly visits and growing',
    },
    heroImage: '/images/projects/hhh/01-home-desktop-hero.png',
    heroCaption: 'A content-first home page that puts recipes, habits and guides in front of someone who just wants to eat better.',
    problemHead: 'The constraint was the collaborator',
    problem: [
      'My wife knows food and healthy habits. She does not want to open a code editor. The brief was simple: build something she can write, update and grow on her own terms, and make it look like something worth trusting.',
      'Building for a non-technical content creator is a different problem than building for a client. There is no approval loop, no ticket queue, and no "that can be phase two." If something is hard to use, it just does not get used.',
    ],
    whatIDid: [
      {
        head: 'Designed around the content.',
        body: 'Every layout decision started from the writing: what she publishes, how long a piece runs, and what a reader needs to see first. The visual design came after those answers.',
      },
      {
        head: 'Built the interactive features.',
        body: 'The quiz and the grocery list builder drive the most visits to the site. Both are built to work fast on a phone, with nothing in the way between "I want to know" and "here is your answer."',
      },
      {
        head: 'Made it independent.',
        body: 'She can create, edit and publish without touching a terminal or calling me. [ Placeholder: CMS or authoring workflow detail. ]',
      },
      {
        head: 'Kept it fast and findable.',
        body: 'Static rendering where possible, optimized images, and structured content so search engines can index recipes and guides properly.',
      },
    ],
    figures: [
      { src: '/images/projects/hhh/05-quiz-desktop-hero.png', caption: 'The quiz is the most engaging way into the site.' },
      { src: '/images/projects/hhh/06-perfect-grocery-list-desktop-hero.png', caption: 'Grocery list builder: the tool readers keep coming back for.' },
      { src: '/images/projects/hhh/07-about-desktop-hero.png', caption: 'The about page earns the trust the recipes need.' },
    ],
    results: [
      { stat: '2,400', label: 'Monthly visits' },
      { stat: '60+', label: 'Recipes and guides published' },
      { stat: '100%', label: 'Content updates made without developer involvement' },
    ],
    differently: [
      "I'd instrument what readers do after the quiz before I build anything else. We know the quiz gets traffic. We don't yet know how many of those people come back, and that's the metric that tells you whether the habit-building side of the site is working.",
    ],
    nextSlug: 'flatratedev',
    nextLabel: 'FlatRateDev',
    liveUrl: 'https://www.healthyhomemadehabits.com/',
  },
  {
    slug: 'flatratedev',
    kicker: 'Case study · Product, design and delivery',
    title: 'FlatRateDev: a website you can price before you call anyone',
    dek: 'A productized web-build service, taken from a vague idea to a live offer: the packaging and pricing model, the site that sells it, the tooling that proves it works, and the delivery process behind it. I was the product manager, the designer and the engineer.',
    facts: {
      role: 'Product owner, designer, lead developer',
      timeline: '2024 – present, TRStudios LLC',
      build: 'Next.js · TypeScript · Chart.js · Playwright · Vercel',
      outcome: '6 builds delivered, zero post-launch scope disputes',
    },
    heroImage: '/images/projects/FRDHomepage.jpg',
    heroCaption: 'The pricing page does the selling: three fixed packages, and a comparison that shows what the same build costs elsewhere.',
    problemHead: 'The hard part was pricing',
    problem: [
      'Small businesses asking for a website can\'t tell the difference between a $1,500 build and a $15,000 one, so they do the only rational thing: they stall. Every discovery call I ran spent its first twenty minutes on the same three questions, and the proposals that followed were bespoke, slow to write, and easy to compare unfavorably against a template service.',
      'The answer was a business decision. If the price and the scope are published, the sales conversation starts at "which one" instead of "how much," and the build itself can be standardized behind it.',
    ],
    whatIDid: [
      {
        head: 'Defined the product.',
        body: 'Three packages with hard scope boundaries, priced from my own delivery data: what each tier costs me in hours, where the margin is, and which requests have to fall outside it to keep the promise honest.',
      },
      {
        head: 'Designed the argument.',
        body: 'The site is a sales document, so it\'s structured like one: the price first, the comparison second, the proof third. I built the cost comparison as a live Chart.js graphic so the claim is legible in two seconds instead of three paragraphs.',
      },
      {
        head: 'Built it to be trusted.',
        body: 'Next.js and TypeScript, with rendering chosen per page type so the marketing pages are static and fast. Playwright end-to-end suites cover the funnel. Every path a prospect can take to the contact form is tested, because a broken form on a sales site is the whole product failing.',
      },
      {
        head: 'Made delivery repeatable.',
        body: 'A fixed price only works if the process is fixed too: a standard kickoff, a component library reused across builds, preview deployments for client review, and an accessibility and SEO pass before every launch.',
      },
    ],
    figures: [
      { caption: 'The Chart.js comparison, which lets anyone check the claim.' },
      { caption: 'Scope boundaries published up front, in plain language.' },
      { caption: 'The funnel under test, on every deploy.' },
    ],
    results: [
      { stat: '6', label: 'Builds delivered on the fixed-price model' },
      { stat: '~70%', label: 'Less time from first call to signed scope' },
      { stat: '6', label: 'Launches with zero post-launch scope disputes' },
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
    dek: 'A congressional campaign needed a site that could take donations, carry the platform, and change daily, all run by volunteers with no developer on staff. I scoped it, designed it, built it and handed it over.',
    facts: {
      role: 'Project lead, designer, full stack developer',
      timeline: '[ 20XX ] · [ N ] weeks to launch',
      build: '[ Stack — e.g. .NET / React ] · donation integration · responsive',
      outcome: '$24k raised through the site',
    },
    heroImage: '/images/projects/albersCongress.png',
    heroCaption: 'Donate is never more than one tap away, on every page and at every screen size.',
    problemHead: 'The deadline was the spec',
    problem: [
      'A campaign has one date that can\'t move. Everything else (platform copy, endorsements, events, the candidate\'s photo) changes constantly, and whoever is on the team that week makes the edits, with no developer involved.',
      '[ Placeholder: describe the starting point — no site, an old site, a template that couldn\'t take donations — and the one thing the campaign most needed the site to do. ]',
    ],
    whatIDid: [
      {
        head: 'Scoped to the calendar.',
        body: 'Worked backwards from launch and election day to a short list of must-haves (donate, platform, get involved) and pushed everything else to a second release. [ Placeholder: what got cut and why. ]',
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
        body: 'Documented the content workflow so staff and volunteers could update the site alone, using [ Placeholder: CMS, docs, training session ].',
      },
    ],
    figures: [
      { caption: 'Every path to the donate button, tested before launch.' },
      { caption: 'Policy positions, written for a phone screen.' },
      { caption: 'Most visitors arrived from social on a phone.' },
    ],
    results: [
      { stat: '18', label: 'Days from kickoff to launch' },
      { stat: '$24k', label: 'Raised through the site' },
      { stat: '30+', label: 'Content updates made by staff without a developer' },
    ],
    differently: [
      '[ Placeholder: an honest lesson — e.g. I\'d build the content editing workflow first, not last, because that is the part the client lives in every day after I leave. ]',
    ],
    nextSlug: 'trstudios',
    nextLabel: 'TRStudios',
    liveUrl: 'https://albersforcongress.com/',
  },
  {
    slug: 'trstudios',
    kicker: 'Case study · Running the studio',
    title: 'TRStudios: building the studio behind the sites',
    dek: 'TRStudios is my development studio: client work, workshops and consultation, plus a pipeline of our own products. This case study covers the business side (positioning, process and the product roadmap) as much as the code.',
    facts: {
      role: 'Founder & lead developer',
      timeline: '2024 – present · Highland Park, IL',
      build: 'React · Next.js · TypeScript · Node · Vercel',
      outcome: '11 client projects delivered',
    },
    heroImage: '/images/projects/trstudiosllc/01-home-desktop-hero.png',
    heroCaption: 'One studio, three offers: custom development, workshops and consultation.',
    problemHead: "Freelance doesn't scale; a studio might",
    problem: [
      'After years of freelancing I had the skills but not the structure: every engagement started from zero, and there was no way to grow past the hours I could personally bill.',
      "TRStudios is my answer to that: a named business with defined offers, a repeatable delivery process, and its own products so revenue isn't only tied to client hours.",
    ],
    whatIDid: [
      {
        head: 'Positioned the offers.',
        body: 'Split the work into custom development, workshops and consultation, each with its own page, audience and buying path.',
      },
      {
        head: 'Standardized delivery.',
        body: 'A shared kickoff, component library, preview deployments for client review, and an accessibility and SEO pass before every launch. FlatRateDev runs on the same process.',
      },
      {
        head: 'Built a product pipeline.',
        body: 'Scoped four in-house products: FieldKit Sync (field service SaaS), DeetSheet (sales notes), VirtualBoss (AI productivity) and PlantSpace AI (plant planning). I prioritized them by [ Placeholder: criteria ].',
      },
      {
        head: 'Ran the business.',
        body: 'Handled client communication, pricing, invoicing and scheduling with [ Placeholder: tools and habits that keep it running ].',
      },
    ],
    figures: [
      { src: '/images/projects/trstudiosllc/05-work-desktop-hero.png', caption: 'The in-house product pipeline.' },
      { src: '/images/projects/trstudiosllc/06-workshops-desktop-hero.png', caption: 'FieldKit Sync: multi-tenant field service SaaS in progress.' },
      { src: '/images/projects/trstudiosllc/07-marketing-desktop-hero.png', caption: 'Workshops: teaching as a line of business.' },
    ],
    results: [
      { stat: '11', label: 'Client projects delivered' },
      { stat: '4', label: 'In-house products in development' },
      { stat: '14', label: 'Workshops or consultations run' },
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
    dek: "At General Assembly I taught and supervised software engineering cohorts. The most durable thing I built there was a set of starter projects and teaching APIs that made every student's first real app less likely to fail.",
    facts: {
      role: 'Lead instructor, instructional team supervisor',
      timeline: '2020 – 2024 · Chicago / Remote',
      build: 'React · Express · Mongoose · Django REST · LiquidJS',
      outcome: '~50% improvement in student success and graduation rates',
    },
    heroCaption: 'Starter projects for React, Express and Django, with auth, structure and docs already solved.',
    problemHead: 'Students were getting stuck on setup',
    problem: [
      'Project weeks kept going wrong in the same place: students burned their first days on authentication, folder structure and wiring an API, and arrived at the actual feature exhausted and behind.',
      "The fix was to remove the parts that weren't the lesson, so students spent their time on the parts that were.",
    ],
    whatIDid: [
      {
        head: 'Built the boilerplates.',
        body: 'React Auth, Express + Mongoose Auth API, Express + Mongoose + LiquidJS, and Django REST Framework starters, each with auth, structure and documentation in place.',
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
      { caption: 'The Library API: seed, curl and endpoint docs.' },
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
    nextSlug: 'mobile-locksmith',
    nextLabel: 'Mobile Locksmith FL',
    liveUrl: 'https://github.com/timmshinbone',
  },
]

export function getCaseStudy(slug) {
  return caseStudies.find(c => c.slug === slug) || null
}
