module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [
      'error',
      'always'
    ],
    'spaced-comment': [
      'error',
      'always'
    ],
    'prefer-template': 'error',
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    'indent': [
      'error',
      2
    ],
    'eol-last': [
      'error',
      'always'
    ],
    'arrow-spacing': 'error',
    'arrow-parens': [
      'error',
      'always'
    ],
    'max-len': [
      'error',
      {
        'code': 160
      }
    ],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'one-var-declaration-per-line': [
      'error',
      'always'
    ],
    'switch-colon-spacing': 'error',
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'quote-props': [
      'error',
      'consistent'
    ]
  }
};
