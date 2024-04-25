import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

// initialize font and assign variable+subsets
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont" 
})
// used to initialize pages
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
