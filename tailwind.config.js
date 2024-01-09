/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#283149',
        'secondary-background': '#404B69',
        'primary-text': '#DBEDF3',
        'custom-green': '#00818A',
      }
    },
  },
  plugins: [],
}

