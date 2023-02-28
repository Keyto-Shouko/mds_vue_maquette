/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'greenMDS': '#29B7C5',
      'white': '#FFFFFF',
      'sussyWhite':'#e6e6e6',
      'cardBG': 'rgb(203 213 225)',
      'darkblueMDS': '#181B3F',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'anek': 'Anek Bangla, Arial, sans-serif',
    },
    extend: {
      spacing: {
        '33percent': '33%',
      }
    },
  },
  plugins: [],
}