/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        bg_image: "url('/public/images/bg.png')",
      }),
    },
  },

  plugins: [],
};
