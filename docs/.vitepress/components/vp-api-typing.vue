<script setup lang="ts">
import { EoIcon, EoTooltip } from '@echone-ui/components';
import { Info } from '@echone-ui/icons';

defineProps({
  details: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <span class="inline-flex items-center">
    <code class="api-typing mr-1">
      {{ type }}
    </code>
    <EoTooltip side="top">
      <template #trigger>
        <EoIcon class="ml-2 cursor-pointer text-sm text-gray-500">
          <Info />
        </EoIcon>
      </template>
      <div class="m-1" style="max-width: 600px">
        <code>
          {{ details }}
        </code>
      </div>
    </EoTooltip>
  </span>
</template>
