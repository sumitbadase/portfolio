/** @type {import('tailwindcss').Config} */
export default {
  content: ['**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Inika', 'sans'],
        'secondary': ['Poppins', 'sans'],
      }
    }
  },
  plugins: [require('daisyui')],
  daisyUi: {
    themes: ['emerald']
  }
}
