import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      background: "#0B0B0D",
      surface: "#121212",

      primary: "#F4A000",
      primaryHover: "#D4A94A",

      secondary: "#8C6A3B",
      secondaryHover: "#A67B52",

      silver: "#D9D9D9",
      silverDark: "#9E9E9E",

      textPrimary: "#F5F1E8",
      textSecondary: "#9A948B",
    },
  },
  plugins: [],
};
export default config;
