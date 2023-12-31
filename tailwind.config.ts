import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jost)']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#1D1D1D',
        white: '#FFFFFF',
        violet: '#B4B7FF',
        green: '#97EAB9',
        orange: '#FFD280',
        red: { DEFAULT: '#FF868E', light: '#FBE0DC' },
        grey: { DEFAULT: '#8C8C8C', light: '#F8F8F7' }
      }
    }
  },
  plugins: []
};
export default config;
