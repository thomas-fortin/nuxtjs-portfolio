/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: {
        '100': '#90dfff',
        '200': '#68d4ff',
        '300': '#00b7ff',
        '400': '#04Aef0',
        '500': '#08a5e1',
        '600': '#0795d3',
        '700': '#0586c5',
        '800': '#0474ab',
        '900': '#056492'
      },
      green: {
        '100': '#5eff9e',
        '200': '#29f57a',
        '300': '#25e471',
        '400': '#29d970',
        '500': '#2dcf6e',
        '600': '#30c46c',
        '700': '#33ba6a',
        '800': '#24a95a',
        '900': '#0c843d'
      },
      primary: colors.blue[500],
      secondary: colors.green[500],
      grayish: colors.gray[700]
    },
    extend: {
      height: {
        'half-screen': '50vh'
      },
      spacing: {
        '2px': '2px'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem'
      },
      lineHeight: {
        'negative': '0.75',
        '12': '3rem'
      },
      inset: {
        '8': '8em',
        '10': '10em'
      },
      opacity: {
        '90': '0.9'
      },
      borderWidth: {
        '1': '1px'
      }
    }
  },
  variants: {},
  plugins: []
};
