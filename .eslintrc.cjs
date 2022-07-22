/** @type {import('eslint').Linter.Config<import('eslint/rules').ESLintRules>} */
module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  env: {
    node: true,
    es2022: true,
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: '*.cjs',
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: '*.mjs',
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
