<script setup lang="ts">
import {
  EoButton,
  EoHelpTooltip,
  EoIconButton,
  EoTooltip,
} from '@echone-ui/components';

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
  <EoHelpTooltip> 123123 </EoHelpTooltip>

  <EoTooltip :delay-duration="300" side="right">
    <template #trigger><span>123</span></template>
    123123
  </EoTooltip>

  <EoIconButton tooltip-side="right">
    <template #tooltip> 211234 </template>
    test
  </EoIconButton>
</template>
