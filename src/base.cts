import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    './base/problem.cjs',
    './base/suggestion.cjs',
    './base/layout.cjs',
    'prettier',
  ],
  overrides: [
    {
      // This override acts only as a list of file extensions to lint.
      files: ['*.js', '*.mjs', '*.cjs'],
    },
  ],
};

export = config;
