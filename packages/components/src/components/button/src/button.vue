<script setup lang="ts">
import type { EoButtonProps } from './button';

import { computed, inject } from 'vue';

import { LoaderCircle } from '@echone-ui/icons';
import { cn } from '@echone-ui/utils';

import { Primitive } from 'radix-vue';

import { buttonVariants } from '../../../ui';
import { EoIconWrap } from '../../index';
import { buttonGroupContextKey } from './constants';

interface Props extends EoButtonProps {}

defineOptions({
  name: 'EoButton',
});

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  class: '',
  disabled: false,
  loading: false,
  loadingIcon: () => LoaderCircle,
  size: 'default',
  variant: 'default',
});

const buttonGroupContext = inject(buttonGroupContextKey);
const _size = computed(() => buttonGroupContext?.size || props?.size);
const _variant = computed(() => buttonGroupContext?.variant || props.variant);
const isDisabled = computed(() => {
  return props.disabled || props.loading;
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        buttonVariants({ variant: _variant, size: _size }),
        { 'cursor-not-allowed': isDisabled },
        props.class,
      )
    "
    :disabled="isDisabled"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <EoIconWrap v-else class="animate-spin">
        <component :is="loadingIcon" />
      </EoIconWrap>
    </template>
    <EoIconWrap v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon"></slot>
    </EoIconWrap>

    <span
      v-if="$slots.default"
      :class="{ 'ml-2': loading || icon || $slots.icon }"
      class="inline-flex items-center"
    >
      <slot></slot>
    </span>
  </Primitive>
</template>
