import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

// STRIPE IMPORTS
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

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
        <link rel="icon" href="/favicon-blue.svg" />
        {/* Global Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Timm Schoenborn",
              "url": "https://www.timmschoenborn.com",
              "jobTitle": "Freelance Web Developer & SEO Consultant",
              "worksFor": {
                "@type": "Organization",
                "name": "TRStudios LLC"
              },
              "sameAs": [
                "https://linkedin.com/in/timm-schoenborn",
                "https://github.com/timmshinbone"
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Gainesville",
                  "addressRegion": "FL",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Chicago",
                  "addressRegion": "IL",
                  "addressCountry": "US"
                }
              ]
            })
          }}
        />
          
      </Head>
      <NavBar />
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <AnimatePresence mode="wait">
          <Elements stripe={stripePromise}>
            <Component key={router.asPath} {...pageProps} />
          </Elements>
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}

// // // 3. _app.js - wrap app with Stripe Elements
// // import '@/styles/globals.css'
// // import { Elements } from '@stripe/react-stripe-js';
// // import { loadStripe } from '@stripe/stripe-js';

// // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// // export default function App({ Component, pageProps }) {
// //   return (
// //     <Elements stripe={stripePromise}>
// //       <Component {...pageProps} />
// //     </Elements>
// //   );
// // }