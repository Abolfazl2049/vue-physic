<script setup lang="ts">
const screenInfo = screenInfoStore();
let getScreenSize = () => {
  return {width: `${screenInfo.data.maxXBlocks}px`, height: `${screenInfo.data.maxYBlocks}px`};
};
</script>
<template>
  <div id="screen" class="relative z-20 border border-slate-600" :style="getScreenSize()">
    <slot />
  </div>
</template>
