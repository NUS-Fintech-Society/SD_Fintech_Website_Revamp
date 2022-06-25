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
        primary: "#141D48",
        secondary: "#005792",
        t_Jade: "#DAF3CE",
        t_Orange: "#F9A728",
        t_White: "#F6F6F6",
      },
      fontSize: {
        h1: "64px",
        h2: "48px",
        h3: "36px",
        h4: "24px",
        body: "18px",
      },
      maxWidth: {
        main: "1360px",
      },
    },
  },
  plugins: [],
};
