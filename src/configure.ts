import type { Config } from './types/index.js';

import { getDependencies, hasDependency } from './utils/dependencies.js';

interface Options {
  gitignore?: boolean;
  prettier?: boolean;
  react?: boolean;
  typescript?: boolean;
}

export default async function configure(
  options: Options = {},
): Promise<Config[]> {
  const dependencies = getDependencies();

  const {
    gitignore: enableGitignore = true,
    prettier: enablePrettier = hasDependency(dependencies, 'prettier'),
    react: enableReact = hasDependency(dependencies, 'react'),
    typescript: enableTypescript = hasDependency(dependencies, 'typescript'),
  } = options;

  const configs: Config[] = [];

  if (enableGitignore) {
    configs.push(...(await import('./configs/gitignore.js')).default);
  }

  configs.push(
    {
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
    ...(await import('./configs/javascript.js')).default,
    ...(await import('./configs/comments.js')).default,
    ...(await import('./configs/imports.js')).default,

    ...(await import('./configs/perfectionist.js')).default,
  );

  if (enableTypescript) {
    configs.push(
      ...(await import('./configs/typescript.js')).default,
      ...(await import('./configs/imports.js')).typescriptConfig,
    );
  }

  if (enableReact) {
    configs.push(...(await import('./configs/react.js')).default);

    if (enableTypescript) {
      configs.push(...(await import('./configs/react.js')).typescriptConfig);
    }
  }

  if (enablePrettier) {
    configs.push(...(await import('./configs/prettier.js')).default);
  }

  return configs;
}
