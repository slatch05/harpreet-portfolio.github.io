/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        montreal: ['"PP Neue Montreal"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
