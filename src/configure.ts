import type { Config } from './types/index.js';

import { getDependencies, hasDependency } from './utils/dependencies.js';

export default async function configure(): Promise<Config[]> {
  const dependencies = getDependencies();

  /* eslint-disable @typescript-eslint/no-var-requires */
  return [
    ...(await import('./configs/javascript.js')).default,

    ...(hasDependency(dependencies, 'typescript') ?
      (await import('./configs/typescript.js')).default
    : []),

    ...(await import('./configs/perfectionist.js')).default,

    ...(hasDependency(dependencies, 'prettier') ?
      (await import('./configs/prettier.js')).default
    : []),
  ];
  /* eslint-enable */
}
