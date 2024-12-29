/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.{tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        montreal: ['PP Neue Montreal', 'sans-serif'],
        mango: ['MangoGrotesqueExtLt', 'sans-serif'],
        uniqe: ['UniqueSemBd', 'sans-serif'],
        dirty: ['Dirtyline', 'sans-serif'],
        nohemi: ['Nohemi', 'sans-serif'],
        nohemiLight: ['NohemiExtLt', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
