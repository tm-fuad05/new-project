/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.8, 1) infinite",
      },
      colors: {
        primary: "#64E79E",
        background: "#070707",
      },
      fontFamily: {
        poppins: "Poppins",
        unbounded: "Unbounded",
      },
    },
  },
  plugins: [],
};
