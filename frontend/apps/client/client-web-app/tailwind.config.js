/* eslint-disable @typescript-eslint/no-unused-vars */
const { join } = require('path');

const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');

const defaultPrimaryColors = {
  50: 'var(--color-primary-50)',
  100: 'var(--color-primary-100)',
  200: 'var(--color-primary-200)',
  300: 'var(--color-primary-300)',
  400: 'var(--color-primary-400)',
  500: 'var(--color-primary-500)',
  600: 'var(--color-primary-600)',
  700: 'var(--color-primary-700)',
  800: 'var(--color-primary-800)',
  900: 'var(--color-primary-900)',
  DEFAULT: 'var(--color-primary-500)',
};

const defaultAccentColors = {
  50: 'var(--color-accent-50)',
  100: 'var(--color-accent-100)',
  200: 'var(--color-accent-200)',
  300: 'var(--color-accent-300)',
  400: 'var(--color-accent-400)',
  500: 'var(--color-accent-500)',
  600: 'var(--color-accent-600)',
  700: 'var(--color-accent-700)',
  800: 'var(--color-accent-800)',
  900: 'var(--color-accent-900)',

  DEFAULT: 'var(--color-secondary-500)',
};

const defaultWarnColors = {
  50: 'var(--color-warn-50)',
  100: 'var(--color-warn-100)',
  200: 'var(--color-warn-200)',
  300: 'var(--color-warn-300)',
  400: 'var(--color-warn-400)',
  500: 'var(--color-warn-500)',
  600: 'var(--color-warn-600)',
  700: 'var(--color-warn-700)',
  800: 'var(--color-warn-800)',
  900: 'var(--color-warn-900)',

  DEFAULT: 'var(--color-warn-500)',
};

const defaultBackgroundColors = {
  50: 'var(--color-background-50)',
  100: 'var(--color-background-100)',
  200: 'var(--color-background-200)',
  300: 'var(--color-background-300)',
  400: 'var(--color-background-400)',
  500: 'var(--color-background-500)',
  600: 'var(--color-background-600)',
  700: 'var(--color-background-700)',
  800: 'var(--color-background-800)',
  900: 'var(--color-background-900)',

  panel: 'var(--color-background-panel)',
  backdrop: 'var(--color-background-backdrop)',

  // Provide darken and lighten schemes.
  darken: 'var(--color-background-darken)',
  lighten: 'var(--color-background-lighten)',

  DEFAULT: 'var(--color-background-500)',
};

const defaultForegroundColors = {
  50: 'var(--color-foreground-50)',
  100: 'var(--color-foreground-100)',
  200: 'var(--color-foreground-200)',
  300: 'var(--color-foreground-300)',
  400: 'var(--color-foreground-400)',
  500: 'var(--color-foreground-500)',
  600: 'var(--color-foreground-600)',
  700: 'var(--color-foreground-700)',
  800: 'var(--color-foreground-800)',
  900: 'var(--color-foreground-900)',
  DEFAULT: 'var(--color-foreground-500)',
};

const defaultColorPalette = {
  // Primary theme palette.
  primary: defaultPrimaryColors,
  // Secondary theme palette.
  accent: defaultAccentColors,
  // Error theme palette.
  warn: defaultWarnColors,
  // UI background/foreground theme-palettes.
  background: defaultBackgroundColors,
  foreground: defaultForegroundColors,
};

module.exports = {
  mode: 'jit',

  important: 'pinguin-client-web-root',

  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [],
  future: {
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  darkMode: 'class',

  whitelist: ['theme-dark'],

  theme: {
    darkSelector: '.theme-dark',

    screens: {
      sm: { 'min': '640px', 'max': '767px' },
      md: { 'min': '768px', 'max': '1023px' },
      lg: { 'min': '1024px', 'max': '1279px' },
      xl: { 'min': '1280px', 'max': '1535px' },
      '2xl': { 'min': '1536px' },
    },
    space: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },
    borderRadius: {
      none: '0rem',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px',
    },
    colors: defaultColorPalette,
    backgroundColor: defaultColorPalette,
    borderColor: defaultColorPalette,
    ringColors: defaultColorPalette,

    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      padding: {},
      spacing: {},
      fontFamily: {},
      fontSize: {
        xs: '0.5rem',
        sm: '0.75rem',
        base: '1rem',
        md: '1.25rem',
        lg: '1.5rem',
        xl: '1.75rem',
        '2xl': '2rem',
      },
    },

    variables: {
      DEFAULT: {
        'theme-color': 'dark',
        'prefers-color-scheme': 'dark',
        font: {
          family: 'Montserrat, sans-serif',
          weight: 400,
          size: '1rem',
        },
        line: {
          height: '1',
        },
        letter: {
          spacing: 'normal',
        },
      },
      '.theme-light': {
        color: {
          primary: {
            50: '#653E00',
            100: '#773000',
            200: '#881B00',
            300: '#B8446D',
            400: '#A92239',
            500: '#990000',
            600: '#C6669A',
            700: '#D488C0',
            800: '#E1AADD',
            900: '#E9CCEE',
          },
          accent: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
          },
        },
      },
    },
  },

  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'group-disabled',
    'disabled',
  ],

  variants: {
    extend: {
      backgroundColor: [
        'dark',
        'dark-hover',
        'dark-group-hover',
        'dark-even',
        'dark-odd',
      ],
      borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
    },
  },

  corePlugins: {
    preflight: true,
  },

  plugins: [
    require('tailwindcss-dark-mode')(),
    require('@mertasan/tailwindcss-variables'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('tailwindcss-rtl'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-children'),
    require('tailwindcss-interaction-variants'),
  ],
};
