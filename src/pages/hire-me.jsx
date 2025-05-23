import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import placeholder from '../../public/images/articles/computer_and_keyboard_1.jpg';
import Link from 'next/link';

const FramerImage = motion(Image);

const MovingImg = ({ title, image }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(evt) {
    imgRef.current.style.display = 'inline-block';
    x.set(evt.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <div
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative w-full"
    >
      <h2 className="capitalize text-2xl font-bold my-2 hover:underline underline-offset-2 mt-4 dark:text-light xs:text-lg">
        {title}
      </h2>
      <FramerImage
        style={{ x, y }}
        ref={imgRef}
        src={image}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </div>
  );
};

const FeaturedService = ({ title, description, price, image, index }) => (
  <motion.li
    className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 + index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
    <Link href="#" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
      <FramerImage
        src={image}
        alt={title}
        className="w-full h-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
    <MovingImg title={title} image={image} />
    <p className="text-sm mb-2 dark:text-light xs:hidden">
      {description}
    </p>
    <span className="text-primary dark:text-primaryDark font-semibold block">{price}</span>
  </motion.li>
);

export default function HireMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Game & App Consulting',
      description: 'Plan features, review your tech stack, and avoid pitfalls in early-stage game or app development.',
      price: 'Starts around $150/session (negotiable based on project needs)',
      image: placeholder
    },
    {
      title: 'Full Stack Development',
      description: 'From websites to mobile apps, I offer complete frontend and backend development using modern frameworks.',
      price: 'Typical range: $2,000–$15,000/project (rates flexible)',
      image: placeholder
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your site’s speed, metadata, accessibility, and visibility on search engines.',
      price: 'Starts at $300/site (negotiable based on complexity)',
      image: placeholder
    },
    {
      title: 'Tutoring & Mentorship',
      description: 'Learn JavaScript, React, WordPress, or game dev principles with personalized support.',
      price: '$50/hr (bundles and student pricing available)',
      image: placeholder
    }
  ];

  return (
    <>
      <Head>
        <title>Hire Me | Timm Schoenborn</title>
        <meta name="description" content="Hire Timm Schoenborn for game dev, web dev, SEO, tutoring, and more." />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Build Something Great With Me" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl" />

          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            {services.map((service, index) => (
              <FeaturedService key={index} index={index} {...service} />
            ))}
          </ul>

          <motion.section
            className="w-full mt-32 p-6 bg-light dark:bg-dark border border-dark dark:border-light rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Book a Call</h2>
            <p className="mb-6 text-center">Use the tool below to schedule a free discovery call or consultation session.</p>
            <div className="w-full h-[700px]">
              <iframe
                src="https://calendly.com/your-username"
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
