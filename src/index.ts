import javascript from './javascript.js';
import prettier from './prettier.js';
import type { Config } from './types.js';
import typescript from './typescript.js';

const config: Config[] = [...javascript, ...typescript, ...prettier];

export default config;
