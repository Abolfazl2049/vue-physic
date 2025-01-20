<script setup lang="ts">
import type {Entity} from "#imports";
let {data} = defineProps<{
  data: Entity;
}>();
let calculateEntityStyles = () => {
  return {width: `${data.w}px`, height: `${data.h}px`, top: `${data.x}px`, left: `${data.y}px`};
};
</script>
<template>
  <div class="bg-white absolute" :style="calculateEntityStyles()"></div>
</template>
