/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
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
        'home2': "url('/img/projectGallary/pg8.png')",
      },
      colors: {
        customBlack: 'rgb(0,0,0,.3)',
        customBlack2: 'rgb(0,0,0,.5)',
        customBlack3: 'rgb(0,0,0,.6)',
        btnBG: 'rgb(211, 125, 12, 0.2)',
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}

