/** @type {import('eslint').Linter.Config<import('eslint/rules').ESLintRules> & import('@typescript-eslint/utils').TSESLint.Linter.Config} */
module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
  ],
  env: {
    node: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
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
