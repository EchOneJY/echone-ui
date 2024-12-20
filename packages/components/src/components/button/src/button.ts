import type { AsTag } from 'radix-vue';

import type { ButtonVariants } from '../../../ui';

import type { Component } from 'vue';

import { iconPropType } from '@echone-ui/utils';

export interface EoButtonProps {
  /**
   * The element or component this component should render as. Can be overwrite by `asChild`
   * @defaultValue "div"
   */
  as?: AsTag | Component;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * Read our [Composition](https://www.radix-vue.com/guides/composition.html) guide for more details.
   */
  asChild?: boolean;
  class?: any;
  disabled?: boolean;
  icon?: typeof iconPropType;
  loading?: boolean;
  loadingIcon?: typeof iconPropType;
  size?: ButtonVariants['size'];
  variant?: ButtonVariants['variant'];
}