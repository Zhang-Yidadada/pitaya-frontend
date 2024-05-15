<script setup>
import { ref } from 'vue'
let model = ref({})

function handlePasswordInput(val) {
  console.log(val)
}
</script>

<template>
  <div h-full flex justify-center items-center>
    <n-card w-400px rd-12px>
      <template #header>
        <div text-center>Pitaya Management</div>
      </template>
      <!-- <template #header-extra>header-extra</template> -->

      <n-form :model="model" size="large" :show-label="false">
        <n-form-item path="age">
          <n-input placeholder="请输入用户名" v-model:value="model.age" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password">
          <n-input placeholder="请输入密码" v-model:value="model.password" type="password" @input="handlePasswordInput"
            @keydown.enter.prevent />
        </n-form-item>
        <div flex justify-end>
          <n-button type="primary">验证</n-button>
        </div>
      </n-form>

      <template #footer>
        <div text-center>Yida Lab 出品</div>
      </template>
    </n-card>
  </div>
</template>