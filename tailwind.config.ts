/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["var(--jost-font)"],
        roboto: ["var(--roboto-font)"],
        questrial: ["var(--questrial-font)"],
        hanken: ["var(--hanken-grotesk-font)"],
        "istok-web": ["var(--istok-web-font)"],
      },
      colors: {
        quant: {
          white: "#FFFFFF",
          navy: "#0F0E37",
          "blue-100": "#A7D6FD",
          "blue-200": "#94C7ED",
        },
      },
    },
  },
  plugins: [],
};
