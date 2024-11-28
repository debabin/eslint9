const recommended = require('./configs/recommended.js');

const banWords = require('./rules/ban-words.js');

const plugin = {
  meta: { name: 'siberiacancode', version: '1.0.0' },
  rules: {
    'ban-words': banWords
  },
  configs: {
    recommended: {
      plugins: [],
      rules: recommended.rules
    }
  }
};

module.exports = plugin;
