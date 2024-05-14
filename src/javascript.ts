import eslint from '@eslint/js';
import type { Config } from './types.js';

const config: Config[] = [eslint.configs.recommended];

export default config;
