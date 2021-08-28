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
      "2xl": "32px",
      "3xl": "36px",
      "4xl": "48px",
      "5xl": "60px",
      "6xl": "72px",
      "7xl": "96px"
    },
    extend: {
      backgroundImage: theme => ({
        'img': 'var(--bg-img);',
      }),
      zIndex: {
        '-50': '-50',
        '-40': '-40',
        '-30': '-30',
        '-20': '-20',
        '-10': '-10',
      },
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
    require("@tailwindcss/forms"),
    require('@tailwindcss/aspect-ratio'),
  ],
}
