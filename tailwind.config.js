/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "max-xs": { max: "340px" },
      // => @media (max-width: 340px) { ... }

      "max-md": { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
