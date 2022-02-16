const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['_site/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: 'itc-avant-garde-gothic-pro, sans-serif',
      serif: 'adobe-garamond-pro, serif'
    },
    lineHeight: {
      tight: '1.1',
      snug: '1.3',
      normal: '1.5',
    },
    listStyleType: {
      none: 'none',
      decimal: 'decimal',
      square: 'square',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      gray: {
        light: "#E2E1E1",
        DEFAULT: "#CDCFCF",
        dark: "#050B0D",
      },
      maroon: "#941732",
      coral: "#E54F4E",
      navy: "#1E274A",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};