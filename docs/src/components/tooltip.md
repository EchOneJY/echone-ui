# Tooltip 提示

<script setup>
import {  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,} from '@echone-ui/components'
</script>

  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <EoButton variant="outline">
          Hover
        </EoButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
