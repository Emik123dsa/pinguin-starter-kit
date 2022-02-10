const path = require('path');

module.exports = {
  ident: 'postcss',
  syntax: 'postcss-scss',
  map: false,
  plugins: [
    require('precss')({}),
    process.env.NODE_ENV === 'production' ? require('cssnano')({}) : {},
    require('tailwindcss')({
      config: path.join(__dirname, './tailwind.config.js'),
    }),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer')({
      grid: true,
      flexbox: 'no-2009',
    }),
    require('postcss-import')({}),
    require('postcss-flexbugs-fixes')({}),
    require('postcss-at-rules-variables')({}),
    require('postcss-each')({}),
    require('postcss-preset-env')({
      features: { 'nesting-rules': false },
    }),
  ],
};
