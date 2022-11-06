/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-light": "hsl(var(--primary-light) / <alpha-value>)",
        "primary-lightest": "hsl(var(--primary-lightest) / <alpha-value>)",
        "primary-para": "hsl(var(--primary-para) / <alpha-value>)",
        "primary-dark": "hsl(var(--primary-dark) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
