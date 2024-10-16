import type { Linter } from 'eslint';

const customConfig: Linter.Config[] = [
  {
    files: ['internal/**/**'],
    rules: {
      'no-console': 'off',
    },
  },
];

export { customConfig };
