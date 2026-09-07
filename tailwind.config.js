/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
         'dark-bg': '#121212',
         'dark-secondary': '#262626',
         'dark-border': '#363636',
         'dark-text': '#f5f5f5',
         'dark-text-secondary': '#a8a8a8',
       },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out both',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
};
