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
  {
    files: ['docs/**/**'],
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'n/no-extraneous-import': 'off',
      'n/prefer-global/buffer': 'off',
      'n/prefer-global/process': 'off',
      'no-console': 'off',
      'regexp/match-any': 'off',
      'regexp/no-super-linear-backtracking': 'off',
      'regexp/no-unused-capturing-group': 'off',
      'unicorn/prefer-module': 'off',
    },
  },
];

export { customConfig };
