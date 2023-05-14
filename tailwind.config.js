/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080810",
        primaryLight: "#FF4D6D",
        primary: "#E3183C",
        primaryDark: "#B71634",
        primaryDarker: "#8F0F2A",
        title: "#FFFFFF",
        body: "#A1A1A9",
      },
    },
  },
  plugins: [],
};
