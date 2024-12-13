<script setup lang="ts">
import { CircleHelp } from '@echone-ui/icons';
import { cn } from '@echone-ui/utils';

import Tooltip from './tooltip.vue';

defineOptions({
  name: 'EoHelpTooltip',
});

defineProps<{ triggerClass?: string }>();
</script>

<template>
  <Tooltip :delay-duration="300" side="right">
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
