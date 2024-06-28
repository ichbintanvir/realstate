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
      'bangla': ["Noto Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'heroBG': "url('/img/bg1.png')",
        'contactBG': "url('/img/contactBG.png')",
      },
      colors: {
        customBlack: 'rgb(0,0,0,.3)',
        customBlack2: 'rgb(0,0,0,.5)',
      }
    },
  },
  plugins: [],
}

