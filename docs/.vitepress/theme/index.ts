import type { Theme } from 'vitepress';

import { Button as EoButton } from '@echone-ui/components';
import DefaultTheme from 'vitepress/theme';

export default {
  enhanceApp({ app }) {
    app.component('EoButton', EoButton);
  },

  extends: DefaultTheme,
} satisfies Theme;
