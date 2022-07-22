const prettier = 'prettier --ignore-unknown --write';

export default {
  '*, !package.json, !*.{js,mjs,cjs}': prettier,
  '*.{js,mjs,cjs}': ['eslint --fix', prettier],
  'package.json': ['sort-package-json', prettier],
};
