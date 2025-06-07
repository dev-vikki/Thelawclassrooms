/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1a2234',
          900: '#0f172a',
        },
        gold: {
          400: '#ffd700',
          500: '#ffb700',
          600: '#cc9200',
        },
        burgundy: {
          600: '#800020',
          700: '#660019',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        'spin-border': 'spinBorder 1s linear infinite',
        'spin-border-slow': 'spinBorder 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spinBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
