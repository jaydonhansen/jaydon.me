module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-background": "url('/public/img/rain.gif')",
      },
      backgroundSize: {
        "main-background": "cover",
      }
    },
  },
  plugins: [],
  darkMode: "class",

};