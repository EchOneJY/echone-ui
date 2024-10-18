import type { Linter } from 'eslint';

const customConfig: Linter.Config[] = [
  // shadcn-ui 内部组件是自动生成的，不做太多限制
  {
    files: ['packages/components/**/**'],
    rules: {
      'vue/require-default-prop': 'off',
    },
  },
  {
    files: ['internal/**/**'],
    rules: {
      'no-console': 'off',
    },
  },
];

export { customConfig };
