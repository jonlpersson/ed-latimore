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
    fontSize: {
      xs: ['0.75rem', '1.5'],
      sm: ['0.875rem', '1.5'],
      base: ['1rem', '1.5'],
      lg: ['1.125rem', '1.5'],
      xl: ['1.25rem', '1.5'],
      '2xl': ['1.5rem', '1.5'],
      '3xl': ['1.75rem', '1.3'],
      '4xl': ['2.25rem', '1.3'],
      '5xl': ['3rem', '1.3'],
      '6xl': ['3.75rem', '1.3'],
      '7xl': ['4.5rem', '1.3'],
      '8xl': ['6rem', '1.3'],
      '9xl': ['8rem', '1.3']
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