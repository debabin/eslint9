import recommended from './configs/recommended.js';

import banWords from './rules/ban-words.js';

export default {
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
