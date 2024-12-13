<script setup lang="ts">
import type { EoTooltipProps } from './tooltip';

import { TooltipArrow } from 'radix-vue';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../../ui';

defineOptions({
  name: 'EoTooltip',
});
withDefaults(defineProps<EoTooltipProps>(), {
  delayDuration: 0,
  side: 'right',
});
</script>

<template>
  <TooltipProvider :delay-duration="delayDuration">
    <Tooltip>
      <TooltipTrigger as-child tabindex="-1">
        <slot name="trigger"></slot>
      </TooltipTrigger>
      <TooltipContent
        :class="contentClass"
        :side="side"
        :style="contentStyle"
        class="side-content text-popover-foreground bg-accent rounded-md"
      >
        <TooltipArrow :height="6" :width="10" class="fill-accent" />
        <slot></slot>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
