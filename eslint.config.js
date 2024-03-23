import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

/**
 * @type {import('typescript-eslint').Config}
 */
const config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
);

export default config;
