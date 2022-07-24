/** @type {import('eslint').Linter.Config<import('eslint/rules').ESLintRules> & import('@typescript-eslint/utils').TSESLint.Linter.Config} */
const config = {
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
      // This override acts only as a list of file extensions to lint.
      files: ['*.js', '*.mjs', '*.cjs', '*.ts', '*.mts', '*.cts'],
    },
  ],
};

module.exports = config;
