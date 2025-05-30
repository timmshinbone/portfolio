import Head from 'next/head';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '@/components/hooks/useSmoothScroll';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import gameAndAppImg from '../../public/images/services/gameAndAppConsulting.png';
import fullStackImg from '../../public/images/services/fullStackDevImage.png';
import seoImg from '../../public/images/services/SEOoptimizationImg.png';
import tutorImg from '../../public/images/services/mentorAndTutoringImg.png';
import Link from 'next/link';

const FramerImage = motion(Image);


const FeaturedService = ({ title, description, price, image, index, spotId, serviceLink }) => {
  const { smoothScroll } = useSmoothScroll();

  return (
  <motion.li
    className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 + index * 0.1 }}
    viewport={{ once: true }}
  >
    <div id={spotId} className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl scroll-mt-16" />
    <Link href={serviceLink} className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
      <FramerImage
        src={image}
        alt={title}
        className="w-full h-[450px] object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
    <h2 onClick={() => smoothScroll(`/${serviceLink}`, '')} className="capitalize text-2xl font-bold my-2 hover:underline underline-offset-2 mt-4 dark:text-light xs:text-lg">
      {title}
    </h2>
    <p className="text-sm mb-2 dark:text-light">
      {description}
    </p>
    <span className="text-primary dark:text-primaryDark font-semibold block">{price}</span>
  </motion.li>
)};

export default function HireMe() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100); // Small delay ensures element is in DOM
        }
      }
    };

    scrollToHash();
  }, []);

  const services = [
    {
      title: 'Game & App Consulting',
      description: 'Plan features, review your tech stack, and avoid pitfalls in early-stage game or app development.',
      price: 'Starts around $150/session (negotiable based on project needs)',
      image: gameAndAppImg,
      spotId: 'consult',
      serviceLink: 'consulting'
    },
    {
      title: 'Full Stack Development',
      description: 'From websites to mobile apps, I offer complete frontend and backend development using modern frameworks.',
      price: 'Typical range: $2,000–$15,000/project (rates flexible)',
      image: fullStackImg,
      spotId: 'fullstack',
      serviceLink: 'development'
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your site’s speed, metadata, accessibility, and visibility on search engines.',
      price: 'Starts at $300/site (negotiable based on complexity)',
      image: seoImg,
      spotId: 'seo',
      serviceLink: 'seo-services'
    },
    {
      title: 'Tutoring & Mentorship',
      description: 'Learn JavaScript, React, WordPress, or game dev principles with personalized support.',
      price: '$50/hr (bundles and student pricing available)',
      image: tutorImg,
      spotId: 'tutor',
      serviceLink: 'mentorship'
    }
  ];

  return (
    <>
      <Head>
        <title>Hire a Freelance Web Developer & SEO Consultant | Timm Schoenborn</title>
        <meta name="description" content="Remote full stack development, SEO consulting, and app strategy from Timm Schoenborn — a seasoned engineer and mentor helping businesses build better tech." />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Build Something Great With Me" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl" />

          <ul className="grid grid-cols-2 gap-16 lg:grid-cols-1 lg:gap-y-12">
            {services.map((service, index) => (
              <FeaturedService key={index} index={index} {...service} />
            ))}
          </ul>
          <motion.section
            id="book-me"
            className="w-full mt-32 p-6 bg-light dark:bg-dark border border-dark dark:border-light rounded-xl shadow-lg scroll-mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Book a Call</h2>
            <p className="mb-6 text-center">Use the tool below to schedule a free discovery call or consultation session.</p>
            <p className="mb-6 text-center">Please add which of my services you are interested in when you add details to the booking.</p>
            <div className="w-full h-[700px]">
              <iframe
                src="https://calendly.com/timmschoenborn/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule Appointment"
                className="bg-light dark:bg-dark rounded-lg"
              ></iframe>
            </div>
          </motion.section>
        </Layout>
      </main>
    </>
  );
}
