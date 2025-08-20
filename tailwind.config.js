/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64E79E",
        secondary: "#e96d4c",
        background: "#fdf5f2",
      },
      fontFamily: {
        poppins: "Poppins",
        oxanium: "Oxanium",
      },
    },
  },
  plugins: [],
};
