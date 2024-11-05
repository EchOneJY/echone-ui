import tailwindcssConfig from '@echone-ui/tailwind-config';

export default {
  ...tailwindcssConfig,
  content: [
    ...tailwindcssConfig.content,
    '.vitepress/**/*.{js,mts,ts,vue}',
    'src/**/*.md',
  ],
};
