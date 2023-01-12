const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blue: "#1872F2",
        "sec-peach": "#FF5B49",
        peach: "#FFC7C1",
        star: "#F3B63F",
        "grey-2": "#353535",
        btnBg: "rgba(255, 91, 73, 0.1)",
        "grey-3": "#7D7D7D",
        "grey-6": "#F4F4F4",
        "peach-2": "#FFECEA",
        grey: "#616974",
        modalBg: "rgba(0, 0, 0, 0.4)",
        "overlay-modal": "rgba(0,0,0,0.2)",
      },
      fontSize: {
        h2: "2rem",
        "t-18": "1.125rem",
        "t-16": "1rem",
        "t-40": "2.5rem",
        "t-24": "1.5rem",
        "t-20": "1.25rem",
        "t-14": "0.875rem",
        "t-12": "0.75rem",
        "t-36": "2.25rem",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        "semi-mid": 500,
        medium: 600,
        bold: 700,
        "extra-bold": 800,
      },
      borderRadius: {
        "r-8": "8px",
        "r-12": "12px",
        "r-6": "6px",
      },
      boxShadow: {
        match: "0px 16px 42px rgba(0, 0, 0, 0.07)",
        opening: "0px 1px 4px rgba(17, 17, 17, 0.12)",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
}
