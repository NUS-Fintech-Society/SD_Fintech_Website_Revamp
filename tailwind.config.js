/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lato", "sans-serif"],
      },
      colors: {
        // not properly named
        t_Black: "#000000",
        t_Blue: "#141D48",
        t_Jade: "#DAF3CE",
        t_Orange: "#DAF3CE",
        t_White: "#F6F6F6",
      },
      fontSize: {
        h1: {},
      },
    },
  },
  plugins: [],
};
