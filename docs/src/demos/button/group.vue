<script setup lang="ts">
import { EoButtonGroup, EoIconWrap } from '@echone-ui/components';
import { ArrowLeft, ArrowRight } from '@echone-ui/icons';
</script>

<template>
  <div class="space-x-4">
    <EoButtonGroup>
      <EoButton :icon="ArrowLeft"> Prev </EoButton>
      <EoButton>
        Next
        <EoIconWrap class="ml-2">
          <ArrowRight />
        </EoIconWrap>
      </EoButton>
    </EoButtonGroup>

    <EoButtonGroup size="sm" variant="outline">
      <EoButton> Prev </EoButton>
      <EoButton> Default </EoButton>
      <EoButton> Next </EoButton>
    </EoButtonGroup>
  </div>
</template>
