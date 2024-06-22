/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('/public/assets/images/bgHego.jpg')",
      },
    },
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }
    },
  },
  plugins: [],
};
