<script setup lang="ts">
import { computed, ref } from 'vue';

import { Collapsible, CollapsibleContent } from '@echone-ui/components';
import { ChevronsLeftRight } from '@echone-ui/icons';

const props = defineProps({
  source: {
    required: true,
    type: String,
  },
});

const decoded = computed(() => {
  return decodeURIComponent(props.source);
});

const isOpen = ref(false);

function toggleOpen(open: boolean) {
  isOpen.value = open === undefined ? !isOpen.value : open;
}
</script>

<template>
  <div class="rounded border">
    <div class="m-[0.5px] bg-[--background] p-6">
      <slot name="source"></slot>
    </div>

    <div class="divide-y border-t-[1px]"></div>

    <div class="flex h-10 items-center justify-end p-2">
      <EoTooltip side="top">
        查看源码
        <template #trigger>
          <ChevronsLeftRight
            class="hover:bg-accent size-7 cursor-pointer rounded-full p-1.5"
            @click="toggleOpen(!isOpen)"
          />
        </template>
      </EoTooltip>
    </div>

    <Collapsible v-model:open="isOpen">
      <CollapsibleContent class="space-y-2">
        <div v-html="decoded"></div>
      </CollapsibleContent>
    </Collapsible>

    <Transition name="fade">
      <div
        v-show="isOpen"
        class="sticky bottom-0 left-0 right-0 z-10 flex h-10 cursor-pointer items-center justify-center border-t-[1px] bg-white p-2 hover:text-sky-600"
        tabindex="0"
        @click="toggleOpen(false)"
      >
        <EoIcon icon="carbon:caret-up" />
        <span class="ml-[10px] text-sm">隐藏源码</span>
      </div>
    </Transition>
  </div>
</template>
