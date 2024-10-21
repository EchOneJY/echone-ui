import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: 'The Atomic UI Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { link: '/', text: 'Home' },
      {
        activeMatch: '^/components/',
        link: '/components/button',
        text: '基础组件',
      },
    ],

    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [{ link: '/components/button', text: 'Button 按钮' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  title: 'Echone UI',
});
