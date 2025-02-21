/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "mobile": "425px"
      }
    },
  },
  plugins: [],
}

