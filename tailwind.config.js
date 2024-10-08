/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neu: '5px 5px 7px #1c1d1f, -5px -5px 7px #222527',
      },
    },
  },
  plugins: [],
}

