import { configure } from './dist/index.js';

const config = [
  ...(await configure()),
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

export default config;
