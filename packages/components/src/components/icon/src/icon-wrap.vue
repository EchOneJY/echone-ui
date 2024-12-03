<script lang="ts" setup>
import type { IconWrapProps } from './icon-wrap';

import { computed } from 'vue';
import type { CSSProperties } from 'vue';

import { addUnit, isUndefined } from '@echone-ui/utils';

defineOptions({
  inheritAttrs: false,
  name: 'EoIconWrap',
});
const props = defineProps<IconWrapProps>();

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
    class="relative inline-flex size-4 items-center justify-center leading-4 text-[var(--color)]"
    v-bind="$attrs"
  >
    <slot></slot>
  </i>
</template>
