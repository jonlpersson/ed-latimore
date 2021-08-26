module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "itc-avant-garde-gothic-pro, sans-serif",
      serif: "adobe-garamond-pro, serif",
    },
    fontSize: {
      "xs": "12px",
      "sm": "16px",
      "base": "18px",
      "md": "20px",
      "lg": "24px",
      "xl": "28px",
      "2xl": "36px",
      "3xl": "48px",
      "4xl": "60px",
      "5xl": "72px",
      "6xl": "96px"
    },
    extend: {
      colors: {
        gray: {
          light: "#E2E1E1",
          DEFAULT: "#CDCFCF",
          dark: "#050B0D",
        },
        maroon: "#941732",
        coral: "#E54F4E",
        navy: "#1E274A",
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.3",
        normal: "1.5",
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      visibility: ['group-hover', 'hover'],
      translate: ['group-hover'],
      boxShadow: ['group-hover'],
      display: ['group-hover'],
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
