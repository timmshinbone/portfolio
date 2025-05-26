import Head from 'next/head';
import { useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import TipJarForm from '@/components/TipJarForm';
import gameAndAppImg from '@/../public/images/services/gameAndAppConsulting.png';
import fullStackImg from '@/../public/images/services/fullStackDevImage.png';
import seoImg from '@/../public/images/services/SEOoptimizationImg.png';
import tutorImg from '@/../public/images/services/mentorAndTutoringImg.png';
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
    <div onMouseMove={handleMouse} onMouseLeave={handleMouseLeave} className="relative w-full">
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
        sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 30vw"
      />
    </div>
  );
};

const FeaturedService = ({ title, description, price, image, link, index }) => (
  <motion.li
    className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 + index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
    <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
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
    <MovingImg title={title} image={image} />
    <p className="text-sm mb-2 dark:text-light xs:hidden">
      {description}
    </p>
    <span className="text-primary dark:text-primaryDark font-semibold block mb-2">{price}</span>
    <Link
      href={link}
      target="_blank"
      className='bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark border-2 border-transparent hover:border-dark dark:hover:border-light transition'
    >
      Pay Now
    </Link>
  </motion.li>
);

export default function PayMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Game & App Consulting',
      description: 'Plan features, review your tech stack, and avoid pitfalls in early-stage game or app development.',
      price: 'Starts around $150/session (negotiable)',
      image: gameAndAppImg,
      link: 'https://buy.stripe.com/6oUfZh5Upago1PC4K80RG00'
    },
    {
      title: 'Full Stack Development',
      description: 'From websites to mobile apps, I offer complete frontend and backend development using modern frameworks.',
      price: 'Typical range: $2,000–$15,000/project (flexible)',
      image: fullStackImg,
      link: 'https://buy.stripe.com/28EaEXfuZewEam8gsQ0RG01'
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your site’s speed, metadata, accessibility, and visibility on search engines.',
      price: 'Starts at $300/site (negotiable)',
      image: seoImg,
      link: 'https://buy.stripe.com/9B628raaF1JS0Ly6Sg0RG02'
    },
    {
      title: 'Tutoring & Mentorship',
      description: 'Learn JavaScript, React, WordPress, or game dev principles with personalized support.',
      price: '$50/hr (bundles and student pricing available)',
      image: tutorImg,
      link: 'https://buy.stripe.com/5kQ8wPbeJgEMbqc90o0RG03'
    }
  ];

  return (
    <>
      <Head>
        <title>Support or Hire Me | Timm's Portfolio</title>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Support My Work or Hire Me" className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-4xl xs:!text-3xl" />

          <div className="mb-16 w-full">
            <TipJarForm />
          </div>

          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            {services.map((service, index) => (
              <FeaturedService key={index} index={index} {...service} />
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
}
