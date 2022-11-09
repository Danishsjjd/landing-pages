/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-main": "hsl(var(--primary-main) / <alpha-value>)",
        "primary-para": "hsl(var(--primary-para) / <alpha-value>)",
        "secondary-main": "hsl(var(--secondary-main) / <alpha-value>)",
        "bg-main": "hsl(var(--bg-main) / <alpha-value>)",
        "bg-secondary": "hsl(var(--bg-secondary) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
