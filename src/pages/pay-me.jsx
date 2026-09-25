import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import TipJarForm from '@/components/TipJarForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const ThickThinRule = () => (
  <hr
    aria-hidden="true"
    style={{ height: 5, border: 0, borderTop: '2px solid currentColor', borderBottom: '1px solid currentColor', margin: 0 }}
  />
);

const HairlineRule = () => (
  <hr
    aria-hidden="true"
    style={{ height: 0, border: 0, borderTop: '1px solid currentColor', margin: 0 }}
  />
);

const services = [
  {
    title: 'Game & App Consulting',
    description: 'Plan features, review your tech stack, and avoid pitfalls in early-stage game or app development.',
    price: 'Starts around $150/session (negotiable)',
    link: 'https://buy.stripe.com/6oUfZh5Upago1PC4K80RG00'
  },
  {
    title: 'Full Stack Development',
    description: 'From websites to mobile apps, I offer complete frontend and backend development using modern frameworks.',
    price: 'Typical range: $2,000–15,000/project (flexible)',
    link: 'https://buy.stripe.com/28EaEXfuZewEam8gsQ0RG01'
  },
  {
    title: 'SEO Optimization',
    description: "Improve your site's speed, metadata, accessibility, and visibility on search engines.",
    price: 'Starts at $300/site (negotiable)',
    link: 'https://buy.stripe.com/9B628raaF1JS0Ly6Sg0RG02'
  },
  {
    title: 'Tutoring & Mentorship',
    description: 'Learn JavaScript, React, WordPress, or game dev principles with personalized support.',
    price: '$50/hr (bundles and student pricing available)',
    link: 'https://buy.stripe.com/fZufZhaaF6088e0ekI0RG04'
  },
];

export default function PayMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Support or Hire Me | Timm&apos;s Portfolio</title>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <h1
            className="font-serif font-bold text-dark dark:text-light tracking-[-0.02em] mb-4"
            style={{ fontSize: 'clamp(34px, 5.4vw, 68px)', lineHeight: 1.08 }}
          >
            Support My Work or Hire Me
          </h1>

          <ThickThinRule />

          <section className="mt-10 mb-16">
            <Elements stripe={stripePromise}>
              <TipJarForm />
            </Elements>
          </section>

          <div className="mb-8">
            <h2
              className="font-serif font-bold text-dark dark:text-light tracking-[-0.015em] mb-3"
              style={{ fontSize: 'clamp(22px, 2.8vw, 28px)', lineHeight: 1.2 }}
            >
              Pay for a Service
            </h2>
            <HairlineRule />
          </div>

          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '40px 48px',
              padding: 0,
              listStyle: 'none',
            }}
          >
            {services.map((service) => (
              <li key={service.link} className="flex flex-col gap-3">
                <h3
                  className="font-serif font-bold text-dark dark:text-light tracking-[-0.015em]"
                  style={{ fontSize: 'clamp(18px, 2.2vw, 22px)', lineHeight: 1.2 }}
                >
                  {service.title}
                </h3>
                <p className="font-serif text-[15px] leading-[24px] text-dark/80 dark:text-light/80">
                  {service.description}
                </p>
                <p className="font-serif text-[15px] font-semibold text-[#006786] dark:text-[#62c5ee]">
                  {service.price}
                </p>
                <Link
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center self-start font-serif font-semibold text-[14px] leading-[1.2] bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d] px-[18px] py-2.5 rounded-sm hover:bg-[#1186ac] dark:hover:bg-[#38a6cf] transition-colors"
                >
                  Pay Now
                </Link>
              </li>
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
}
