import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import { defineConfig, postcssIsolateStyles } from 'vitepress';

import { MarkdownTransform } from '../plugins/markdown-transform';
import { mdPlugin } from './plugins';

// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
  lastUpdated: true,
  markdown: {
    config: (md) => mdPlugin(md),
  },
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    siteTitle: 'Echone UI',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  title: 'Echone UI',
  vite: {
    build: {
      chunkSizeWarningLimit: Infinity,
    },
    css: {
      postcss: {
        plugins: [
          tailwind(),
          autoprefixer(),
          postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] }),
        ],
      },
    },
    json: {
      stringify: true,
    },
    plugins: [MarkdownTransform()],
  },
});
