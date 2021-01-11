const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '-60': '-60deg',
      '-45': '-45deg',
      '30': '30deg',
      '45': '45deg',
    },
    extend: {
      spacing: {
        '-112': '-28rem',
        '-110': '-27.5rem',
        '-100': '-25rem',
        '-26': '-6.5rem',
        '26': '6.5rem',
        '100': '25rem',
        '110': '27.5rem',
        '112': '28rem',
        '120': '30rem',
        '124': '31rem',
        '160': '40rem',
        '200': '50rem',
        '240': '60rem',
        '280': '70rem',
      },
      letterSpacing: {
        'name': '0.25em',
        'tagline': '0.45em',
      },
      colors: {
        gray: colors.trueGray,
      }
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
}
