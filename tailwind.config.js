/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/mjsx.js",
    "./src/pages/**/*.js",
    "./src/components/**/*.js",
    "./src/layouts/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
        'dm-mono': ['DM Mono, sans-serif']
      },
      colors: {
        'dark': '#363636',
        'light': '#F5F5F5',
        'grey': '#ACACAC',
        'grey-10': '#D4D4D4',
        'grey-20': '#E8E8E8',

        'red': '#8F6D6D',
        'red-10':  '#E9DFDF',
        'red-20': '#E0C7C7',
        'red-30': '#D0ADAD',
      },
    },
  },
  plugins: [],
}
