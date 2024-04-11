import type { Config } from 'tailwindcss';

const createPxEntries = (size: number) => {
  return {
    0: '0',
    ...Array.from(Array(size + 1)).reduce((accumulator, _, i) => {
      return { ...accumulator, [`${i * 4}`]: `${(i * 4) / 10}rem` };
    }),
  };
};

const PX_ENTRIES = createPxEntries(100);

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
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
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
