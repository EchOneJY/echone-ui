<script setup lang="ts">
import type { EoTooltipProps } from './tooltip';

import { CircleHelp } from '@echone-ui/icons';
import { cn } from '@echone-ui/utils';

import { useForwardProps } from 'radix-vue';

import Tooltip from './tooltip.vue';

defineOptions({
  name: 'EoHelpTooltip',
});

const props = withDefaults(
  defineProps<{ triggerClass?: string } & EoTooltipProps>(),
  {
    delayDuration: 300,
  },
);

const { triggerClass, ...rest } = props;

const forwarded = useForwardProps(rest);
</script>

<template>
  <Tooltip v-bind="forwarded">
    <template #trigger>
      <slot name="trigger">
        <CircleHelp
          :class="
            cn(
              'text-foreground/80 hover:text-foreground inline-flex size-5 cursor-pointer',
              triggerClass,
            )
          "
        />
      </slot>
    </template>
    <slot></slot>
  </Tooltip>
</template>
