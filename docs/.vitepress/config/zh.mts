import { type DefaultTheme, defineConfig } from 'vitepress';

export const zh = defineConfig({
  description: '原子化CSS UI库',
  lang: 'zh-Hans',
  themeConfig: {
    darkModeSwitchLabel: '主题',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      next: '下一页',
      prev: '上一页',
    },
    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} Echone. All Rights Reserved.`,
      message: '基于 MIT 许可发布.',
    },
    langMenuLabel: '多语言',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: '最后更新于',
    },
    lightModeSwitchTitle: '切换到浅色模式',
    nav: nav(),
    outline: {
      label: '页面导航',
    },
    returnToTopLabel: '回到顶部',
    sidebar: {
      '/en/components/': {
        base: '/en/components/',
        items: sidebarComponents(),
      },
      '/en/guide/': { base: '/en/guide/', items: sidebarGuide() },
    },
  },
});

function sidebarComponents(): DefaultTheme.SidebarItem[] {
  return [
    { link: '/components/button', text: '按钮' },
    { link: '/components/icon', text: '图标' },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '快速开始',
      items: [{ link: '/guide/quick-start', text: '快速开始' }],
    },
  ];
}

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      activeMatch: '^/components/',
      link: '/components/button',
      text: '组件',
    },
    {
      component: 'ThemePicker',
    },
  ];
}
