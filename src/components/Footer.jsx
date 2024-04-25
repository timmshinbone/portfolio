import React from "react"
import Link from "next/link"
import Layout from "./Layout"

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base '>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center lg:py-2'>
                    Built with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp;
                    <Link href='/' className='hover:underline hover:underline-offset-2' target={'_blank'}>Timm Schoenborn</Link>
                </div>
                <Link href='/' className='hover:underline hover:underline-offset-2' target={'_blank'}>Say Hello</Link>
                <Link href='https://www.timmschoenborn.com/' className='hover:underline hover:underline-offset-2' target={'_blank'}>Click to view my old portfolio</Link>
            </Layout>
        </footer>
    )
}

export default Footer