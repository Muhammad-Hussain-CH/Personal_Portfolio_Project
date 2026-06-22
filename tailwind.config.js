/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
  bg:      "#120A08",
  surface: "#1E1008",
  orange:  "#F97316",
  red:     "#EF4444",
  amber:   "#FBBF24",
},
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
        inter:   ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};