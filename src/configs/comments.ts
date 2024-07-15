import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

import type { Config } from '../types/index.js';

const config: Config[] = [comments.recommended];

export default config;
