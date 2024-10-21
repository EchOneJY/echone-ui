import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: ['src/index', './src/postcss.config'],
  externals: ['@echone-ui/node-utils'],
  rollup: {
    emitCJS: true,
  },
});
