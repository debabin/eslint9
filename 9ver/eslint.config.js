import airbnbConfig from 'eslint-config-airbnb'

import siberiacancodePlugin from './lib/index.js'
import siberiacancodeConfigRecommended from './lib/configs/recommended.js'

/** @type {import('eslint').Linter.Config} * */
export default [
  {
    name: 'globals',
    ignores: ['dist', 'lib', '.eslintrc.js']
  },
  {
    name: 'airbnbn',
    rules: airbnbConfig.rules
  },
  {
    files: ['index.js'],
    name: 'sibericancode',
    plugins: {
      'siberiacancode': siberiacancodePlugin
    },
    rules: {
      ...siberiacancodeConfigRecommended.rules,
      'siberiacancode/ban-words': ['error', { list: ['element'] }]
    }
  },
  {
    name: 'rewrite',
    rules: {
      'no-console': 'warn'
    },
  }
]