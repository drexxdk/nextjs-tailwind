const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primary: {
          '50': 'rgb(var(--color-primary-50) / <alpha-value>)',
          '100': 'rgb(var(--color-primary-100) / <alpha-value>)',
          '200': 'rgb(var(--color-primary-200) / <alpha-value>)',
          '300': 'rgb(var(--color-primary-300) / <alpha-value>)',
          '400': 'rgb(var(--color-primary-400) / <alpha-value>)',
          '500': 'rgb(var(--color-primary-500) / <alpha-value>)',
          '600': 'rgb(var(--color-primary-600) / <alpha-value>)',
          '700': 'rgb(var(--color-primary-700) / <alpha-value>)',
          '800': 'rgb(var(--color-primary-800) / <alpha-value>)',
          '900': 'rgb(var(--color-primary-900) / <alpha-value>)'
        },
        secondary: {
          '50': 'rgb(var(--color-secondary-50) / <alpha-value>)',
          '100': 'rgb(var(--color-secondary-100) / <alpha-value>)',
          '200': 'rgb(var(--color-secondary-200) / <alpha-value>)',
          '300': 'rgb(var(--color-secondary-300) / <alpha-value>)',
          '400': 'rgb(var(--color-secondary-400) / <alpha-value>)',
          '500': 'rgb(var(--color-secondary-500) / <alpha-value>)',
          '600': 'rgb(var(--color-secondary-600) / <alpha-value>)',
          '700': 'rgb(var(--color-secondary-700) / <alpha-value>)',
          '800': 'rgb(var(--color-secondary-800) / <alpha-value>)',
          '900': 'rgb(var(--color-secondary-900) / <alpha-value>)'
        },
      }
    },
   
  },
  plugins: [],
}
