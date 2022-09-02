/** @type {import('eslint').Linter.Config<import('eslint/rules').ESLintRules> & import('@typescript-eslint/utils').TSESLint.Linter.Config} */
const config = {
  root: true,
  extends: ['./dist/base.cjs', './dist/typescript.cjs'],
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './tsconfig.build.json'],
  },
  reportUnusedDisableDirectives: true,
};

module.exports = config;
