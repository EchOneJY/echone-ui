import type { TooltipContentProps } from 'radix-vue';

import type { StyleValue } from 'vue';

export interface EoTooltipProps {
  contentClass?: any;
  contentStyle?: StyleValue;
  delayDuration?: number;
  side?: TooltipContentProps['side'];
}
