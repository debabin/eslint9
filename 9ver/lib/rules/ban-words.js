/** @type {import('eslint').Rule.RuleModule} * */
export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow specific words in the code',
      category: 'Best Practices',
      recommended: false
    },
    schema: [
      {
        type: 'object',
        properties: {
          list: {
            type: 'array',
            items: { type: 'string' },
            uniqueItems: true
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      bannedWord: "The word '{{ word }}' is not allowed."
    }
  },
  create(context) {
    const forbiddenWords = context.options[0].list || [];

    return {
      Identifier(node) {
        if (forbiddenWords.includes(node.name)) {
          context.report({
            node,
            messageId: 'bannedWord',
            data: { word: node.name }
          });
        }
      },
      Literal(node) {
        if (typeof node.value === 'string' && forbiddenWords.some((word) => node.value === word)) {
          context.report({
            node,
            messageId: 'bannedWord',
            data: { word: node.value }
          });
        }
      }
    };
  }
};
