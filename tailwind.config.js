/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#141D48',
        secondary: '#005792D9',
      },
      fontSize: {
        h2: '32px',
        h3: '24px',
        base: '16px',
      },
      maxWidth: {
        main: '1536px',
      },
    },
  },
  plugins: [],
};
