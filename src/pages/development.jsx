import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Code, Server, Layers, Settings, Globe, Calendar, Rocket } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';
import ServiceCardLarge from '@/components/ServiceCardLarge';
import fullStackImg from '../../public/images/services/fullStackDevImage.png';

export default function FullStackDevPage() {
  return (
    <>
      <Head>
        <title>Full Stack Development | Timm Schoenborn</title>
        <meta
          name="description"
          content="Custom full stack development with Timm Schoenborn. From scalable APIs to responsive UI design—modern web and app solutions tailored to your business."
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Modern Apps. Built Right." className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl" />

          <ServiceCardLarge
            title="Full Stack Web & App Development"
            price="Project-Based | Starting at $2,000"
            image={fullStackImg}
          />

          <section className="max-w-4xl w-full mt-12 prose prose-lg dark:prose-invert">
            <h2 className="flex items-center gap-2 text-3xl font-bold">
              <Rocket className="w-6 h-6" />
              Complete Development Solutions
            </h2>
            <p>
              I specialize in delivering high-performance full stack web and app experiences—from sleek landing pages to complex SaaS platforms. Whether you need help planning architecture, setting up cloud deployments, or refining frontend UI/UX, I bring a decade of hands-on engineering and product experience.
            </p>

            <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10">
              <Code className="w-6 h-6" /> What I Build
            </h3>
            <ul>
              <li><Layers className="inline mr-2 w-4 h-4" /> React/Next.js frontends with Tailwind, Framer Motion, and accessibility in mind</li>
              <li><Server className="inline mr-2 w-4 h-4" /> Scalable APIs using Node.js, Express, PostgreSQL, or Supabase</li>
              <li><Settings className="inline mr-2 w-4 h-4" /> Full stack apps with secure authentication, file storage, Stripe payments, and more</li>
              <li><Globe className="inline mr-2 w-4 h-4" /> Optimized deployment pipelines: Vercel, Netlify, or custom servers</li>
            </ul>

            <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10">
              <Rocket className="w-6 h-6" /> Why Work With Me?
            </h3>
            <ul>
              <li><Code className="inline mr-2 w-4 h-4" /> Developer & Designer in One — Clean UI meets clean code</li>
              <li><Layers className="inline mr-2 w-4 h-4" /> Architect First — I help clients avoid technical debt before it happens</li>
              <li><Settings className="inline mr-2 w-4 h-4" /> Real World Experience — I’ve launched apps, dashboards, and tools for real businesses</li>
              <li><Globe className="inline mr-2 w-4 h-4" /> Remote Ready — Async, Slack-friendly, and timezone-savvy</li>
            </ul>

            <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10">
              <Calendar className="w-6 h-6" /> Ready to Build Something?
            </h3>
            <p>
              Let’s talk through your next big thing. You can <strong>book a free 30-minute discovery call</strong> to walk through your idea, budget, and timeline.
            </p>
            <p><Link href="/hire-me#book-me" className="underline font-semibold">Book your call now →</Link></p>

            <h4 className="text-xl font-semibold mt-10">SEO Highlights:</h4>
            <ul>
              <li>custom web development services</li>
              <li>freelance full stack developer</li>
              <li>Next.js app development</li>
              <li>frontend + backend engineer portfolio</li>
              <li>node.js and PostgreSQL freelancer</li>
              <li>react and tailwind website expert</li>
              <li>remote app developer for hire</li>
              <li>build MVP with Supabase & Stripe</li>
            </ul>
          </section>
        </Layout>
      </main>
    </>
  );
}
