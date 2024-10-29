<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

import { cn } from '@echone-ui/utils';

import { AvatarRoot } from 'radix-vue';

import { avatarVariant, type AvatarVariants } from '.';

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class'];
    shape?: AvatarVariants['shape'];
    size?: AvatarVariants['size'];
  }>(),
  {
    shape: 'circle',
    size: 'sm',
  },
);
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot></slot>
  </AvatarRoot>
</template>
