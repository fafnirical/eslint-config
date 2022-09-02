import type { Linter } from 'eslint';

const config: Linter.Config = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      // This override acts only as a list of file extensions to lint.
      files: ['*.ts', '*.mts', '*.cts'],
    },
  ],
};

export = config;
