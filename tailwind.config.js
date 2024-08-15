/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      colors: {
        dark: "#111111",
        primary: "#161616",
        secondary: "#323232",
        white: "#FEFEFE",
        gray: "#BEBEBE",
        accent: "#F59E0B",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
};
