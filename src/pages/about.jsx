import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import profilePic2 from '../../public/images/profile/medhairDevAIGen.jpg'
import myHobbies from '../../public/images/profile/myHobbies.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return (
        <span ref={ref}>{value}</span>
    )
}

const About = () => {
  return (
    <>
        <Head>
            <title>Full Stack Developer | About Timm Schoenborn</title>
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
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Dedicated to Design!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
                <div id='biography' className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

                    <p className='my-4 font-medium'>
                        I'm a freelance full stack developer who turns ideas into fast, modern, and scalable web experiences. I work with tools like React, Next.js, PHP, and Tailwind CSS to craft apps and websites that not only perform well, but look great doing it.
                    </p>

                    <p className='my-4 font-medium'>
                        My background in design and teaching gives me a unique approach: I prioritize clean UX, SEO-friendly architecture, and clear communication. Whether you're launching something new or refining what you already have, I’ll help you move fast and build smart.
                    </p>

                    <p className='my-4 font-medium'>
                        From one-page websites to full-featured platforms, I love helping people bring their visions to life. Ready to build something together? 
                    </p>
                    <Link href='/hire-me' className='mt-4 inline-block bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark border-2 border-transparent hover:border-dark dark:hover:border-light transition'>
                        Let’s Chat
                    </Link>
                </div>
                    <div id='about-img' className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={myHobbies} alt='profile photo' className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
                        <div className="flex flex-column justify-center">
                            <p className='text-sm text-center'>A glimpse into my world—this AI-generated scene blends together the things I love most: coding, golf, music, game design, and baking. If you’d like to learn more or chat face-to-face, let’s hop on a video call!</p>
                        </div>
                    </div>
                    <div id='moving-nums' className="col-span-2 flex flex-col items-start justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <div>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={150}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Students Taught</h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <div>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={400}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects consulted</h2>
                            </div>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <div>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={8}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                </div>
            <Skills/>
            <Experience/>
            <Education/>
            </Layout>
        </main>
    </>
  )
}

export default About