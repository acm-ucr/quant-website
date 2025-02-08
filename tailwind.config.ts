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
          gray: "#C3D0DF",
          skyblue: "#ADC0EB",
          "blue-100": "#A7D6FD",
          "blue-200": "#94C7ED",
          "gray-100": "#CAE7FF69",
        },
      },
    },
  },
  plugins: [],
};
