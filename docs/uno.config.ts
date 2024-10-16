import defaultUnoConfig from '@echone-ui/unocss-config';
import { defineConfig } from 'unocss';

export default defineConfig({
  ...defaultUnoConfig,
  content: {
    pipeline: {
      include: ['../packages/components/**/*.{vue,js,ts,jsx,tsx}'],
    },
  },
});
