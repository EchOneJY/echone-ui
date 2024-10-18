<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue';

import { cn } from '@echone-ui/utils';
import { ChevronDownIcon } from 'lucide-vue-next';
import {
  SelectScrollDownButton,
  type SelectScrollDownButtonProps,
  useForwardProps,
} from 'radix-vue';

const props = defineProps<
  { class?: HTMLAttributes['class'] } & SelectScrollDownButtonProps
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollDownButton
    v-bind="forwardedProps"
    :class="
      cn('flex cursor-default items-center justify-center py-1', props.class)
    "
  >
    <slot>
      <ChevronDownIcon />
    </slot>
  </SelectScrollDownButton>
</template>
