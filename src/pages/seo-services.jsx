import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import ServiceCardLarge from '@/components/ServiceCardLarge';
import seoImg from '../../public/images/services/SEOoptimizationImg.png';
import { BarChart, CheckCircle2, Globe, LineChart, Search, Settings, TrendingUp } from 'lucide-react';

export default function SEOConsultingPage() {
  return (
    <>
      <Head>
        <title>SEO Consulting & Optimization | Timm Schoenborn</title>
        <meta
          name="description"
          content="Professional SEO services by Timm Schoenborn. Improve search visibility, performance, and structure for better Google rankings."
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Drive More Traffic With Smarter SEO" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl" />

          <ServiceCardLarge
            title="SEO Consulting & Optimization"
            price="$300/site (flexible based on needs)"
            image={seoImg}
          />

          <section className="max-w-4xl w-full mt-12 prose prose-lg dark:prose-invert">
            <h2 className="flex items-center gap-2 text-3xl font-bold">
              <Search className="w-6 h-6" /> Technical SEO Tailored to You
            </h2>
            <p><em>Boost your visibility. Fix slow pages. Outrank your competitors.</em></p>
            <p>
              I help startups, agencies, and growing businesses improve their site’s technical and on-page SEO—from audit to implementation. With real-world experience in performance tuning, accessibility, semantic markup, and mobile-first optimizations, I’ll help your site stand out in a crowded search landscape.
            </p>
            <p>
              Whether you're launching a new product, rebuilding your site, or stuck on Core Web Vitals, I’ll identify what’s holding you back and show you how to fix it.
            </p>

            <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10">
              <Settings className="w-6 h-6" /> What’s Included
            </h3>
            <ul>
              <li><BarChart className="inline mr-2 w-4 h-4" /> Full SEO Audit (site speed, meta tags, heading structure, schema)</li>
              <li><Search className="inline mr-2 w-4 h-4" /> Keyword research and competitor analysis</li>
              <li><LineChart className="inline mr-2 w-4 h-4" /> Google PageSpeed & Core Web Vitals tuning</li>
              <li><TrendingUp className="inline mr-2 w-4 h-4" /> On-page and semantic markup improvements</li>
              <li><CheckCircle2 className="inline mr-2 w-4 h-4" /> Accessibility and mobile-first best practices</li>
            </ul>

            <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10">
              <Globe className="w-6 h-6" /> Why It Works
            </h3>
            <ul>
              <li><CheckCircle2 className="inline mr-2 w-4 h-4" /> Clear reporting, prioritized tasks, no fluff</li>
              <li><CheckCircle2 className="inline mr-2 w-4 h-4" /> No lock-in—actionable insights you can implement yourself or with me</li>
              <li><CheckCircle2 className="inline mr-2 w-4 h-4" /> Includes performance, structure, UX and technical SEO fixes</li>
              <li><CheckCircle2 className="inline mr-2 w-4 h-4" /> Remote-friendly, async-friendly, documentation provided</li>
            </ul>

            <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10">
              <Search className="w-6 h-6" /> Let's Optimize
            </h3>
            <p>
              Get the clarity and roadmap you need to make real SEO gains. Book a free discovery call to talk goals, traffic, and tactics.
            </p>
            <p><Link href="/hire-me#book-me" className="underline font-semibold">Schedule your strategy call now →</Link></p>

            <h4 className="text-xl font-semibold mt-10">SEO Highlights:</h4>
            <ul>
              <li>Technical SEO services for developers</li>
              <li>Page speed optimization expert</li>
              <li>Schema markup and semantic HTML</li>
              <li>SEO audit consultant remote</li>
              <li>React & Next.js SEO strategies</li>
              <li>Freelance Core Web Vitals specialist</li>
              <li>Local SEO and small business visibility</li>
            </ul>
          </section>
        </Layout>
      </main>
    </>
  );
}
