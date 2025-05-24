import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PayMe() {
  const [clicked, setClicked] = useState(null);

  const services = [
    {
        title: 'Tip Jar',
        description: 'Want to just say thanks or show support? Drop a tip in the jar ❤️',
        price: 'Any amount',
        link: 'https://buy.stripe.com/test_8wM5nkbjZ0E1bAA3cc'
    },
    {
      title: 'Game & App Consulting',
      description: 'Early-stage planning, wireframing, and guidance to avoid common dev pitfalls.',
      price: '$150/session',
      link: 'https://buy.stripe.com/test_dR6bKK6zj6IRe1O4gg'
    },
    {
      title: 'Full Stack Development',
      description: 'Complete frontend + backend builds for websites and mobile apps.',
      price: 'From $2,000/project',
      link: 'https://buy.stripe.com/test_6oE6rq5Bn6IRbAAeV0'
    },
    {
      title: 'SEO Optimization',
      description: 'Site speed improvements, accessibility, metadata, and indexing support.',
      price: '$300/site',
      link: 'https://buy.stripe.com/test_dR6aFMcNdfP54cM5kl'
    },
    {
      title: 'Tutoring & Mentorship',
      description: 'JavaScript, React, WordPress, or game dev personalized tutoring.',
      price: '$50/hr',
      link: 'https://buy.stripe.com/test_8wM3eY6zj1ZRe1O7ss'
    }
  ];

  return (
    <>
      <Head>
        <title>Pay for Services | Timm Schoenborn</title>
        <meta name="description" content="Securely pay for services from Timm Schoenborn including web development, SEO, game consulting, and tutoring." />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Support My Work or Book a Service" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl" />

          {clicked && (
            <motion.div
              className="mb-8 text-center text-lg font-semibold text-primary dark:text-primaryDark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Redirecting you to Stripe for {clicked}...
            </motion.div>
          )}

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.li
                key={index}
                className="relative w-full p-6 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
                <h2 className="text-2xl font-bold mb-2 text-dark dark:text-light">{service.title}</h2>
                <p className="text-base mb-2 dark:text-light/90">{service.description}</p>
                <span className="block text-primary dark:text-primaryDark font-semibold mb-4">{service.price}</span>
                <motion.a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setClicked(service.title)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark border-2 border-transparent hover:border-dark dark:hover:border-light transition"
                >
                  Pay Now
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
}
