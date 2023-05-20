/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      bruno: ["Bruno Ace SC"],
      permanentMarker: ["Permanent Marker"],
      spaceMono: ["Space Mono"],
    },
    screens: {
      sm: "640px",
      md: "1050px",
      lg: "1210px",
      xl: "1380px",
      "2xl": "1536px",
    },
  },
  plugins: [require("daisyui")],
};
