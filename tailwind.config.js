/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-button-bg': '#0a0a0a'
      }
    }
  },
  plugins: []
}
