const prettier = 'prettier --ignore-unknown --write';

export default {
  '*, !package.json': prettier,
  'package.json': ['sort-package-json', prettier],
};
