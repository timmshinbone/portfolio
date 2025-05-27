// Scaffold for 4 SEO-optimized service landing pages and nav update in Next.js

// 1. Each page goes in /pages/{slug}.js with a similar structure to existing /hire-me page
// 2. Shared SEO keywords and structure, with unique content for each offering

// EXAMPLE: pages/mentorship.js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Calendar, BrainCircuit, Code2, Gamepad2, Globe, Rocket, SearchCheck, UserCheck } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';
import ServiceCardLarge from '@/components/ServiceCardLarge';
import tutorImg from '../../public/images/services/mentorAndTutoringImg.png';

export default function MentorshipPage() {
    return (
      <>
        <Head>
          <title>Mentorship & Code Tutoring | Timm Schoenborn</title>
          <meta
            name="description"
            content="Personalized JavaScript, React, Next.js, and game dev mentorship with Timm Schoenborn. Book a remote session today."
          />
        </Head>
  
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
          <Layout className="pt-16">
            <AnimatedText text="Level Up With Personal Mentorship" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl" />
  
            <ServiceCardLarge
              title="1:1 Code Tutoring & Mentorship"
              price="$50/hr (discounts available)"
              image={tutorImg}
            />
  
            <section className="max-w-4xl w-full mt-12 prose prose-lg dark:prose-invert">
              <h2 className="flex items-center gap-2 text-3xl font-bold"><Rocket className="w-6 h-6" /> Personalized Mentorship & Code Tutoring</h2>
              <p><em>Accelerate your journey in web development, app creation, or game design with a mentor who’s been there.</em></p>
              <p>
                Are you a self-taught developer stuck in tutorial hell? A bootcamp grad trying to land that first job? A designer or entrepreneur looking to level up your technical fluency? You don’t need another YouTube playlist—you need a <strong>personalized plan</strong>, <strong>real accountability</strong>, and <strong>an expert in your corner</strong>.
              </p>
              <p>
                With over a decade of experience in <strong>web development, full stack architecture, and software education</strong>, I’ve helped more than <strong>150+ developers</strong> sharpen their skills and break into the tech industry. Whether you're learning <strong>JavaScript, React, Next.js</strong>, or diving into game engines like <strong>Unity, Unreal, or Godot</strong>, I’ll meet you exactly where you are and get you where you want to go—faster.
              </p>
  
              <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10"><BrainCircuit className="w-6 h-6" /> What You’ll Learn (Tailored To You)</h3>
              <ul>
                <li><Code2 className="inline mr-2 w-4 h-4" /> Frontend Development: HTML, CSS, JavaScript, React, Tailwind, Next.js</li>
                <li><Code2 className="inline mr-2 w-4 h-4" /> Backend Foundations: Node.js, Express, REST APIs, PostgreSQL, MongoDB</li>
                <li><Gamepad2 className="inline mr-2 w-4 h-4" /> Game Dev: Principles of gameplay, scene design, physics, and scripting</li>
                <li><UserCheck className="inline mr-2 w-4 h-4" /> Career Coaching: Portfolios, GitHub reviews, job search strategy, mock interviews</li>
                <li><SearchCheck className="inline mr-2 w-4 h-4" /> SEO & Performance Optimization: Build faster, rank higher, reach more users</li>
              </ul>
  
              <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10"><UserCheck className="w-6 h-6" /> Why Choose Me?</h3>
              <ul>
                <li><BrainCircuit className="inline mr-2 w-4 h-4" /> Experienced Educator — Former lead instructor at General Assembly, trained 150+ devs</li>
                <li><SearchCheck className="inline mr-2 w-4 h-4" /> Results-Driven — Students now working at top tech companies</li>
                <li><Code2 className="inline mr-2 w-4 h-4" /> Project-Based Learning — We’ll build real apps, not just watch videos</li>
                <li><Globe className="inline mr-2 w-4 h-4" /> Flexible Format — One-off sessions or structured multi-week curriculum</li>
                <li><Globe className="inline mr-2 w-4 h-4" /> Remote First — Learn from anywhere in the world, on your schedule</li>
              </ul>
  
              <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10"><Calendar className="w-6 h-6" /> Ready to Start?</h3>
              <p>
                Whether you want to polish your portfolio, prep for interviews, or finally launch that app—you can <strong>book a free 30-minute discovery call today</strong>.
              </p>
              <p><Link href="/hire-me#book-me" className="underline font-semibold">Use the tool here to grab a time that works for you →</Link></p>
  
              <h4 className="text-xl font-semibold mt-10">SEO Highlights:</h4>
              <ul>
                <li>JavaScript tutoring</li>
                <li>personalized coding mentorship</li>
                <li>remote programming tutor</li>
                <li>learn React one-on-one</li>
                <li>Next.js teacher for beginners</li>
                <li>game development mentor Unity Unreal Godot</li>
                <li>web development career coaching</li>
                <li>online tech mentorship program</li>
              </ul>
            </section>
          </Layout>
        </main>
      </>
    );
}
// Duplicate and customize this structure for:
// pages/web-development.js
// pages/seo-consulting.js
// pages/game-app-consulting.js

// ---
// Nav Update: Update Header component to include dropdown under "Hire Me"

// Pseudocode for components/Header.js
// import Link from 'next/link';
// ...
// <div className="relative group">
//   <Link href="/hire-me">Hire Me</Link>
//   <div className="absolute hidden group-hover:block bg-light dark:bg-dark shadow-lg rounded-md mt-2">
//     <Link href="/mentorship" className="block px-4 py-2">Mentorship</Link>
//     <Link href="/web-development" className="block px-4 py-2">Web Development</Link>
//     <Link href="/seo-consulting" className="block px-4 py-2">SEO Consulting</Link>
//     <Link href="/game-app-consulting" className="block px-4 py-2">Game & App Consulting</Link>
//   </div>
// </div>

// Tailwind CSS should already support hover states for dropdowns.
// Create <ServiceCardLarge> or reuse large card from /index.js for service detail consistency.

// Each page should include CTA buttons linking to Calendly OR inline embeds with iframe where appropriate.
