const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
        ".horizontal-writing-tb": { writingMode: "horizontal-tb" },
        ".vertical-writing-rl": { writingMode: "vertical-rl" },
        ".vertical-writing-lr": { writingMode: "vertical-lr" },
        // https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
        ".orientation-mixed": { textOrientation: "mixed" },
        ".orientation-upright": { textOrientation: "upright" },
        ".orientation-sideways-right": { textOrientation: "sideways-right" },
        ".orientation-sideways": { textOrientation: "sideways" },
        ".orientation-glyph": { textOrientation: "use-glyph-orientation" },
      })
    }),
  ],
}