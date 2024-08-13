import perfectionist from 'eslint-plugin-perfectionist';

import type { Config } from '../types/index.js';

const config: Config[] = [perfectionist.configs['recommended-natural']];

export default config;
