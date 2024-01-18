/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./src/**/**/*.{js,jsx,ts,tsx}",
  "./src/**/**/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    backgroundColor:{
      'card': 'linear-gradient( #E6EBF4, #FFFFFF00)',
    },
    dropShadow:{
      "cardbox": "0px 4px 20px 0px #0000000D"
    }
  },
  plugins: [],
}

