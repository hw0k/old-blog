/* eslint-disable global-require */

const accentColor = '#177AB0';
const accentHoverColor = '#136490';

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        accent: accentColor,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: accentColor,
              '&:hover': {
                color: accentHoverColor,
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
