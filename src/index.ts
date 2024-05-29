import type { Config } from './types/index.js';

import javascript from './configs/javascript.js';
import perfectionist from './configs/perfectionist.js';
import prettier from './configs/prettier.js';
import typescript from './configs/typescript.js';

const config: Config[] = [
  ...javascript,
  ...typescript,
  ...perfectionist,
  ...prettier,
];

export default config;
