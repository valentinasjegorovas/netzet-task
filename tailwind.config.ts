import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1D236B',
        orange: '#FF5C2E',
        yellow: '#F5A418',
        black: '#000000',
        main: '#FEFBF9',
        secondary: '#FFF8E8',
        green: '#03C100',
        white: '#fff',
        red: '#EA4335',
        grey: '#939393',
        darkgrey: '#2F2F2F',
        lightgrey: '#6E6E6E',
        footer: '#FAF8F8',
        footerlinks: '#666666',
      },
      screens: {
        mobile: {
          max: '768px',
        },
        laptop: {
          max: '1200px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
