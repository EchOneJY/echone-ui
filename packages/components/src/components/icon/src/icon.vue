<script lang="ts" setup>
import type { EoIconProps } from './icon';

import { computed } from 'vue';
import type { CSSProperties } from 'vue';

import { addUnit, isUndefined } from '@echone-ui/utils';

defineOptions({
  inheritAttrs: false,
  name: 'EoIcon',
});
const props = defineProps<EoIconProps>();

const style = computed<CSSProperties>(() => {
  const { color, size } = props;
  if (!size && !color) return {};

  return {
    '--color': color,
    fontSize: isUndefined(size) ? undefined : addUnit(size),
  };
});
</script>

<template>
  <i
    :style="style"
    class="relative inline-flex h-[1em] w-[1em] items-center justify-center leading-[1em] text-[var(--color)]"
    v-bind="$attrs"
  >
    <slot></slot>
  </i>
</template>
