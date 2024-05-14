import { configs } from 'typescript-eslint';
import type { Config } from './types.js';

const config: Config[] = [...configs.strict, ...configs.stylistic];

export default config;
