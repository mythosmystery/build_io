const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: colors.violet[600],
        secondary: colors.sky[600],
        'primary-light': colors.violet[400],
        'secondary-light': colors.sky[400],
        'primary-dark': colors.violet[900],
        'secondary-dark': colors.sky[900],
      }
    },
  },
  plugins: [],
}
