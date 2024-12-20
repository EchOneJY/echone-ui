import { type DefaultTheme, defineConfig } from 'vitepress';

export const en = defineConfig({
  description: 'The Atomic UI Library',
  lang: 'en-US',
  themeConfig: {
    darkModeSwitchLabel: 'Theme',
    darkModeSwitchTitle: 'Switch to Dark Mode',
    docFooter: {
      next: 'Next Page',
      prev: 'Previous Page',
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Echone. All Rights Reserved.`,
      message: 'Released under the MIT License.',
    },
    langMenuLabel: 'Language',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: 'Last updated on',
    },
    lightModeSwitchTitle: 'Switch to Light Mode',
    nav: nav(),
    outline: {
      label: 'Navigate',
    },
    returnToTopLabel: 'Back to top',
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
    { link: '/en/components/button', text: 'Button' },
    { link: '/en/components/icon', text: 'Icon' },
    { link: '/en/components/checkbox', text: 'Checkbox' },
    { link: '/en/components/tooltip', text: 'Tooltip' },
  ];
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { link: '/', text: 'Home' },
    {
      activeMatch: '^/en/components/',
      link: '/en/components/button',
      text: 'components',
    },
    {
      component: 'ThemePicker',
    },
  ];
}
