module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1000px',
          '2xl': '1140px',
        },
      },
      colors: {
        'primary': '#F53838',
        'info': '#EEEFF2',
        'border-color': '#DDDDDD',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
