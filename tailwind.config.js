/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: [{ max: '500px' }],
      md: [{ max: '668px' }],
      lg: [{ max: '950px' }],
      xl: [{ max: '1370px' }],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '20px',
      xl1: '22px',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.1875rem',
      '5xl': '3rem',
      '6xl': '55px',
    },
    extend: {
      colors: {
        gray: {
          100: '#0000001a',
          200: '#00000080',
          201: '#D9DBE1',
          202: '#191e2f',
          203: '#ffffff99',
          300: '#73757E',
          400: '#232A43',
          500: '#5B6178',
          600: '#9895AB',
          700: '#BDC2D3',
          800: '#E7ECFD',
          900: '#F0F0F0',
          901: '#62616F',
          902: '#ffffff52',
        },
        purple: {
          200: '#FBFCFF',
          300: '#4f71f81a',
          400: '#4B6DF3',
        },
        orange: {
          400: '#F2765D',
        },
        blue: {
          400: '#12182D',
          500: '#000518',
        },
      },
    },
  },
  plugins: [],
};
