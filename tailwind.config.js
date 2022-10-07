/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.js",
    "./src/components/**/*.js",
    "./src/layouts/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        'dark': '#363636',
        'light': '#F5F5F5',
        'grey': '#ACACAC',
        'grey-10': '#D4D4D4',
      
        'red': '#8F6D6D',
        'red-10': '#E9DFDF',
      },
    },
  },
  plugins: [],
}
