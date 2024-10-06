import gitignore from 'eslint-config-flat-gitignore';

import type { Config } from '../types/index.js';

const config: Config[] = [gitignore()];

export default config;
