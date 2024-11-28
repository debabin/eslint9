/** @type {import('eslint').Linter.Config} * */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  ignorePatterns: ['dist', 'lib', '.eslintrc.js'],
  extends: ['airbnb-base', 'siberiacancode/recommended', 'plugin:siberiacancode/recommended'],
  // plugins: ['siberiacancode'],
  rules: {
    'no-console': 'warn'
    // 'siberiacancode/ban-words': ['error', { list: ['el', 'e'] }],
  }
};
