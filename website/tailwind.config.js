module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
