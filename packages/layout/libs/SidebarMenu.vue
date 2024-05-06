<script setup>
import { defineOptions } from 'vue'
defineOptions({ name: 'SidebarMenu' })

import { menu } from '../mock/menu'

defineProps({
  mode: { type: String, default: 'vertical' }
})

function handleMenuParse(menuList) {
  return menuList.map((item) => {
    if (item.children && item.children.length > 0) {
      return {
        label: item.meta.title,
        key: item.meta.title,
        children: handleMenuParse(item.children)
      }
    } else {
      return {
        label: item.meta.title,
        key: item.meta.title
      }
    }
  })
}

const menuOptions = handleMenuParse(menu)

function handleUpdateValue(key, item) {
  console.log(key, item)
}
</script>

<template>
  <n-menu :options="menuOptions" accordion :mode="mode" @update:value="handleUpdateValue" />
</template>
