<script setup>
import { lightTheme } from 'naive-ui'

import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <n-config-provider :theme="lightTheme" h-full>
    <n-loading-bar-provider>
      <HelloWorld msg="testing"></HelloWorld>
      <RouterView></RouterView>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
