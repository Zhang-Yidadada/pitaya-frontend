<script setup>
import { lightTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="lightTheme" h-full>
    <n-loading-bar-provider>
      <RouterView></RouterView>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
