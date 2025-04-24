/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        jawa: ['"Javanese Text"', 'serif'],
        lora: ['Lora', 'serif'],
      },
      backgroundImage: {
        'gunung': "url('/background.jpg')",
      },
    },
  },
  plugins: [],
}

