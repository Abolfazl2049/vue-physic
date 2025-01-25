<script setup lang="ts">
import type {Entity} from "#imports";

const ui = uiStore();
let x = ref();
let y = ref();
let moveEntity = () => {
  let entity = ui.panel.data as Entity;
  entity.x = x.value;
  entity.y = y.value;
  ui.panel.show.moveEntity = false;
};
</script>
<template>
  <div v-if="ui.panel.show.moveEntity" class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-2 bg-white z-30">
    <p class="text-2xl">Move Entity To :</p>
    <div class="flex-col *:*:border space-y-4 mt-5">
      <label for="x">
        x :
        <input name="x" v-model="x" />
      </label>
      <label for="y">
        y :
        <input name="y" v-model="y" />
      </label>
    </div>
    <button class="bg-black text-white p-2 mt-5" @click="moveEntity">Submit</button>
  </div>
</template>
