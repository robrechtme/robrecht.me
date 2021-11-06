const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: colors.zinc,
      },
      minWidth: {
        96: '28rem',
      },
      borderWidth: {
        3: '3px',
      },
      spacing: {
        0.5: '0.125rem',
        '1/2': '50%',
      },
      minHeight: {
        32: '8rem',
      },
      inset: {
        8: '2rem',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'unset',
              '&:hover': {
                color: 'unset',
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      transform: ['motion-reduce'],
      transitionProperty: ['motion-reduce', 'motion-safe'],
      ringWidth: ['focus-visible'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
