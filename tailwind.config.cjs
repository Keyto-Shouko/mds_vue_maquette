/** @type {import('tailwindcss').Config} */
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
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'anek': 'Anek Bangla, Arial, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}