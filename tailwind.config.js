/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      Roboto: "Roboto Mono, monospace",
      Oswald: "Oswald",
    },
    screens: {
      mm: "640px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },

  plugins: [],
};
