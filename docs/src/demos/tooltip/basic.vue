<template>
  <div class="space-x-4">
    <EoTooltip content="Tooltip content" effect="light" side="top">
      top prompts info
      <template #trigger>
        <EoButton variant="outline">top</EoButton>
      </template>
    </EoTooltip>
    <EoTooltip content="Tooltip content" side="right">
      right prompts info
      <template #trigger>
        <EoButton variant="outline">right</EoButton>
      </template>
    </EoTooltip>
    <EoTooltip content="Tooltip content" effect="light" side="bottom">
      bottom prompts info
      <template #trigger>
        <EoButton variant="outline">bottom</EoButton>
      </template>
    </EoTooltip>
    <EoTooltip content="Tooltip content" side="left">
      left prompts info
      <template #trigger>
        <EoButton variant="outline">left</EoButton>
      </template>
    </EoTooltip>
  </div>
</template>
