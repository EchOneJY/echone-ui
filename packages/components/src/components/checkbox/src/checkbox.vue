<script setup lang="ts">
import type { CheckboxRootEmits } from 'radix-vue';

import type { EoCheckboxProps } from './checkbox';

import { useId } from 'vue';

import { cn } from '@echone-ui/utils';

import { useForwardPropsEmits } from 'radix-vue';

import { Checkbox } from '../../../ui/checkbox';

const props = defineProps<EoCheckboxProps>();

const emits = defineEmits<CheckboxRootEmits>();

const checked = defineModel<boolean>('checked');

const forwarded = useForwardPropsEmits(props, emits);

const id = useId();
</script>

<template>
  <div class="flex items-center">
    <Checkbox v-bind="forwarded" :id="id" v-model:checked="checked" />
    <label
      :class="
        cn('ml-2 cursor-pointer text-sm', {
          'cursor-not-allowed': disabled,
          'opacity-70': disabled,
        })
      "
      :for="id"
    >
      <slot></slot>
    </label>
  </div>
</template>
