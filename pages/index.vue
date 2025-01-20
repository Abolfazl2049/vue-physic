<script setup lang="ts">
const entity = entityStore();

onMounted(() => {
  // for (let i of new Array(2)) entity.list.push(new Entity("weapon", Math.random() * 500, Math.random() * 500));
});
</script>
<template>
  <div class="flex-center h-screen relative dot-pattern">
    <Screen>
      <ScreenInfo />
      <Entity v-for="i in entity.list" :data="i" />
    </Screen>
  </div>
</template>
