/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#8B5CF6',
        'primary-light': '#C4B5FD',
        'primary-dark': '#6D28D9',
        'accent': '#3B82F6',
        'accent-light': '#93C5FD',
      }
    },
  },
  plugins: [],
};