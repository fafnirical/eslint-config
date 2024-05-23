import type { TSESLint } from '@typescript-eslint/utils';
import type { Linter } from 'eslint';

export type Config = Linter.FlatConfig | TSESLint.FlatConfig.Config;
