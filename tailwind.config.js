const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['_site/**/*.{html,js}'],
  theme: {
    fontFamily: {
      heading: '',
      body: '',
      micro: '',
    },
    lineHeight: {
      tight: '1.1',
      snug: '1.25',
      normal: '1.4',
    },
    listStyleType: {
      none: 'none',
      decimal: 'decimal',
      square: 'square',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff'
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
