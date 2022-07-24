const prettier = 'prettier --ignore-unknown --write';

export default {
  '*, !package.json, !*.{js,mjs,cjs,ts,mts,cts}': prettier,
  '*.{js,mjs,cjs,ts,mts,cts}': [
    () => 'tsc --project tsconfig.eslint.json',
    'eslint --fix',
    prettier,
  ],
  'package.json': ['sort-package-json', prettier],
};
