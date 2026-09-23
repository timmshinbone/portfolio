/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mont: ['var(--font-mont)', ...fontFamily.sans], // legacy alias
      },
      colors: {
        // Broadsheet semantic tokens
        paper:   '#f3f2f2',
        surface: '#eae9e9',
        ink:     '#201e1d',
        // Legacy aliases so existing bg-light / text-dark / text-primary classes keep working
        light:       '#f3f2f2',  // = paper
        dark:        '#201e1d',  // = ink
        primary:     '#006786',  // = accent-700
        primaryDark: '#62c5ee',  // = accent-400
        // Accent (cyan) 100–900
        accent: {
          100: '#e9f8ff',
          200: '#cbeeff',
          300: '#99e0ff',
          400: '#62c5ee',
          500: '#38a6cf',
          600: '#1186ac',
          700: '#006786',
          800: '#004961',
          900: '#0a303e',
        },
        // Accent-2 (magenta) 100–900
        accent2: {
          100: '#fff1f4',
          200: '#ffdee6',
          300: '#ffc0d0',
          400: '#ff90b1',
          500: '#ff458e',
          600: '#d82071',
          700: '#aa0b56',
          800: '#790e3d',
          900: '#4b1528',
        },
        // Neutral 100–900
        neutral: {
          100: '#f8f4f4',
          200: '#eae7e7',
          300: '#d7d3d3',
          400: '#bab6b6',
          500: '#9b9797',
          600: '#7d7979',
          700: '#605d5d',
          800: '#444141',
          900: '#2d2b2b',
        },
        'process-yellow': '#edbb00',
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '1px',
        md: '2px',
        lg: '4px',
      },
      boxShadow: {
        sm:  '0 1px 2px rgb(45 43 43 / .14)',
        md:  '0 3px 10px rgb(45 43 43 / .16)',
        lg:  '0 12px 32px rgb(45 43 43 / .22)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl:   { max: "1279px" },
      lg:   { max: "1023px" },
      md:   { max: "767px"  },
      sm:   { max: "639px"  },
      xs:   { max: "479px"  },
    },
  },
  plugins: [],
}
