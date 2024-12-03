<script lang="ts" setup>
import type { ButtonGroupProps } from './button-group';

import { type HTMLAttributes, provide, reactive, toRef } from 'vue';

import { cn } from '@echone-ui/utils';

import { Primitive } from 'radix-vue';

import { buttonGroupContextKey } from './constants';

defineOptions({
  name: 'EoButtonGroup',
});
const props = defineProps<
  { class?: HTMLAttributes['class'] } & ButtonGroupProps
>();
provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    variant: toRef(props, 'variant'),
  }),
);
</script>

<template>
  <Primitive
    :class="cn('eo-button-group inline-block align-middle', props.class)"
  >
    <slot></slot>
  </Primitive>
</template>

<style>
.eo-button-group > button {
  position: relative;
  float: left;
}

.eo-button-group > button + button {
  margin-left: 0;
}

.eo-button-group > button:first-child {
  @apply border-r;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.eo-button-group > button:last-child {
  @apply border-l;

  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.eo-button-group > button:not(:first-child):not(:last-child) {
  border-radius: 0;
}
</style>
