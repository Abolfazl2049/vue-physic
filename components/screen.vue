<script setup lang="ts">
const screenInfo = screenInfoStore();
let getScreenSize = () => {
  return {width: `${screenInfo.data.maxXBlocks * 10}px`, height: `${screenInfo.data.maxYBlocks * 10}px`};
};
</script>
<template>
  <div id="screen" class="relative z-20 border border-slate-600" :style="getScreenSize()">
    <slot />
  </div>
</template>
