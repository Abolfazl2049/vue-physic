<script setup lang="ts">
const entity = entityStore();
const screenInfo = screenInfoStore();
onMounted(() => {
  entity.list.push(new Entity("weapon", screenInfo.data.maxXBlocks - 20, screenInfo.data.maxYBlocks - 20, 2, 4));
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
