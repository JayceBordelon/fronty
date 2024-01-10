/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background': '#0F0F0F',
        'secondary-background': '#6101ee',
        'code-editor': '#2E3129',
        'primary-text': '#cccccc',
        'custom-green': '#00818A',
      }
    },
  },
  plugins: [],
}

