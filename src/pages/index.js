import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import profPic2 from "../../public/images/profile/mainImage.png"
import hireMeImg from "../../public/images/profile/hireMeImage.png"
import { motion, useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import { useSmoothScroll } from '@/components/hooks/useSmoothScroll'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({ title, image }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(evt) {
    imgRef.current.style.display = 'inline-block'
    x.set(evt.pageX)
    y.set(-10)
  }

  function handleMouseLeave() {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }

  return (
    <div onMouseMove={handleMouse} onMouseLeave={handleMouseLeave} className="relative w-full">
      <h2 className="capitalize text-2xl font-bold my-2 hover:underline underline-offset-2 mt-4 dark:text-light xs:text-lg">
        Turning Vision Into Reality With Code And Design.
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
  )
}

export default function Home() {
  const { smoothScroll } = useSmoothScroll();
  return (
    <>
      <Head>
        <title>Full Stack Developer | Hire Timm Schoenborn</title>
        <meta name="description" content="Timm Schoenborn is a full stack developer offering web, app, and SEO services. Book a consultation today." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Timm Schoenborn",
              url: "https://timmschoenborn.com",
              jobTitle: "Freelance Web Developer",
              sameAs: [
                "https://www.linkedin.com/in/timm-schoenborn/",
                "https://github.com/timmshinbone"
              ]
            })
          }}
        />

      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <article className='w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

            <Link href="#" className='w-1/2 cursor-pointer overflow-hidden rounded-2xl lg:w-full'>
              <FramerImage
                src={profPic2}
                alt="Image of blueprint drawing computer"
                className='w-full h-auto rounded-2xl px-2'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw'
              />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-center pl-6 lg:w-full lg:pl-0 lg:pt-6'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                I’m a freelance full stack developer and SEO consultant helping small businesses and startups build better websites, apps, and search visibility. Let's create something great together.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/hire-me" className='bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark border-2 border-transparent hover:border-dark dark:hover:border-light transition'>
                  Let&apos;s Work Together
                </Link>
              </div>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='/TS2025r35um3.pdf' target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent dark:bg-light dark:text-dark hover:bg-primary dark:hover:bg-primaryDark hover:border-dark dark:hover:border-light transition md:p-2 md:px-4 md:text-base'>
                  Resume
                  <LinkArrow className={'w-5 h-5 ml-2 md:w-4 md:h-4 sm:w-3 sm:h-3'} />
                </Link>
                <div onClick={() => smoothScroll('/hire-me', 'book-me')} className='bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark border-2 border-transparent hover:border-dark dark:hover:border-light transition m-3'>Contact</div>
              </div>
            </div>
          </article> 
          <article className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl mt-12 p-12 rounded-br-2xl dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

            <div className="w-1/2 md:w-full mt-6 lg:mt-0 lg:mb-6 lg:w-full lg:flex lg:justify-center order-2 lg:order-1">
              <FramerImage
                src={hireMeImg}
                alt="Hire Me image"
                className="w-full h-auto rounded-2xl px-2 max-w-[500px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-start justify-center pr-6 lg:w-full lg:pr-0 lg:items-center lg:text-center order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-4">What I Can Help You With</h2>
              <ul className="text-base space-y-4">
                <li><strong className="hover:underline" onClick={() => smoothScroll('/hire-me', 'consult')}>Game & App Consultation</strong><br/>Early-stage planning and wireframing</li>
                <li><strong className="hover:underline" onClick={() => smoothScroll('/hire-me', 'seo')}>SEO Optimization</strong><br/>Improve rankings, structure, and speed</li>
                <li><strong className="hover:underline" onClick={() => smoothScroll('/hire-me', 'fullstack')}>Full Stack Development</strong><br/>Websites, apps, APIs, and scalable architecture</li>
                <li><strong className="hover:underline" onClick={() => smoothScroll('/hire-me', 'tutor')}>Mentorship & Tutoring</strong><br/>Learn, grow, and build your dev portfolio</li>
              </ul>
              <Link href="/hire-me" className="mt-6 inline-block bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark border-2 border-transparent hover:border-dark dark:hover:border-light transition">
                View All Services
              </Link>
            </div>
          </article>
        </Layout>
      </main>
    </>
  )
}
