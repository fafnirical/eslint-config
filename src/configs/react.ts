import reactPlugin from 'eslint-plugin-react';

import type { Config } from '../types/index.js';

const config: Config[] = [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
];

export default config;
