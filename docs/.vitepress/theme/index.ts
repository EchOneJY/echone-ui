import type { Theme } from 'vitepress';

import { EoButton, EoCheckbox, EoIcon } from '@echone-ui/components';

import DefaultTheme from 'vitepress/theme';

import './style.css';

export default {
  enhanceApp({ app }) {
    app.component('EoButton', EoButton);
    app.component('EoCheckbox', EoCheckbox);
    app.component('EoIcon', EoIcon);
  },

  extends: DefaultTheme,
} satisfies Theme;
