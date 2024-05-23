import { configs } from 'typescript-eslint';
import type { Config } from './types.js';

const config: Config[] = [
  ...configs.strictTypeChecked,
  ...configs.stylisticTypeChecked,
];

export default config;
