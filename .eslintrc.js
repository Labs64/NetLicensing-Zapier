module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
// add your custom rules here
  rules: {
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: false,
      // ignorePropertyModificationsFor: [
      //     'state', // for vuex state
      //     'acc', // for reduce accumulators
      //     'e' // for e.return value
      // ]
    }],
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //custom spaces rules
    'indent': 'off',
    'indent-legacy': ['error', 4, { SwitchCase: 1 }],
    'linebreak-style': 0,
    'max-len': ['error', 120, { ignoreTrailingComments: true }],
    'object-curly-newline': ['error', { 'consistent': true }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  }
};
