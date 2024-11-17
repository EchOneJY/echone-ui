<script lang="ts" setup>
import type { Color } from './types/colors';

import { onMounted, ref, watch } from 'vue';

import {
  Button,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@echone-ui/components';
import { Check, MoonStar, Paintbrush, Sun } from '@echone-ui/icons';

import { useData } from 'vitepress';

const allColors: Color[] = [
  {
    color: 'hsl(212 100% 45%)',
    name: 'default',
  },
  {
    color: 'hsl(240 5.9% 10%)',
    name: 'zinc',
  },
  {
    color: 'hsl(346.8 77.2% 49.8%)',
    name: 'rose',
  },
  {
    color: 'hsl(221.2 83.2% 53.3%)',
    name: 'blue',
  },
  {
    color: 'hsl(142.1 76.2% 36.3%)',
    name: 'green',
  },
  {
    color: 'hsl(24.6 95% 53.1%)',
    name: 'orange',
  },
  {
    color: 'hsl(222.2 47.4% 11.2%)',
    name: 'slate',
  },
  {
    color: 'hsl(220.9 39.3% 11%)',
    name: 'gray',
  },
  {
    color: 'hsl(0 0% 9%)',
    name: 'neutral',
  },
  {
    color: 'hsl(47.9 95.8% 53.1%)',
    name: 'yellow',
  },
  {
    color: 'hsl(262.1 83.3% 57.8%)',
    name: 'violet',
  },
];

const { isDark } = useData();
const RADII = [0, 0.25, 0.5, 0.75, 1];

const theme = ref<string>('default');
const radius = ref<number>(0.5);

const setTheme = (val: string) => {
  theme.value = val;
};

const setRadius = (val: number) => {
  radius.value = val;
};

// Whenever the component is mounted, update the document class list
onMounted(() => {
  document.documentElement.style.setProperty('--radius', `${radius.value}rem`);
  document.documentElement.dataset.theme = theme.value;
});

// Whenever the theme value changes, update the document class list
watch(theme, (theme) => {
  document.documentElement.dataset.theme = theme;
});

// Whenever the radius value changes, update the document style
watch(radius, (radius) => {
  document.documentElement.style.setProperty('--radius', `${radius}rem`);
});
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <a
        class="line-height-[var(--vp-nav-height)px] hover:text-primary/90 flex cursor-pointer items-center px-[12px]"
        size="icon"
        variant="ghost"
      >
        <Paintbrush class="h-4 w-4" />
      </a>
    </PopoverTrigger>
    <PopoverContent :side-offset="8" align="end" class="w-96">
      <div class="p-4">
        <div class="grid space-y-1">
          <h1 class="text-md text-foreground font-semibold">Customize</h1>
          <p class="text-muted-foreground text-xs">
            Pick a style and color for your components.
          </p>
        </div>
        <div class="space-y-1.5 pt-6">
          <Label class="text-xs" for="color"> Color </Label>
          <div class="grid grid-cols-3 gap-2 py-1.5">
            <Button
              v-for="(color, index) in allColors"
              :key="index"
              :class="color.name === theme ? 'border-foreground border-2' : ''"
              class="h-8 justify-start px-3"
              variant="outline"
              @click="setTheme(color.name)"
            >
              <span
                :style="{ backgroundColor: color.color }"
                class="flex h-5 w-5 items-center justify-center rounded-full"
              >
                <Check v-if="color.name === theme" class="h-3 w-3 text-white" />
              </span>
              <span class="ml-2 text-xs capitalize">
                {{ color.name }}
              </span>
            </Button>
          </div>
        </div>
        <div class="space-y-1.5 pt-6">
          <Label class="text-xs" for="radius"> Radius </Label>
          <div class="grid grid-cols-5 gap-2 py-1.5">
            <Button
              v-for="(r, index) in RADII"
              :key="index"
              :class="r === radius ? 'border-foreground border-2' : ''"
              class="h-8 justify-center px-3"
              variant="outline"
              @click="setRadius(r)"
            >
              <span class="text-xs">
                {{ r }}
              </span>
            </Button>
          </div>
        </div>
        <div class="space-y-1.5 pt-6">
          <Label class="text-xs" for="theme"> Theme </Label>

          <div class="flex space-x-2 py-1.5">
            <Button
              :class="{ 'border-foreground border-2': !isDark }"
              class="h-8"
              variant="outline"
              @click="isDark = false"
            >
              <Sun class="mr-2 h-4 w-4" />
              <span class="text-xs">Light</span>
            </Button>
            <Button
              :class="{ 'border-foreground border-2': isDark }"
              class="h-8"
              variant="outline"
              @click="isDark = true"
            >
              <MoonStar class="mr-2 h-4 w-4" />
              <span class="text-xs">Dark</span>
            </Button>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
