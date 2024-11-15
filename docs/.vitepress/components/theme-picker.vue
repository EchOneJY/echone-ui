<script lang="ts" setup>
import type { Color } from './types/colors';

import { ref } from 'vue';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@echone-ui/components';
import { Paintbrush } from '@echone-ui/icons';

defineProps<{
  allColors: Color[];
}>();

const theme = ref<string>('zinc');

const setTheme = (val: string) => {
  theme.value = val;
};
</script>

<template>
  <div>
    <TooltipProvider
      v-for="(color, index) in allColors.slice(0, 5)"
      :key="index"
    >
      <Tooltip>
        <TooltipTrigger as-child>
          <button
            :key="index"
            :class="color === theme ? 'border-primary' : 'border-transparent'"
            class="border-border flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs"
            @click="setTheme(color)"
          >
            <!-- <span
              :style="{ backgroundColor: colors[color][6].rgb }"
              class="flex h-6 w-6 items-center justify-center rounded-full"
            > -->
            <Paintbrush v-if="color === theme" class="h-4 w-4" />
            <!-- </span> -->
          </button>
        </TooltipTrigger>
        <TooltipContent
          :side-offset="1"
          align="center"
          class="bg-zinc-900 capitalize text-zinc-50"
        >
          {{ allColors[index] }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
