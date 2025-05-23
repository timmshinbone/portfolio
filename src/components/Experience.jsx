import React, {useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type: 'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg '>
                    {position}&nbsp;
                    <a href={companyLink} target={'_blank'} className='text-primary dark:text-primaryDark capitalize'>
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ['start end', 'center start']
    })
  return (
    <div className='my-64'>
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' style={{scaleY: scrollYProgress}}/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                    position='Manager - Software Engineering'
                    companyLink='https://asmbs.org/'
                    company='ASMBS'
                    time='March - May 2025'
                    address='Newberry, FL'
                    work='At ASMBS, I led full stack web development initiatives across both their Association Management System (AMS) and Content Management System (CMS). I built and maintained high-performance tools using WordPress, Symfony, PHP, and MariaDB—improving usability, performance, and data management for staff and members alike.'
                />
                <Details 
                    position='Lead Instructor - Software Engineer' 
                    companyLink='https://generalassemb.ly/'
                    company='General Assembly'
                    time='2022-2024' 
                    address='Remote, US'
                    work="Worked across multiple teams and consulted on hundreds of projects. Trained over 150 students to be efficient junior developers. Developed systems of teaching and boilerplates for projects that improved student understanding, success, and graduation rates by ~50%"
                />
                <Details 
                    position='Instructional Associate - Software Engineer' 
                    companyLink='https://generalassemb.ly/'
                    company='General Assembly'
                    time='2020-2021' 
                    address='Chicago, IL / Remote, US'
                    work="Pioneered emergency remote protocols at the start of the Covid-19 pandemic, and regularly improved remote processes throughout my tenure. Assisted and taught lectures, worked with students from many varied backgrounds, levels of experience and education. Improved workflow of projects by training dozens of junior level engineers."
                />
                <Details 
                    position='Branded Environments Designer' 
                    companyLink='https://perkinswill.com/'
                    company='Perkins&Will'
                    time='2016-2019' 
                    address='Chicago, IL'
                    work="Worked with a team of world class design professionals, engineers, architects, and developers to complete brand projects of various scopes. Designed, planned, and implemented complex signage solutions for a multitude of projects around the world."
                />
                <Details 
                    position='Project Manager' 
                    companyLink='https://www.fastsigns.com/e-ohio-chicago-il/'
                    company='FastSigns'
                    time='2014-2016' 
                    address='Chicago, IL'
                    work="Led cross-functional teams to deliver projects on time, within budget, and meeting all client requirements. Managed project scope, schedule, and resources, ensuring effective communication and client satisfaction."
                />
                <Details 
                    position='Production Manager' 
                    companyLink='https://quartetdigitalprinting.com/'
                    company='Quartet Digital Printing'
                    time='2012-2015' 
                    address='Evanston/Chicago, IL'
                    work="Optimized production processes to achieve increased output and reduced costs. Managed staff, inventory, and equipment to ensure efficient operations and meet quality standards. Worked closely with representatives of Fortune 500 companies as well as top universities to improve performance and client satisfaction."
                />
            </ul>
        </div>   
    </div>
  )
}

export default Experience