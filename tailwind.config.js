/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'sdr-gradient': 'linear-gradient(to bottom right, #fff700 0%, #ff6500 100%)',
      },
    },
  },
  plugins: [],
}

