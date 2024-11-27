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
      colors: {
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        purple: {
          500: '#8B5CF6',
          700: '#6D28D9',
        },
      },                        
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

