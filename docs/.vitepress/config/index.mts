import { defineConfig } from 'vitepress';
import UnoCSS from 'unocss/vite';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Echone UI",
  description: "The Atomic UI Library",
  vite: {
 plugins: [UnoCSS()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '基础组件',
        activeMatch: '^/components/',
        link: '/components/button'
      },
    ],

    sidebar: {
        '/components/': [
            {
                text: '基础组件',
                items: [
                  { text: 'Button 按钮', link: '/components/button' },
                ]
            }
        ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
