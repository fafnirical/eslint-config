declare module 'eslint-plugin-react' {
  import type { Linter } from 'eslint';

  const plugin: {
    configs: {
      flat: {
        all: Linter.FlatConfig;
        'jsx-runtime': Linter.FlatConfig;
        recommended: Linter.FlatConfig;
      };
    };
  };
  export default plugin;
}
