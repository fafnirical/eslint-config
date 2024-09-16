import * as oxcResolver from 'eslint-import-resolver-oxc';
import { flatConfigs } from 'eslint-plugin-import-x';

import type { Config } from '../types/index.js';

const config: Config[] = [
  flatConfigs.recommended,
  {
    settings: {
      'import-x/resolver': {
        name: 'oxc',
        resolver: oxcResolver,
      },
    },
  },
];

export default config;

export const typescriptConfig: Config[] = [flatConfigs.typescript];
