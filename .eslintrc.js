module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": 0,
    "no-mixed-spaces-and-tabs": 1,
    "comma-dangle": 0,
    "no-unused-vars": 1,
    "eqeqeq": [2, "smart"],
    "no-useless-concat": 2,
    "default-case": 2,
    "no-self-compare": 2,
    "prefer-const": 2,
    "object-shorthand": 1,
    "array-callback-return": 2,
    "valid-typeof": 2,
    "arrow-body-style": 2,
    "require-await": 2,
    "react/prop-types": 0,
    "no-var": 2,
    "linebreak-style": [2, "unix"],
    "semi": [1, "always"]
  },
};
