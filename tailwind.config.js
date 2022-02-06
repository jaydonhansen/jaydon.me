module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
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
};