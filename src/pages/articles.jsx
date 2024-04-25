import React, {useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import art1Img from '../../public/images/articles/cartoon_computer_programming_javascript_guy.jpeg'
import art2Img from '../../public/images/articles/simple_cartoon_arrow_2.jpeg'
import {motion, useMotionValue} from 'framer-motion'
import art3Img from '../../public/images/articles/computer_and_keyboard_1.jpg'
import art4Img from '../../public/images/articles/buildings_cartoon.jpeg'
import art5Img from '../../public/images/articles/Default_a_computer_and_a_notepad_3.jpg'
import art6Img from '../../public/images/articles/mongooseArticleImage.jpeg'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({title, image, link}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse (evt) {
        imgRef.current.style.display = 'inline-block'
        x.set(evt.pageX)
        y.set(-10)
    }

    function handleMouseLeave (evt) {
        imgRef.current.style.display = 'none'
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline underline-offset-2'>{title}</h2>
            <FramerImage style={{x:x, y:y}} ref={imgRef} src={image} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' initial={{opacity:0}} whileInView={{opacity:1, transition:{duration: 0.2}}} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
        </Link>
    )
}

const FeaturedArticle = ({image, title, time, summary, link}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl '>
            <div id='shadow' className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'/>
            <Link href={link} target={'_blank'} className='w-full inline-block cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={image} alt={title} className='w-full h-auto' whileHover={{scale: 1.05}} transition={{duration: 0.2}} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </Link>
            <Link href={link} target={'_blank'}>
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline underline-offset-2 mt-4 dark:text-light xs:text-lg '>{title}</h2>
            </Link>
            <p className='text-sm mb-2 dark:text-light xs:hidden'>
                {summary}
            </p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const Article = ({image, title, date, link}) => {
    return (
        <motion.li 
            initial={{y:200}}
            whileInView={{y:0, transition:{duration: 0.5, ease: 'easeInOut'}}}
            viewport={{once: true}}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light/75 first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col'>
            <MovingImg title={title} image={image} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>

        </motion.li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>Timm Schoenborn | Articles Page</title>
            <meta name='description' content='Some kinda description'/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden '>
            <Layout className='pt-16'>
                <AnimatedText text='A Passion for Teaching!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
                    <FeaturedArticle
                        title='Understanding the Core of JavaScript'
                        summary="Learn the basics of the world's most popular web development language."
                        time='5 min read'
                        image={art1Img}
                        link='https://medium.com/@timmschoenborn/understanding-the-core-of-javascript-e5c64a39730c'
                    />
                    <FeaturedArticle
                        title='Simplifying JavaScript: The Power and Elegance of Arrow Functions'
                        summary='The Arrow Function has become a staple for developers aiming to write cleaner, more concise code. Whether you’re a seasoned developer or taking your first steps into the realm of programming, understanding arrow functions is akin to discovering a hidden shortcut in your favorite video game.'
                        image={art2Img}
                        link='https://medium.com/@timmschoenborn/simplifying-javascript-the-power-and-elegance-of-arrow-functions-f18e9634ec85'
                    />
                    <FeaturedArticle
                        title='From Foundations to Pixels: Architecting Web Development Principles'
                        summary="Let’s embark on a journey to uncover how the timeless wisdom of architectural design shapes the virtual spaces we inhabit."
                        time='5 min read'
                        image={art4Img}
                        link='https://medium.com/@timmschoenborn/from-foundations-to-pixels-architecting-web-development-principles-780258fdb56f'
                    />
                    <FeaturedArticle
                        title='Crafting Your Digital Backbone: A Starter’s Guide to Planning a SQL Database for Your Small Web API'
                        summary='Navigating the realms of digital architecture can sometimes feel like trying to decode an ancient manuscript. However, at the heart of many web applications and services lies a surprisingly understandable and manageable component: the SQL database.'
                        image={art5Img}
                        link='https://medium.com/@timmschoenborn/crafting-your-digital-backbone-a-starters-guide-to-planning-a-sql-database-for-your-small-web-api-b3a7c74e1519'
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
                <ul>
                    <Article
                        title='An Intro to Variables and Data Types in JavaScript'
                        image={art3Img}
                        link='https://medium.com/@timmschoenborn/an-intro-to-variables-and-data-types-in-javascript-08e797f51f5e'
                        date='April 23, 2024'
                    />
                    <Article
                        title="Taming Your Data with Mongoose: A Beginner's Guide to API Development"
                        image={art6Img}
                        link='https://medium.com/@timmschoenborn/taming-your-data-with-mongoose-a-beginners-guide-to-api-development-80752b67c154'
                        date='April 24, 2023'
                    />
                    {/* <Article
                        title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                        image={art3Img}
                        link='/'
                        date='March 22, 2023'
                    /> */}
                    {/* <Article
                        title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                        image={art5Img}
                        link='/'
                        date='March 22, 2023'
                    /> */}
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles