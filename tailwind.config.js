/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/src/assets/dima.jpg')",
      },
      colors: {
        "main-bg": "#252525",
      },
    },
  },
  plugins: [],
};
