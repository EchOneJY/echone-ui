import tailwind from 'tailwindcss';
import { defineConfig, postcssIsolateStyles } from 'vitepress';

import { MarkdownTransform } from '../plugins/markdown-transform';
import { mdPlugin } from './plugins';

// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
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
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { link: '/components/button', text: 'Button' },
            { link: '/components/icon', text: 'Icon' },
          ],
        },
      ],
      '/guide/': [
        {
          text: '快速开始',
          items: [{ link: '/guide/quick-start', text: 'Quick Start' }],
        },
      ],
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
