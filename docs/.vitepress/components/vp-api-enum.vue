<script setup lang="ts">
import { computed } from 'vue';

import { isString } from '@echone-ui/utils';

import ApiTyping from './vp-api-typing.vue';

const props = defineProps({
  values: {
    required: true,
    type: Array,
  },
});

const processString = (s: unknown) => (isString(s) ? `'${s}'` : s);

// eslint-disable-next-line unicorn/no-array-callback-reference
const details = computed(() => props.values.map(processString).join(' | '));
</script>

<template>
  <ApiTyping :details="details" type="enum" />
</template>
