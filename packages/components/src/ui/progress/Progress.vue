<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue';

import { cn } from '@echone-ui/utils';
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'radix-vue';

const props = withDefaults(
  defineProps<{ class?: HTMLAttributes['class'] } & ProgressRootProps>(),
  {
    modelValue: 0,
  },
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="
      cn(
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        props.class,
      )
    "
  >
    <ProgressIndicator
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
      class="bg-primary h-full w-full flex-1 transition-all"
    />
  </ProgressRoot>
</template>
