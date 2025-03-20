import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E0FBFC', // Light Cyan
        secondary: '#C2DFE3', // Light Blue
        tertiary: '#9DB4C0', // Cadet Gray
        quaternary: '#5C6B73', // Payne's Gray
        quinary: '#253237', // Gunmetal
        darkest: '#13181a' // Darkest
      },


    },
  },
  plugins: [],
};

export default config;
