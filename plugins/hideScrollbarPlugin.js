const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities }) => {
  const hideScrollbarUtilities = {
    '.hide-scrollbar::-webkit-scrollbar': {
      display: 'none',
    },
    '.hide-scrollbar': {
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',
    },
  };

  addUtilities(hideScrollbarUtilities);
});
