// eslint-disable-next-line vue/script-setup-uses-vars
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
  ],
  rules: {
    'vue/comment-directive': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
    }],
    'vue/script-setup-uses-vars': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-newline': ['error', { 'minItems': 5 }],
    'arrow-spacing': 'error',
    'vue/block-tag-newline': ['error', {
      'singleline': 'always',
      'multiline': 'always',
      'maxEmptyLines': 0,
      'blocks': {
        'script': {
          'singleline': 'always',
          'multiline': 'always',
          'maxEmptyLines': 0,
        },
        'template': {
          'singleline': 'always',
          'multiline': 'always',
          'maxEmptyLines': 0,
        },
        'my-block': {
          'singleline': 'always',
          'multiline': 'always',
          'maxEmptyLines': 0,
        },
      },
    }],
    'curly': 'error',
    'default-case': 'error',
    'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
    'no-unmodified-loop-condition': 'error',
    'no-use-before-define': 'error',
    'indent': ['error', 2],
    'no-unneeded-ternary': 'error',
    'quotes': ['error', 'single'],
    'space-unary-ops': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'max-lines': ['error', { 'max': 1000, 'skipComments': true }],
    'no-var': 'error',
    'vue/html-indent': ['error', 2],
  },
};