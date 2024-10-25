/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      'black':'#141624',
      'gray-light':'#D3D3D3',
      'white':'#ffffff',
      'skyBlue':'#17C2EC',
      'blue':'#4B6BFB',
      'dark-gray': '#696A75',

    },
    extend: {},
  },
  plugins: [],
  darkMode:"class"
  
}

