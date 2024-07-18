/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'main': {
          100: '#141414',
          200: '#0D0D0D',
        },
        "primary": "#0487D9",
        "success": "#22906B",
        "danger": "#9C1128",
        "normal": "#3787E6",
        "standby": "#f0ca0f",
        "possessing": "#F48623",
      }
    },
  },
  plugins: [],
}