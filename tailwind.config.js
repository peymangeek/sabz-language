/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/index.html", "./scripts/*.js", "./skills/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "Poppins-Light": "Poppins-Light",
        "Poppins-Regular": "Poppins-Regular",
        "Poppins-Medium": "Poppins-Medium",
        "Poppins-SemiBold": "Poppins-SemiBold",
        "Poppins-Bold": "Poppins-Bold",
        "Poppins-Black": "Poppins-Black",

      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
