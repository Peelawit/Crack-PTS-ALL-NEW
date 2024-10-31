/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1976D2',
        'menu' : '#6B739C',
        'font' : '#3B4778',
        'fontContent' : '#464C59',
        'disabled' : '#EBEBE4',
        'warning' : '#F66262',
        'danger' : '#FF0000',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

