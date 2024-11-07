import type { Theme } from 'vitepress';

import { EoButton, EoCheckbox, EoIcon, EoTooltip } from '@echone-ui/components';

import DefaultTheme from 'vitepress/theme';

import { ApiEnumType, ApiTyping, Description, VPDemo } from '../components';

import './styles';

export default {
  enhanceApp({ app }) {
    app.component('Description', Description);
    app.component('VPDemo', VPDemo);
    app.component('EoButton', EoButton);
    app.component('EoCheckbox', EoCheckbox);
    app.component('EoIcon', EoIcon);
    app.component('EoTooltip', EoTooltip);
    app.component('ApiTyping', ApiTyping);
    app.component('EnumType', ApiEnumType);
  },

  extends: DefaultTheme,
} satisfies Theme;
