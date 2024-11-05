<script setup lang="ts">
import { computed, ref } from 'vue';

import { Collapsible, CollapsibleContent } from '@echone-ui/components';

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
  <div class="example rounded border">
    <div class="example-showcase">
      <slot name="source"></slot>
    </div>

    <div class="divide-y"></div>

    <div class="op-btns">
      <EoTooltip side="top">
        复制
        <template #trigger>
          <EoIcon class="op-btn" icon="carbon:copy" />
        </template>
      </EoTooltip>

      <EoTooltip side="top">
        查看源码
        <template #trigger>
          <EoIcon
            class="op-btn rotate-90"
            icon="carbon:chevron-sort"
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

    <Transition name="el-fade-in-linear">
      <div
        v-show="isOpen"
        class="example-float-control"
        tabindex="0"
        @click="toggleOpen(false)"
      >
        <EoIcon icon="carbon:caret-up" />
        <span>隐藏源码</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.example {
  .example-showcase {
    padding: 1.5rem;
    margin: 0.5px;
    background-color: var(--background);
  }

  .op-btns {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;
    padding: 0.5rem;

    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      color: var(--text-color-lighter);
      cursor: pointer;
      transition: 0.2s;

      &.github a {
        color: var(--text-color-lighter);
        transition: 0.2s;

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    position: sticky;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    background-color: var(--background, #fff);
    border-top: 1px solid var(--border);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;

    span {
      margin-left: 10px;
      font-size: 14px;
    }

    &:hover {
      color: var(--primary);
    }
  }
}
</style>
