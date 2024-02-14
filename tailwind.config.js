/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        customBlack: "#18181B",
        customGray: "#52525A",
        customYellow: "#F5C044",
        customOffWhite: "#FAFAF9",
      },
    },
  },
  plugins: [],
};
