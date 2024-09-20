module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
        reduceTransforms: true,
        discardUnused: true,
        colormin: true
      }],
    },
  },
};
