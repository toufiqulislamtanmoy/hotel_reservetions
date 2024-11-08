/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customPrimary: "#05422D",
        customSecondary: "#FFF9F2",
        customGray: "#EAECEE",
      },
      colors: {
        primary: "#05422D",
      },
    },
  },
  plugins: [require("daisyui")],
};
