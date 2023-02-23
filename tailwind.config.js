/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      bordo: '#D11655',
      gray: '#8A8E97',
      red: '#FF0000',
    },
    extend: {
      screens: {
        'full-hd': {'max': '1980px'},
        'middle-hd': {'max': '1068px'},
        'mobile-below': {'max': '768px'},
        'mobile-above': {'min': '768px'},
      },
    },
  },
  plugins: [],
}
