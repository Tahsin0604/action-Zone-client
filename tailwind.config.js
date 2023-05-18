/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      bruno: ["Bruno Ace SC"],
      permanentMarker: ["Permanent Marker"],
      spaceMono: ["Space Mono"],
    },
  },
  plugins: [require("daisyui")],
};
