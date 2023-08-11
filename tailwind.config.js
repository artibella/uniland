/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/compositions/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
  ],
  safelist: [
    {
      pattern: /(grid)-(cols|rows)-./,
      variants: ['sm', 'md', 'lg', 'hover', 'group-hover'],
    },
    {
      pattern: /bg-./,
      variants: ['sm', 'md', 'lg', 'hover', 'group-hover'],
    },
    {
      pattern: /(text|justify|align|items|object)-./,
      variants: ['sm', 'md', 'lg', 'hover', 'group-hover'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-source-serif-4)', ...fontFamily.serif],
      },
      colors: {
        mango: {
          50: '#FFF9D5',
          100: '#FFF0A1',
          200: '#FFE86C',
          300: '#FFE038',
          400: '#FFD803',
          500: '#EBC703',
          600: '#D8B703',
          700: '#C4A602',
          800: '#B19502',
          900: '#9D8402',
          DEFAULT: '#FFD803',
        },
        ice: {
          50: '#E3F6F5',
          100: '#D8F3F1',
          200: '#CEEFEE',
          300: '#C4ECEB',
          400: '#BAE8E8',
          500: '#A1D7D7',
          600: '#89C6C6',
          700: '#74B5B5',
          800: '#60A4A4',
          900: '#4E9494',
          DEFAULT: '#BAE8E8',
        },
        aqua: {
          50: '#D2EEF1',
          100: '#B6D5DC',
          200: '#9CBBC7',
          300: '#83A0B1',
          400: '#6C869B',
          500: '#51617E',
          600: '#384061',
          700: '#242444',
          800: '#282C47',
          900: '#2D334A',
          DEFAULT: '#6C869B',
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        ice: {
          primary: '#272643',
          secondary: '#2b6688',
          accent: '#bae8e8',
          neutral: '#e3f6f5',
          'base-100': '#FFFFFF',
          info: '#e3f6f5',
          success: '#bae8e8',
          warning: '#fcd34d',
          error: '#f43f5e',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
