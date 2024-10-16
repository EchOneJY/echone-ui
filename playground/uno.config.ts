import defaultUnoConfig from '@echone-ui/unocss-config';
import { defineConfig } from 'unocss';

export default defineConfig({
  ...defaultUnoConfig,
  content: {
    pipeline: {
      include: [
        './index.html',
        'src/**/*.{vue,js,ts,jsx,tsx}',
        '../packages/components/**/*.{vue,js,ts,jsx,tsx}',
      ],
    },
  },
});
