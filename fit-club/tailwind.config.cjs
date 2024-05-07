/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "hsl(var(--lightgray) / <alpha-value>)",
        gray: "hsl(var(--gray) / <alpha-value>)",
        caloryCard: "hsl(var(--caloryCard) / <alpha-value>)",
        appColor: "hsl(var(--appColor) / <alpha-value>)",
        orange: "hsl(var(--orange) / <alpha-value>)",
        danger: "hsl(var(--danger) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
