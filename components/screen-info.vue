<script setup lang="ts">
const screenInfo = screenInfoStore();
onMounted(() => {
  screenInfo.data = {
    maxXBlocks: Math.round(window.innerWidth / 10) - 1,
    maxYBlocks: Math.round(window.innerHeight / 10) - 1
  };
});
</script>
<template>
  <div class="bg-white absolute left-0 flex-col text-xs p-1">
    <span> Max X Blocks : {{ screenInfo.data.maxXBlocks }} </span>
    <span> Max Y Blocks : {{ screenInfo.data.maxYBlocks }} </span>
  </div>
</template>
