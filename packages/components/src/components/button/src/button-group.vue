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
    :class="
      cn(
        '[&>button:first-child]:(rounded-br-none border-r) [&>button:last-child]:(rounded-bl-none border-l) inline-block rounded-tl-none rounded-tr-none align-middle [&>button+button]:ml-0 [&>button:not(:first-child):not(:last-child)]:rounded-none [&>button]:relative [&>button]:float-left',
        props.class,
      )
    "
  >
    <slot></slot>
  </Primitive>
</template>
