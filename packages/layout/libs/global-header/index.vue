<script setup>
import { defineOptions } from 'vue'
import {
  Settings24Regular,
  LocalLanguage24Regular,
  DarkTheme24Regular,
  FullScreenMaximize24Filled
} from '@vicons/fluent'
import { IconButton } from '@pkg/components'
defineOptions({ name: 'GlobalHeader' })
</script>
<template>
  <div class="h-full flex flex-items-center flex-justify-end bg-gray">
    <IconButton tooltipContent="demo" icon="mdi-light:home"></IconButton>
    <div class="flex flex-items-center">
      <n-tooltip>
        <template #trigger>
          <n-button quaternary>
            <n-icon size="24" :component="FullScreenMaximize24Filled"></n-icon>
          </n-button>
        </template>
        Fullscreen
      </n-tooltip>
    </div>
    <div class="flex flex-items-center">
      <n-tooltip>
        <template #trigger>
          <n-button text>
            <n-icon size="24" :component="LocalLanguage24Regular"></n-icon>
          </n-button>
        </template>
        Multi Language
      </n-tooltip>
    </div>
    <div class="flex flex-items-center">
      <n-tooltip>
        <template #trigger>
          <n-button text>
            <n-icon size="24" :component="DarkTheme24Regular"></n-icon>
          </n-button>
        </template>
        Theme
      </n-tooltip>
    </div>
    <div class="flex flex-items-center">
      <n-tooltip triggers="hover">
        <template #trigger>
          <n-button text>
            <n-icon size="24" :component="Settings24Regular"></n-icon>
          </n-button>
        </template>
        Settings
      </n-tooltip>
    </div>
  </div>
</template>
