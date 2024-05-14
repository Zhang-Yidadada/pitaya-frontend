<script setup>
import { SidebarMenu, GlobalHeader } from '@pkg/layout'

console.log(SidebarMenu)
</script>

<template>
  <div flex h-full>
    <aside w-220px>
      <SidebarMenu></SidebarMenu>
    </aside>
    <section flex-1 flex flex-col>
      <header h-40px>
        <GlobalHeader></GlobalHeader>
      </header>
      <main flex-1>
        <RouterView></RouterView>
      </main>
      <footer h-40px>footer</footer>
    </section>
  </div>
</template>
