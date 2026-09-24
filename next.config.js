/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevents clickjacking — fixes Lighthouse "Mitigate clickjacking with XFO or CSP"
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Prevents MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // same-origin-allow-popups so Stripe checkout redirect and Calendly popups work
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          // Limits referrer info sent to third parties
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restricts browser features this site doesn't use
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
