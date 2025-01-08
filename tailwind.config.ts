/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--jost-font)"],
        roboto: ["var(--roboto-font)"],
        questrial: ["var(--questrial-font)"],
        hanken_grotesk: ["var(--hanken_grotesk-font)"],
      },
    },
  },
  plugins: [],
};
