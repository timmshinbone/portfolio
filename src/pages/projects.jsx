import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
// import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import reactLogo from '../../public/images/projects/react js_logo.png'
import expressMonLogo from '../../public/images/projects/node_mongoose_express_logo.jpeg'
import djangoLogo from '../../public/images/projects/django-logo-negative.png'
import shopLogo from '../../public/images/projects/shopify.png'
import libApi from '../../public/images/projects/Simple_library_0.jpeg'
import coldHarshSea from '../../public/images/projects/coldHarshSea.png'
import avoGatoCollector from '../../public/images/projects/avogatocollector.png'
import monsterPets from '../../public/images/projects/monPetsSS.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, image, link, ghLink}) => {
    return (
        <article className='w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target={'_blank'} className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
                <FramerImage src={image} alt={title} className='w-full h-auto' whileHover={{scale: 1.05}} transition={{duration: 0.2}} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light/75 sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center '>
                    <Link href={ghLink} target={'_blank'} className='w-10'>{" "}<GithubIcon/></Link>
                    <Link href={link} target={'_blank'} className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark hover:border border-solid border-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light sm:px-4 sm:text-base'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, image, link, ghLink}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:text-light dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target={'_blank'} className='w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={image} alt={title} className='w-full h-auto' whileHover={{scale: 1.05}} transition={{duration: 0.2}} priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target={'_blank'} className='rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark hover:border border-solid border-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:text-base'>Visit</Link>
                    <Link href={ghLink} target={'_blank'} className='w-8 md:w-6'><GithubIcon/></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Timm Schoenborn | Projects Page</title>
            <meta name='projects' content='Some kinda description'/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text='Analysis Drives Design' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:text-4xl'/>

                <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    <div className='col-span-12'>
                        <FeaturedProject
                            title='Cold Harsh Sea'
                            summary='A little game project I built in a week for proof of concept.'
                            link='https://timmshinbone.github.io/cold_harsh_sea/'
                            type='game — proof of concept'
                            image={coldHarshSea}
                            ghLink='https://github.com/timmshinbone/cold_harsh_sea'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                            title='AvoGatoCollector'
                            summary='A teaching application used to cover the basics of building a full stack Django application.'
                            link='https://avogatocollector.onrender.com/cats/2'
                            type='django collection tracker'
                            image={avoGatoCollector}
                            ghLink='https://github.com/timmshinbone/avocado_catcollector/tree/main'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='Pets App - (Teaching)'
                            summary='A teaching application I developed and used to cover the basics of building a MERN Stack application.'
                            link='https://monster-pets.netlify.app/'
                            type='Lesson - MERN Stack application'
                            image={monsterPets}
                            ghLink='https://github.com/sei-ec-remote/monster-pets-client'
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title='Library API'
                            summary='Used to teach API consumption with React, JQuery, and Vanilla Javascript. API has seed scripts, curl scripts, and endpoint tables, all described in the documentation. Built using mongoose, and used heavily to teach students about consuming an API.'
                            link='https://github.com/sei-ec-remote/library-api'
                            type='API — Designed and used to teach'
                            image={libApi}
                            ghLink='https://github.com/sei-ec-remote/library-api'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='React Auth Boilerplate'
                            summary='A feature-rich React boilerplate with bootstrap built in, used in conjunction with either of my mongoose or django API boilerplates, this is a very quick solution for a student to build a full stack application very quickly, allowing more time to focus on enhancing the user experience. Documentation includes explanations for consuming API boilerplates and usage of custom built components.'
                            link='https://github.com/timmshinbone/react-auth-boilerplate'
                            type='react boilerplate - built for students'
                            image={reactLogo}
                            ghLink='https://github.com/timmshinbone/react-auth-boilerplate'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='Express Mongoose LiquidJs Boilerplate'
                            summary="Boilerplate I built, with students and first timers in mind, Express/Mongoose Full Stack application that utilizes shopify's LiquidJs Templating language. Enables students to hit an MVP for a basic full-stack app with robust error handling in about a day, allowing them to expand and use new ideas without worrying about the basics."
                            link='https://github.com/timmshinbone/mongoose-liquid-express-boilerplate'
                            type='Express Mongoose LiquidJs Boilerplate - built for students'
                            image={shopLogo}
                            ghLink='https://github.com/timmshinbone/mongoose-liquid-express-boilerplate'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='Express Mongoose Auth API boilerplate'
                            summary='Boilerplate I built, with students and first timers in mind, for an express/mongoose API server with Full CRUD Auth & Example resource routes. Github repo includes installation instructions and an in-depth explanation of custom built middlewares. Enables students to hit an MVP for a basic API with robust error handling in about a day, allowing them to expand and use new ideas without worrying about the basics.'
                            link='https://github.com/timmshinbone/express-mongoose-auth-api-boilerplate'
                            type='Express Mongoose Boilerplate - built for students'
                            image={expressMonLogo}
                            ghLink='https://github.com/timmshinbone/express-mongoose-auth-api-boilerplate'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='Django REST Framework API boilerplate'
                            summary="Boilerplate that I built for my students that utilizes Django's REST Framework library. Includes complete Auth and Example resources. Documentation includes setup and installation instructions as well as details about any custom built pieces and how to allow consumption by my React boilerplate."
                            link='https://github.com/timmshinbone/django-auth-api-boilerplate'
                            type='Django REST Framework API Boilerplate - built for students'
                            image={djangoLogo}
                            ghLink='https://github.com/timmshinbone/django-auth-api-boilerplate'
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects