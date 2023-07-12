/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
    extend: {
      fontFamily: {
        family: ['Roboto', 'sans-serif']
      },
      colors: {
        textColor: "#717171",
        titleColor: "#222222"
      }
    },
  },
  plugins: [],
}

