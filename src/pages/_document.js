import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const colors = ['blue', 'dark', 'blue', 'gold', 'green', 'parchment', 'green', 'viridian', 'gold'];
              const pick = colors[Math.floor(Math.random() * colors.length)];
              const link = document.createElement('link');
              link.rel = 'icon';
              link.type = 'image/svg+xml';
              link.href = '/favicon-' + pick + '.svg';
              document.head.appendChild(link);
            })();
            `
        }} />
      </Head>
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {
            `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia((prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {document.documentElement.classList.remove('dark')}`
          }
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
