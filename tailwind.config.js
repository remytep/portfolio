/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        FogtwoNo5: ['"FogtwoNo5"', ...defaultTheme.fontFamily.serif],
        SeawaveAlt: ['"NTSeawaveAlt"', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "10xl": [
          "10rem",
          {
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
      },
      aspectRatio: {
        portrait: "9 / 16",
      },
      lineHeight: {
        screen: "100vh",
      },
      maxHeight: {
        "1/2": "50%",
        "5/6": "83.333333%",
        half: "50vw",
        auto: "auto",
      },
      maxWidth: {
        auto: "auto",
      },
      width: {
        third: "33vw",
        half: "50vw",
      },
      height: {
        18: "4.5rem",
        third: "33vw",
        half: "50vw",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
    },
  },
  plugins: [],
};
