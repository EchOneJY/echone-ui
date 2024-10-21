<script setup lang="ts">
import type { EoButtonProps } from './button';

import { computed, useSlots } from 'vue';

import { cn } from '@echone-ui/utils';

import { EoTooltip } from '../tooltip';
import EoButton from './button.vue';

interface Props extends EoButtonProps {
  class?: any;
  disabled?: boolean;
  onClick?: () => void;
  tooltip?: string;
  tooltipSide?: 'bottom' | 'left' | 'right' | 'top';
  variant?: 'icon';
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  onClick: () => {},
  tooltipSide: 'bottom',
  variant: 'icon',
});

const slots = useSlots();

const showTooltip = computed(() => !!slots.tooltip || !!props.tooltip);
</script>

<template>
  <EoButton
    v-if="!showTooltip"
    :class="cn('rounded-full', props.class)"
    :disabled="disabled"
    :variant="variant"
    size="icon"
    @click="onClick"
  >
    <slot></slot>
  </EoButton>

  <EoTooltip v-else :side="tooltipSide">
    <template #trigger>
      <EoButton
        :class="cn('rounded-full', props.class)"
        :disabled="disabled"
        :variant="variant"
        size="icon"
        @click="onClick"
      >
        <slot></slot>
      </EoButton>
    </template>
    <slot v-if="slots.tooltip" name="tooltip"> </slot>
    <template v-else>
      {{ tooltip }}
    </template>
  </EoTooltip>
</template>
