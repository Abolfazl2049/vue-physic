<script setup lang="ts">
const entity = entityStore();
onMounted(() => {
  for (let i of new Array(4)) entity.list.push(new Entity("weapon"));
});
</script>
<template>
  <div id="screen" class="h-screen bg-black relative">
    <Entity v-for="i in entity.list" :data="i"></Entity>
  </div>
</template>
