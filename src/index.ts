import type { Config } from './types/index.js';

import javascript from './javascript.js';
import perfectionist from './perfectionist.js';
import prettier from './prettier.js';
import typescript from './typescript.js';

const config: Config[] = [
  ...javascript,
  ...typescript,
  ...perfectionist,
  ...prettier,
];

export default config;
