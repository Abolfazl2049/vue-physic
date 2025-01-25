<script setup lang="ts">
const entity = entityStore();
const screenInfo = screenInfoStore();
onMounted(() => {
  entity.list.push(new Entity("body", 50, 50, 10, 10));
});
</script>
<template>
  <div class="flex-center h-screen relative dot-pattern">
    <Screen>
      <ScreenInfo />
      <Entity v-for="i in entity.list" :data="i" />
    </Screen>
    <PanelNewEntity />
    <PanelMoveEntity />
  </div>
</template>
