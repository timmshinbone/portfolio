import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import profilePic2 from '../../public/images/profile/medhairDevAIGen.jpg'
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
            <title>Timm Schoenborn | About Page</title>
            <meta name='description' content='Timm Schoenborn about me'/>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Dedicated to Design!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
                    <div id='biography' className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='my-4 font-medium'>
                            Hi, I'm Timm Schoenborn, a technical leader with a passion for building innovative web applications. Proven ability to manage projects from concept to launch, with strong software development and architectural design skills. Adept at leading development teams and ensuring projects meet deadlines and client expectations.
                        </p>
                        <p className=' my-4 font-medium'>
                            I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users, and communicating effectively.
                        </p>
                        <p className=' my-4 font-medium'>
                            Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and dedication to your next project.
                        </p>
                    </div>
                    <div id='about-img' className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={profilePic2} alt='profile photo' className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
                        <div className="flex flex-column justify-center">
                            <p className='text-sm text-center'>I prompted AI to generate an image that kinda looks like me, feel free to reach out to see the real me on a video call!</p>
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