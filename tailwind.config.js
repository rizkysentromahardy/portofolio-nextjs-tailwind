/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        main: '#5f27cd',
        text: '#323232',
        banner:'#576574',
      },
      screens: {
        '2xl': '1120px'
      }
    },
  },
  plugins: [],
}
