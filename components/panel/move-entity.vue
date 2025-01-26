<script setup lang="ts">
import type {Entity} from "#imports";

const ui = uiStore();
let x = ref();
let y = ref();
let moveEntity = () => {
  let entity = ui.panel.data as Entity;
  let filledBlocks = getFilledBlocks(entity.id);
  for (let i = entity.x; i !== x.value; i++) {
    console.log(i);
    if (filledBlocks.x.includes(i)) throw "crash in" + i;
  }
};
</script>
<template>
  <div v-if="ui.panel.show.moveEntity" class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-2 bg-white z-30">
    <p class="text-2xl">Move Entity To :</p>
    <div class="flex-col *:*:border space-y-4 mt-5">
      <label for="x">
        x :
        <input name="x" v-model="x" type="number" />
      </label>
      <label for="y">
        y :
        <input name="y" v-model="y" type="number" />
      </label>
    </div>
    <div class="flex justify-between">
      <button class="bg-black text-white p-2 mt-5" @click="moveEntity">Submit</button>
      <button class="bg-black text-white p-2 mt-5" @click="ui.panel.show.moveEntity = false">close</button>
    </div>
  </div>
</template>
