/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        button: "#083EC5",
      },
      backgroundColor: {
        white_transparent: "#FFF",
      },
    },
  },
  plugins: [],
};
