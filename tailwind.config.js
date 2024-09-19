/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
      },
      backgroundImage:{
        'img': "url('./background.jpg')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}