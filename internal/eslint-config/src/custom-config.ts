import type { Linter } from 'eslint';

const restrictedImportIgnores = [
  '**/vite.config.mts',
  '**/tailwind.config.mjs',
  '**/postcss.config.mjs',
];

const customConfig: Linter.Config[] = [
  {
    // 不能引入@echone/*里面的包
    files: [
      'packages/types/**/**',
      'packages/utils/**/**',
      'packages/icons/**/**',
      'packages/constants/**/**',
      'packages/styles/**/**',
      'packages/stores/**/**',
      'packages/preferences/**/**',
      'packages/locales/**/**',
    ],
    ignores: restrictedImportIgnores,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@echone/*'],
              message:
                'The @echone package cannot be imported, please use the @core package itself',
            },
          ],
        },
      ],
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
