import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { LinkedInIcon, GithubIcon, SunIcon, MoonIcon} from "./Icons";
import { motion } from 'framer-motion'
import useThemeSwitcher from "./hooks/useThemeSwitcher";


const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter();

    const handleClick = () => {
        toggle()
        router.push(href)
    }
    
    return (
        <button onClick={handleClick} href={href} className={`${className} relative group text-light dark:text-dark my-2 `}>
            {title}
            <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} `}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='bg-light w-full px-32 py-8 font-medium flex items-center justify-between dark:bg-dark dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
            <button id='custom-burger' className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick} >
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink title='Home' href='/' className='m-4'/>
                    <CustomLink title='About' href='/about' className='mx-4'/>
                    <CustomLink title='Projects' className='mx-4' href='/projects'/>
                    <CustomLink title='Hire Me' className='ml-4' href='/hire-me'/>
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href='https://www.linkedin.com/in/timm-schoenborn/' target={'_blank'}
                    whileHover={{y:-2, scale:1.3}}
                    whileTap={{scale:0.9}}
                    className='w-8 mx-3'
                    >
                        <LinkedInIcon />
                    </motion.a>
                    
                    
                    <motion.a href='https://github.com/timmshinbone' target={'_blank'}
                    whileHover={{y:-2, scale:1.3}}
                    whileTap={{scale:0.9}}
                    className='w-8 mx-3'
                    >
                        <GithubIcon />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                    >
                        {
                            mode === 'dark' ?
                                <SunIcon className={'fill-dark'}/>
                            :
                                <MoonIcon className={'fill-dark'} />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                <motion.div 
                initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                animate={{scale:1, opacity:1}}
                transition={{duration: .25}}
                className="min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                    <nav className="flex items-center flex-col justify-center">
                        <CustomMobileLink title='Home' href='/' className='' toggle={handleClick}/>
                        <CustomMobileLink title='About' href='/about' className='' toggle={handleClick}/>
                        <CustomMobileLink title='Projects' className='' href='/projects' toggle={handleClick}/>
                        <CustomMobileLink title='Hire Me' className='' href='/hire-me' toggle={handleClick}/>
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-2'>
                        <motion.a href='https://www.linkedin.com/in/timm-schoenborn/' target={'_blank'}
                        whileHover={{y:-2, scale:1.3}}
                        whileTap={{scale:0.9}}
                        className='w-8 mx-3 sm:mx-1'
                        >
                            <LinkedInIcon />
                        </motion.a>
                        
                        
                        <motion.a href='https://github.com/timmshinbone' target={'_blank'}
                        whileHover={{y:-2, scale:1.3}}
                        whileTap={{scale:0.9}}
                        className='w-8 mx-3 sm:mx-1 bg-light dark:bg-dark rounded-full'
                        >
                            <GithubIcon />
                        </motion.a>

                        <button
                            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark sm:mx-1'}`}
                        >
                            {
                                mode === 'dark' ?
                                    <SunIcon className={'fill-dark md:w-6 sm:w-4'}/>
                                :
                                    <MoonIcon className={'fill-dark md:w-6 sm:w-4'} />
                            }
                        </button>
                    </nav>
                </motion.div>
                : null
            }

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default NavBar