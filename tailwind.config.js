/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        VeryDarkGrayishBlue: "#48556A",
        DesaturatedDarkBlue: "#6D7F97",
        GrayishBlue: "#9EAFC2",
        LightGrayishBlue: "#ECF2F8",
      },

      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
