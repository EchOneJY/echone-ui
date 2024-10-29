<script setup lang="ts">
import { EoButton } from '@echone-ui/components';

import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div class="border"></div>
  <HelloWorld msg="" />
  <EoButton disabled> test </EoButton>
  <EoButton size="lg"> test </EoButton>
  <EoButton variant="destructive"> test </EoButton>
  <EoButton variant="link"> test </EoButton>
  <EoButton loading> test </EoButton>
  <EoButton variant="outline"> test </EoButton>
  <EoButton as-child>
    <a href="/login"> Login </a>
  </EoButton>
</template>
