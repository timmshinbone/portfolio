import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import profPic2 from "../../public/images/profile/designSketch1.jpg"
import HireMe from '@/components/HireMe'

import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
// import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
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
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profPic2} alt="TimmShoenborn" className='w-full h-auto lg:hidden md:inline-block md:w-full px-2' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </div>      
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
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
                <Link href='/TS2024r35um3.pdf' target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light md:p-2 md:px-4 md:text-base'>
                  Resume 
                  <LinkArrow className={'w-6 ml-1 md:w-4 sm:w-2'}/>
                </Link>
                <Link href='mailto:timmschoenborn@gmail.com' target={"_blank"} className='ml-4 text-lg font-medium capitalize text-dark hover:underline dark:text-light md:text-base'>Contact</Link>
              </div>
            </div>
          </div>  
          <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative col-span-1 p-6 border border-dark dark:border-light rounded-2xl bg-light dark:bg-dark shadow-md">
              <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
              <h2 className="text-3xl font-bold mb-4">What I Can Help You With</h2>
              <ul className="text-base space-y-4">
                <li><strong>Game & App Consultation</strong><br/>Early-stage planning and wireframing</li>
                <li><strong>SEO Optimization</strong><br/>Improve rankings, structure, and speed</li>
                <li><strong>Full Stack Development</strong><br/>Websites, apps, APIs, and scalable architecture</li>
                <li><strong>Mentorship & Tutoring</strong><br/>Learn, grow, and build your dev portfolio</li>
              </ul>
              <Link href="/hire-me" className="mt-6 inline-block bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary dark:hover:bg-primaryDark border-2 border-transparent hover:border-dark dark:hover:border-light transition">
                View All Services
              </Link>
            </div>
          </section>
        </Layout>
        {/* <HireMe/> */}
        {/* <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="Timm Schoenborn" className='w-full h-auto'/>
        </div> */}
      </main>
    </>
  )
}
