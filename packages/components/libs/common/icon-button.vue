<script setup>
import { Icon } from '@iconify/vue'

import { createReusableTemplate } from '@vueuse/core'
defineOptions({
  name: 'IconButton'
})

defineProps({
  icon: { type: String },
  tooltipContent: { type: String },
  tooltipPlacement: { type: String, default: 'bottom' }
})

const [DefinePureButton, PureButton] = createReusableTemplate()
</script>
<template>
  <DefinePureButton>
    <n-button quaternary>
      <!-- <n-icon size="24" :component="icon"></n-icon> -->
      <Icon :icon="icon" size="24px" />
    </n-button>
  </DefinePureButton>

  <n-tooltip v-if="tooltipContent">
    <template #trigger> <PureButton></PureButton></template>
    {{ tooltipContent }}
  </n-tooltip>
  <PureButton v-else></PureButton>
</template>
