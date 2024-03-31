/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#afff85",
      secondary: "#605548",
      accent: "#929f7f",
      accentRed: "#ff8585",
      black: colors.black,
      white: colors.white,
    },
    extend: {},
    animation: {
      "infinite-scroll": "infinite-scroll 25s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
};
