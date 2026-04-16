import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F0',
        sage: {
          light: '#C8DBBD',
          DEFAULT: '#7A9B6E',
          dark: '#4A6741',
          deep: '#2C3E2D',
        },
        gold: {
          light: '#E8D5A3',
          DEFAULT: '#C4A44A',
          dark: '#9A7A1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        script: ['var(--font-great-vibes)', 'cursive'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
