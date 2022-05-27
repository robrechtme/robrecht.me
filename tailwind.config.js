const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
    },
    extend: {
      animation: {
        fade: 'fade 800ms ease-out backwards',
        'fade-up': 'fade-up 800ms ease-out backwards',
      },
      keyframes: {
        fade: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        'fade-up': {
          from: {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animation-delay'),
  ],
};
