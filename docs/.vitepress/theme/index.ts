import type { Theme } from 'vitepress';

import {
  EoButton,
  EoCheckbox,
  EoIcon,
  EoIconWrap,
  EoTooltip,
} from '@echone-ui/components';

import DefaultTheme from 'vitepress/theme';

import {
  ApiEnumType,
  ApiTyping,
  Description,
  IconList,
  ThemePicker,
  VPDemo,
} from '../components';

import './styles';

export default {
  enhanceApp({ app }) {
    app.component('IconList', IconList);
    app.component('Description', Description);
    app.component('EoButton', EoButton);
    app.component('EoCheckbox', EoCheckbox);
    app.component('EoIcon', EoIcon);
    app.component('EoIconWrap', EoIconWrap);
    app.component('EoTooltip', EoTooltip);
    app.component('ApiTyping', ApiTyping);
    app.component('EnumType', ApiEnumType);
    app.component('VPDemo', VPDemo);
    app.component('ThemePicker', ThemePicker);
  },
  extends: DefaultTheme,
} satisfies Theme;
