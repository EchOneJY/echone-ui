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
      copyright: `Copyright © ${new Date().getFullYear()} Echone. All Rights Reserved.`,
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
    sidebar: [
      {
        collapsed: false,
        text: 'Components',
        items: sidebarComponents(),
      },
    ],
  },
});

function sidebarComponents(): DefaultTheme.SidebarItem[] {
  return [
    { link: '/components/button', text: 'Button 按钮' },
    { link: '/components/icon', text: 'Icon 图标' },
    { link: '/components/checkbox', text: 'Checkbox 多选框' },
    { link: '/components/tooltip', text: 'Tooltip 文字提示' },
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
