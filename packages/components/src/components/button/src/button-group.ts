import type { EoButtonProps } from './button';
import type ButtonGroup from './button-group.vue';

export type ButtonGroupProps = {
  /**
   * @description control the size of buttons in this button-group
   */
  size?: EoButtonProps['size'];
  /**
   * @description control the type of buttons in this button-group
   */
  variant?: EoButtonProps['variant'];
};

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>;
