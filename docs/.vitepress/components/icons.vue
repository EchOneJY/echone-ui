<script setup lang="ts">
import { computed, ref } from 'vue';

import * as Icons from '@echone-ui/icons';

import clipboardCopy from 'clipboard-copy';

import { ep, lucide } from './constant';

const copyIcon = ref(true);
const query = ref('');

const copyContent = async (content: string) => {
  try {
    await clipboardCopy(content);
  } catch {}
};

const copySvgIcon = async (name: string, refs: any) => {
  if (copyIcon.value) {
    await copyContent(`<eo-icon><${name} /></eo-icon>`);
  } else {
    let content = refs[name]?.[0].querySelector('svg')?.outerHTML ?? '';
    if (content) {
      content = content.replace(/data-v-\w+=""/, '');
    }
    await copyContent(content);
  }
};

const filterLucideCategories = computed(() => {
  const iconMap = new Map(Object.entries(Icons));

  return lucide.items
    .filter((i) => i.toLowerCase().includes(query.value.toLowerCase()))
    .filter((i) => !!iconMap.get(i))
    .map((i) => {
      return {
        icon: iconMap.get(i),
        name: i,
      };
    });
});
</script>

<template>
  <div style="text-align: right">
    <el-switch
      v-model="copyIcon"
      active-text="Copy icon code"
      inactive-text="Copy SVG content"
    />
  </div>
  <div class="icon-search-content">
    <!-- <el-input
      v-model="query"
      :prefix-icon="Icons.Search"
      size="large"
      placeholder="Search Icons"
    /> -->
  </div>

  <div class="demo-icon-title">Lucide Demos</div>
  <ul class="demo-icon-list">
    <li
      v-for="item in filterLucideCategories"
      :key="item.name"
      :ref="item.name"
      class="icon-item"
      @click="copySvgIcon(item.name, $refs)"
    >
      <span class="demo-svg-icon">
        <component :is="item.icon" size="24" />
        <span class="mt-[8px]">{{ item.name }}</span>
      </span>
    </li>
  </ul>

  <div class="demo-icon-title">Element-Plus Demos</div>
  <ul class="demo-icon-list">
    <li
      v-for="item in ep.items"
      :key="item"
      :ref="item.split(':')[1]"
      class="icon-item"
      @click="copySvgIcon(item, $refs)"
    >
      <span class="demo-svg-icon">
        <EoIcon :icon="item" class="text-2xl" />
        <span class="mt-[8px]">{{ item }}</span>
      </span>
    </li>
  </ul>
</template>

<style scoped>
.demo-icon-title {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}

.demo-icon-list {
  @apply border-l;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 0 !important;
  list-style: none;
  border-radius: 4px;
}

.icon-item {
  @apply mt-0 border-b border-r transition-colors;

  height: 90px;
  font-size: 13px;
  text-align: center;
}

.icon-item:nth-child(-n + 6) {
  @apply border-t;
}

.icon-item:hover {
  @apply text-primary bg-slate-100;
}

.demo-svg-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}
</style>
