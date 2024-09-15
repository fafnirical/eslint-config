import { configs } from 'typescript-eslint';

import type { Config } from '../types/index.js';

const config: Config[] = [
  ...configs.strictTypeChecked,
  ...configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
];

export default config;
