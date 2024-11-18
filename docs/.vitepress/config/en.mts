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
      copyright: `Copyright © 2020-${new Date().getFullYear()} Echone. All Rights Reserved.`,
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
    { link: '/button', text: 'Button' },
    { link: '/icon', text: 'Icon' },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Quick Start',
      items: [{ link: '/guide/quick-start', text: 'Quick Start' }],
    },
  ];
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { link: '/', text: 'Home' },
    {
      activeMatch: '^/components/',
      link: '/components/button',
      text: 'components',
    },
    {
      component: 'ThemePicker',
    },
  ];
}
