<script setup lang="ts">
import { h } from 'vue';

import { IconifyIcon } from '@echone-ui/icons';

const loadingIcon = h(IconifyIcon, {
  icon: 'ep:loading',
  style: { fontSize: '24px' },
});
</script>

<template>
  <div class="space-x-2">
    <EoButton loading> Loading </EoButton>
    <EoButton :loading-icon="loadingIcon" loading> Custom Icon </EoButton>
  </div>
</template>
