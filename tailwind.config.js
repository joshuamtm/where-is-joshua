/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        route: "#e91e63",
        cta: "#1e88e5",
      },
    },
  },
  plugins: [],
};
