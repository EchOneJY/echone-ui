import type { Theme } from 'vitepress';

import DefaultTheme from 'vitepress/theme';

import EoButton from '../../../packages/components/button';

import 'virtual:uno.css';
import '@echone-ui/unocss-config/uno.css';

export default {

  enhanceApp({ app }) {
    app.component('EoButton', EoButton);
  },

  extends: DefaultTheme,
} satisfies Theme;
