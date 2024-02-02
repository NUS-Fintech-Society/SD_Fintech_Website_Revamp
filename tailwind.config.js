const tailwindMdBase = require('@geoffcodesthings/tailwind-md-base');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
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
  plugins: ['prettier-plugin-tailwindcss', tailwindMdBase()],
};
