const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  /**
   * Purge tells tailwindcss to only include the
   * css classes included in the files listed
   * in the directories below
   */
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        primary: 'var(--primary)',
        accent: 'var(--accent)'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      margin: ['first']
    },
  },
}
