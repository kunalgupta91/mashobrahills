import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1a4731',
          dark: '#0f2d1f',
          light: '#2d6a4f',
          50: '#f0f7f3',
        },
        gold: {
          DEFAULT: '#b7802a',
          light: '#d4a853',
          dark: '#8a6020',
        },
        cream: '#faf9f6',
        earth: '#e8e0d4',
        charcoal: '#1c1c1c',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
