module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./css/**/*.css",
    "./**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkorange: "#b34408" // ahora puedes usar bg-darkorange, text-darkorange, etc.
      }
    }
  },
  plugins: []
}