/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Pacifico: ["Pacifico", "sans-serif"],
      },
      screens: {
        mm: "640px",
      },
    },

    plugins: [],
  },
};
