// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'titleColor': '#0f2c29',
        // 'text': '#00020B',
        // 'body': '#BEEBFC',
        // 'button': '#061A2A',
        // 'subComponent': '#515F6A',
        // 'default': '#515F6A',
        // 'blue': '#1CB2F6'
      }
    },
  },
  plugins: [],
});