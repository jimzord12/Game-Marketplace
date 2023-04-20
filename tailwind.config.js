/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      boxShadow: {
        secondary: "10px 10px 20px rgba(2, 2, 2, 0.25)",
        green:
          "0 3px 8px rgba(96, 255, 128, 0.3), 0 1px 3px rgba(96, 255, 128, 0.1)",
      },
    },
  },
  plugins: [],
};
