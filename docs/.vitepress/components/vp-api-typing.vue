<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@echone-ui/components';
import { Info } from '@echone-ui/icons';

const props = defineProps({
  details: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
});

console.log(props);
</script>

<template>
  <span class="inline-flex items-center">
    <code class="api-typing mr-1">
      {{ type }}
    </code>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <Info />
        </TooltipTrigger>
        <TooltipContent>
          <div class="m-1" style="max-width: 600px">
            <code>
              {{ details }}
            </code>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <EoTooltip v-if="details">
      <template #trigger>
        <EoButton class="text-4 p-2">
          <Info />
        </EoButton>
      </template>

      <slot>
        <div class="m-1" style="max-width: 600px">
          <code>
            {{ details }}
          </code>
        </div>
      </slot>
    </EoTooltip>
  </span>
</template>
