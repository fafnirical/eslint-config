import javascript from './javascript.js';
import type { Config } from './types.js';
import typescript from './typescript.js';

const config: Config[] = [...javascript, ...typescript];

export default config;
