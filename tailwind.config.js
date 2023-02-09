/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': "#34333A",
      'white': "#FFFFFF",
      'grey': "#9e9e9e",
      'backgroundgrey': "#FAF9FE",
      'lightgrey': "#C1C1C4",
      'orange': "#F9A109"
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif']
    },
    extend: {}
  },
  plugins: [],
}