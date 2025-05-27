import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import ServiceCardLarge from '@/components/ServiceCardLarge';
import gameAndAppImg from '../../public/images/services/gameAndAppConsulting.png';
import {
  BrainCircuit,
  Calendar,
  Code2,
  GanttChart,
  LayoutTemplate,
  Rocket,
  Smartphone,
  UserCheck,
  Globe,
} from 'lucide-react';

export default function GameAppConsultingPage() {
  return (
    <>
      <Head>
        <title>Game & App Consulting | Timm Schoenborn</title>
        <meta
          name="description"
          content="Get expert game and app consulting for early-stage projects. From wireframes to launch, Timm Schoenborn offers technical strategy and creative direction."
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Game & App Consulting That Launches Right"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl"
          />

          <ServiceCardLarge
            title="Game & App Development Consulting"
            price="Starting at $150/session (flexible pricing)"
            image={gameAndAppImg}
          />

          <section className="max-w-4xl w-full mt-12 prose prose-lg dark:prose-invert">
            <h2 className="flex items-center gap-2 text-3xl font-bold">
              <Rocket className="w-6 h-6" />
              Strategic Planning for Games & Apps
            </h2>
            <p>
              Whether you're building a mobile app, browser game, or launching a startup MVP, strategic planning can save thousands in dev costs and wasted time. As a full stack developer and creative consultant, I help small teams and solo creators move from idea to reality—efficiently.
            </p>

            <p>
              I’ve helped indie devs, entrepreneurs, and agencies prototype games, map product logic, and build technical systems that scale. If you’re stuck trying to decide what tools to use, how to scope your build, or how to go from notes to roadmap—I can help.
            </p>

            <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10">
              <GanttChart className="w-6 h-6" />
              What We’ll Cover Together
            </h3>
            <ul>
              <li><LayoutTemplate className="inline mr-2 w-4 h-4" /> Wireframing user flow & core functionality</li>
              <li><Smartphone className="inline mr-2 w-4 h-4" /> Choosing the right tools (React Native, Unity, Godot, etc.)</li>
              <li><Code2 className="inline mr-2 w-4 h-4" /> Scoping MVPs and iterative development</li>
              <li><BrainCircuit className="inline mr-2 w-4 h-4" /> Translating creative ideas into technical workflows</li>
              <li><UserCheck className="inline mr-2 w-4 h-4" /> UX best practices for web, mobile, and interactive platforms</li>
            </ul>

            <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10">
              <UserCheck className="w-6 h-6" />
              Why Clients Work With Me
            </h3>
            <ul>
              <li><Rocket className="inline mr-2 w-4 h-4" /> 10+ years building apps, games, and educational tools</li>
              <li><GanttChart className="inline mr-2 w-4 h-4" /> Clear planning, fast execution, zero jargon</li>
              <li><LayoutTemplate className="inline mr-2 w-4 h-4" /> Collaborative whiteboard and prototyping sessions</li>
              <li><Globe className="inline mr-2 w-4 h-4" /> Remote-friendly and async capable</li>
            </ul>

            <h3 className="flex items-center gap-2 text-2xl font-semibold mt-10">
              <Calendar className="w-6 h-6" />
              Book a Call
            </h3>
            <p>
              Ready to sketch ideas, define tech scope, or pitch with confidence? Book a consultation below or <a href="/hire-me#book-me" className="underline font-semibold">schedule a 30-min intro call</a>.
            </p>

            <h4 className="text-xl font-semibold mt-10">SEO Highlights:</h4>
            <ul>
              <li>game and app consulting</li>
              <li>app planning and wireframing services</li>
              <li>startup MVP tech strategy</li>
              <li>Unity, Godot, React Native consultant</li>
              <li>remote freelance dev consultant</li>
              <li>scoping app development projects</li>
              <li>UX for interactive products</li>
              <li>mobile app prototyping expert</li>
            </ul>
          </section>
        </Layout>
      </main>
    </>
  );
}
