module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  backgroundImage: true,
  theme: {
    extend: {},
    fontFamily: {
      poppins:"'poppins', serif"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
