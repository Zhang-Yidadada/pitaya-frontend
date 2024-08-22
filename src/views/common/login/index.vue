<script setup>
import { ref } from 'vue'

import { useAuthStore } from '@/store/modules/auth'

let model = ref({})

function handlePasswordInput(val) {
  console.log(val)
}

const authStore = useAuthStore()
function handleAccountLogin() {
  console.log(authStore)
  authStore.login(model.value.account, model.value.password)
}
</script>

<template>
  <div h-full flex justify-center items-center>
    <n-card w-400px rd-12px>
      <template #header>
        <div text-center>{{ $t('system.info.name') }}</div>
      </template>
      <!-- <template #header-extra>header-extra</template> -->

      <n-form :model="model" size="large" :show-label="false">
        <n-form-item path="account">
          <n-input
            :placeholder="$t('login.message.placeholder.username')"
            v-model:value="model.account"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="password">
          <n-input
            :placeholder="$t('login.message.placeholder.password')"
            v-model:value="model.password"
            type="password"
            @input="handlePasswordInput"
            @keydown.enter.prevent
          />
        </n-form-item>
        <div flex>
          <n-button @click="handleAccountLogin" w-full type="primary">{{
            $t('login.button.login')
          }}</n-button>
        </div>
      </n-form>

      <template #footer>
        <div text-center>{{ $t('login.message.powerby') }}</div>
      </template>
    </n-card>
  </div>
</template>
