module.exports = {
  root: true,

  // plugins for future:
  // https://github.com/AlexMost/eslint-plugin-deprecate
  // https://github.com/apollographql/eslint-plugin-graphql
  // https://github.com/mysticatea/eslint-plugin // didn't work last time
  // https://github.com/jest-community/eslint-plugin-jest
  // https://github.com/cypress-io/eslint-plugin-cypress
  // https://github.com/sarbbottam/eslint-find-rules

  // not for this repo:
  // https://github.com/jonaskello/eslint-plugin-functional

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    'eslint:recommended',

    // ESLint typescript rules
    // See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',

    // `plugin:vue/essential` by default, consider switching to `plugin:vue/strongly-recommended`
    //  or `plugin:vue/recommended` for stricter rules.
    // See https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    'plugin:vue/recommended',

    // Usage with Prettier, provided by 'eslint-config-prettier'.
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage-with-prettier
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',

    // Quasar
    'plugin:quasar/standard',

    // SonarJS for auto code-review
    // https://github.com/SonarSource/eslint-plugin-sonarjs
    'plugin:sonarjs/recommended',

    // Promise rules
    // https://github.com/xjamundx/eslint-plugin-promise
    'plugin:promise/recommended'

    // XO - temporarily disabled
    // 3 rules lack definitions
    // https://github.com/xojs/xo
    // 'xo',
    // 'xo-vue',
    // 'xo-typescript'
  ],

  plugins: [
    // Required to apply rules which need type information
    '@typescript-eslint',
    // Required to lint *.vue files
    // See https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    'vue',
    // Quasar
    'quasar'
    // Prettier has not been included as plugin to avoid performance impact
    // See https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Add it as an extension
  ],

  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // See https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },

  env: {
    browser: true
  },

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true
  },

  // add your custom rules here
  rules: {
    quotes: ['warn', 'single'],
    '@typescript-eslint/indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],

    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Custom
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'prefer-promise-reject-errors': 'off',

    // Correct typescript linting until at least 2.0.0 major release
    // See https://github.com/typescript-eslint/typescript-eslint/issues/501
    // See https://github.com/typescript-eslint/typescript-eslint/issues/493
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Custom Vue / 1 - warn, 2 - error
    'vue/eqeqeq': 2,
    'vue/match-component-file-name': 2,
    'vue/no-irregular-whitespace': 1,
    'vue/require-name-property': 2,

    // Quasar
    'quasar/no-invalid-props': 1,
    'quasar/no-invalid-qfield-usage': 'error'
  }
};
