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
        primaryLight: "#FF002E",
        primary: "#E3183C",
        primaryDark: "#B71634",
        primaryDarker: "#8F0F2A",
        title: "#FFFFFF",
        body: "#A1A1A9",
        backgroundLight: "#1E1E22",
        backgroundLighter: "#2E2E33",
      },
    },
  },
  plugins: [],
};
