/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#222223',
        'dark-button-bg': '#0a0a0a',
        'dark-bg-lite': '#181818',
        'dark-text-lite': '#6a6a6a',
        'dark-bg-hover': '#2a2a2a',
        'dark-dark-bg': '#141414'
      }
    }
  },
  plugins: []
}
