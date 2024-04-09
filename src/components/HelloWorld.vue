<script setup>
import { useLoadingBar } from 'naive-ui'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const loadingBar = useLoadingBar()

function handleClickLoading() {
  loadingBar.start()
}
</script>

<template>
  <div class="greetings" pt-10px>
    <n-button @click="handleClickLoading">Loading</n-button>
  </div>
</template>
