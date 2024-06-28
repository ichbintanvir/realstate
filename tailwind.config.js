/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
      'cinzel': ["Cinzel", "sans-serif"],
      'pluse': ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'contactBG': "url('/img/contactBG.png')",
      },
      colors: {
        customBlack: 'rgb(0,0,0,.3)'
      }
    },
  },
  plugins: [],
}

