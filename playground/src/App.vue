<script setup lang="ts">
import EoButton from '../../packages/components/button';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div class="border"></div>
  <HelloWorld msg="" />
  <EoButton disabled> test </EoButton>
  <EoButton size="lg"> test </EoButton>
  <EoButton variant="destructive"> test </EoButton>
  <EoButton variant="heavy"> test </EoButton>
  <EoButton variant="link"> test </EoButton>
  <EoButton loading> test </EoButton>
  <EoButton variant="outline"> test </EoButton>
</template>
