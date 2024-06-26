const createPxEntries = (size: number) => {
  return {
    0: '0',
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i * 4}`]: `${(i * 4) / 10}rem` };
    }),
  };
};

const PX_ENTRIES = createPxEntries(100);

const config = {
  content: ['./src/hooks/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        max: '500px',
      },
      spacing: PX_ENTRIES,
      borderRadius: {
        none: '0rem',
        xs: '0.8rem',
        sm: '1.2rem',
        md: '2rem',
        lg: '3.2rem',
        xl: '4rem',
        full: '100rem',
      },
      boxShadow: {
        sm: '0px 6px 12px 2px rgba(0, 0, 0, 0.10)',
        md: '0px 10px 20px 4px rgba(0, 0, 0, 0.10)',
        lg: '0px 8px 20px 0px rgba(0, 0, 0, 0.20)',
        bt: '0px -4px 40px 4px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        black: {
          0: 'var(--black-0)',
          20: 'var(--black-20)',
          40: 'var(--black-40)',
          60: 'var(--black-60)',
          80: 'var(--black-80)',
          100: 'var(--black-100)',
        },
        orange: 'var(--orange)',
        sky: 'var(--sky)',
      },
      fontSize: {
        12: '1.2rem',
        14: '1.4rem',
        16: '1.6rem',
        18: '1.8rem',
        20: '2.0rem',
        24: '2.4rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bell: {
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideDown: 'slideDown 0.5s ease-in-out',
        slideRight: 'slideRight 0.5s ease-in-out',
        bell: 'bell 0.15s ease-in-out 10',
      },
    },
  },
  plugins: [],
};
export default config;
