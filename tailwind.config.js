/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'red-gradient': `linear-gradient(to bottom, ${theme('colors.red.900')}, #000)`,
        'green-gradient': `linear-gradient(to bottom, ${theme('colors.green.900')}, #000)`,
        'blue-gradient': `linear-gradient(to bottom, ${theme('colors.blue.900')}, #000)`,
        'yellow-gradient': `linear-gradient(to bottom, ${theme('colors.yellow.900')}, #000)`,
        'purple-gradient': `linear-gradient(to bottom, ${theme('colors.purple.900')}, #000)`
      })
    }
  },
  plugins: [],
}