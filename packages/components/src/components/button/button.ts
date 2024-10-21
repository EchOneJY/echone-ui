import type { AsTag } from 'radix-vue';

import type { ButtonVariants } from '../../ui';

import type { Component } from 'vue';

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
  loading?: boolean;
  size?: ButtonVariants['size'];
  variant?: 'icon' | ButtonVariants['variant'];
}