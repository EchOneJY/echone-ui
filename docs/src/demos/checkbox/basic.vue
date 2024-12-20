<script setup lang="ts">
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
</script>

<template>
  <div class="flex items-center space-x-4">
    <EoCheckbox v-model:checked="checked1">
      <span>Option1: {{ checked1 }}</span>
    </EoCheckbox>
    <EoCheckbox v-model:checked="checked2">
      <span>Option2: {{ checked2 }}</span>
    </EoCheckbox>
  </div>
</template>
