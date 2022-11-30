/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "alta-space-cadet": "#152C59",
        "alta-orange": "#EF6236",
        "alta-background": "#F4F7FC",
        "alta-border": "#E5E7E8",
      },
    },
  },
  plugins: [require("daisyui")],
};
