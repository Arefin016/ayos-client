/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        primaryColor: "#FFF",
        button: "#083EC5",
        secondaryButton: "#1E1E1E",
      },
      backgroundColor: {
        white_transparent: "#FFF",
      },
    },
  },
  plugins: [],
};
