/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 576px) { ... }

      md: '720px',
      // => @media (min-width: 960px) { ... }

      lg: '1080px',
      // => @media (min-width: 1440px) { ... }

      xl: '1440px',
    },
  },
  plugins: [],
}
