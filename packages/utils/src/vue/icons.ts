import type { Component } from 'vue';

import { definePropType } from './props';

export const iconPropType = definePropType<Component | string>([
  String,
  Object,
  Function,
]);
