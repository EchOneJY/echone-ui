<script setup lang="ts">
import { Copy, Info, Pin, Search, Settings, Sun } from '@echone-ui/icons';
</script>

<template>
  <div class="flex items-center space-x-2">
    <EoButton :icon="Search"> 搜索 </EoButton>
    <EoButton>
      <Settings class="h-4 w-4" />
    </EoButton>
    <EoButton variant="outline">
      <Pin class="h-4 w-4" />
    </EoButton>
    <EoButton variant="secondary">
      <Sun class="h-4 w-4" />
    </EoButton>
    <EoButton variant="destructive">
      <Info class="h-4 w-4" />
    </EoButton>
    <EoButton> <Search class="mr-2 h-4 w-4" /> 搜索 </EoButton>
    <EoButton> 复制<Copy class="ml-2 h-4 w-4" /> </EoButton>
  </div>
</template>
