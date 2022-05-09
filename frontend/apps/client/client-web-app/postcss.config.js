const path = require('path');

const environment = process.env.NODE_ENV;
const isProduction = Object.is(environment, 'production');

const plugins = [
  require('precss')({}),
  require('tailwindcss')({
    config: path.join(__dirname, './tailwind.config.js'),
  }),
  require('postcss-cssnext')({}),
  isProduction ? require('cssnano')({}) : {},
  require('tailwindcss/nesting')(require('postcss-nesting')),
  require('autoprefixer')({
    env: environment,
    grid: true,
    cascade: true,
    flexbox: 'no-2009',
  }),
  require('postcss-import')({}),
  require('postcss-flexbugs-fixes')({}),
  require('postcss-at-rules-variables')({}),
  require('postcss-each')({}),
  require('postcss-preset-env')({
    features: { 'nesting-rules': false },
  }),
];

module.exports = ({ file, options, env }) => ({
  ident: 'postcss',
  syntax: 'postcss-scss',
  parser: false,
  map: false,
  plugins,
});
