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
    class="eo-icon relative inline-flex items-center justify-center text-[var(--color)]"
    v-bind="$attrs"
  >
    <slot></slot>
  </i>
</template>

<style>
.eo-icon {
  width: 1em;
  height: 1em;
  line-height: 1em;
}
</style>
