import type { EoButtonProps } from './button';

import type { InjectionKey } from 'vue';

export interface ButtonGroupContext {
  size?: EoButtonProps['size'];
  variant?: EoButtonProps['variant'];
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
  'buttonGroupContextKey',
);
