import type { TooltipContentProps } from 'radix-vue';

import type Tooltip from './tooltip.vue';

import type { StyleValue } from 'vue';

export interface TooltipProps {
  contentClass?: any;
  contentStyle?: StyleValue;
  delayDuration?: number;
  side?: TooltipContentProps['side'];
}

export type TooltipInstance = InstanceType<typeof Tooltip>;
