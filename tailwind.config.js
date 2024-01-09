/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#0F0F0F',
        'secondary-background': '#404B69',
        'primary-text': '#cccccc',
        'custom-green': '#00818A',
      }
    },
  },
  plugins: [],
}

