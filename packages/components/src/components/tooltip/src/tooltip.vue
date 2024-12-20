<script setup lang="ts">
import type { EoTooltipProps } from './tooltip';

import { cn } from '@echone-ui/utils';

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
  effect: 'dark',
  side: 'top',
});
</script>

<template>
  <TooltipProvider :delay-duration="delayDuration">
    <Tooltip>
      <TooltipTrigger as-child tabindex="-1">
        <slot name="trigger"></slot>
      </TooltipTrigger>
      <TooltipContent
        :class="
          cn(
            'side-content bg-accent rounded-md',
            effect === 'dark'
              ? 'text-accent bg-slate-950'
              : 'bg-accent text-popover-foreground',
            contentClass,
          )
        "
        :side="side"
        :style="contentStyle"
      >
        <TooltipArrow
          :class="effect === 'dark' ? 'fill-slate-950' : 'fill-accent'"
          :height="6"
          :width="10"
        />
        <slot></slot>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
