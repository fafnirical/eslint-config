import type { Config } from './types/index.js';

import { getDependencies, hasDependency } from './utils/dependencies.js';

export default async function configure(): Promise<Config[]> {
  const dependencies = getDependencies();

  return [
    (await import('eslint-config-flat-gitignore')).default(),
    {
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
    ...(await import('./configs/comments.js')).default,

    ...(await import('./configs/javascript.js')).default,

    ...(hasDependency(dependencies, 'typescript') ?
      (await import('./configs/typescript.js')).default
    : []),

    ...(await import('./configs/imports.js')).default,
    ...(hasDependency(dependencies, 'typescript') ?
      (await import('./configs/imports.js')).typescriptConfig
    : []),

    ...(await import('./configs/perfectionist.js')).default,

    ...(hasDependency(dependencies, 'prettier') ?
      (await import('./configs/prettier.js')).default
    : []),
  ];
}
