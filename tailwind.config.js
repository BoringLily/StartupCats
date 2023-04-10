/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:
      {
        'purple-bg':'#A168FF',
        'red-bg': '#FF2B2B'
      }
    },
    fontFamily: {
      'nunito': 'Nunito',
      'cursive': 'Damion'
    }
  },
  plugins: [],
}

