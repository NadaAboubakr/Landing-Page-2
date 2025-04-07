/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          light: '#1e1b4b',
          medium: '#0f172a',
          dark: '#020617',
        },
      }
    },
  },
  plugins: [],
};
