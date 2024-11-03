import react from '@eslint-react/eslint-plugin';

import type { Config } from '../types/index.js';

const config: Config[] = [react.configs.recommended];

export default config;

export const typescriptConfig: Config[] = [
  react.configs['recommended-type-checked'],
];
