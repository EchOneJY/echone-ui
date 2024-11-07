import tailwind from 'tailwindcss';
import { defineConfigWithTheme, postcssIsolateStyles } from 'vitepress';

import { MarkdownTransform } from '../plugins/markdown-transform';
import { mdPlugin } from './plugins';

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  description: 'The Atomic UI Library',
  markdown: {
    preConfig: (md) => mdPlugin(md),
  },
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { link: '/', text: 'Home' },
      {
        activeMatch: '^/components/',
        link: '/components/button',
        text: '基础组件',
      },
    ],
    search: {
      provider: 'local',
    },
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { link: '/components/button', text: 'Button' },
            { link: '/components/checkbox', text: 'Checkbox' },
            { link: '/components/icon', text: 'Icon' },
            { link: '/components/tooltip', text: 'Tooltip' },
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
