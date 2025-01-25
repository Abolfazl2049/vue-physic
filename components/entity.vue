<script setup lang="ts">
import type {Entity} from "#imports";
let {data} = defineProps<{
  data: Entity;
}>();
const ui = uiStore();
let calculateEntityStyles = () => {
  return {width: `${data.w * 10}px`, height: `${data.h * 10}px`, top: `${data.y * 10}px`, left: `${data.x * 10}px`};
};
</script>
<template>
  <div
    @contextmenu.prevent="(ui.panel.data = data), (ui.panel.show.moveEntity = true)"
    class="bg-white absolute border border-black transition-all"
    :style="calculateEntityStyles()"></div>
</template>
