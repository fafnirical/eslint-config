/**
 * @typedef {string} Linter
 * @typedef {(filenames: string[]) => Linter | Linter[] | Promise<Linter>} FunctionLinter
 * @typedef {Record<string, Linter | FunctionLinter | Array<Linter | FunctionLinter>>} LintStagedConfig
 */

const prettier = 'prettier --write';

/**
 * @type {LintStagedConfig}
 */
const config = {
  '*, !package.json, !*.{js,mjs,cjs,ts,mts,cts}': `${prettier} --ignore-unknown`,
  '*.{js,mjs,cjs,ts,mts,cts}': [
    () => 'tsc --project tsconfig.eslint.json',
    'eslint --fix',
    prettier,
  ],
  'package.json': ['sort-package-json', prettier],
};

export default config;
