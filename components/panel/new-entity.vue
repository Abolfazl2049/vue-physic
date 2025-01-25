<script setup lang="ts">
const ui = uiStore();
const entity = entityStore();
let x = ref();
let y = ref();
let w = ref();
let h = ref();
let addEntity = () => {
  entity.list.push(new Entity("environment", x.value, y.value, w.value, h.value));
  ui.panel.show.newEntity = false;
};
</script>
<template>
  <div v-if="ui.panel.show.newEntity" class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-2 bg-white z-30">
    <div class="flex-col *:border gap-4 *:p-2">
      <label for="x">
        x :
        <input v-model="x" name="x" type="number" />
      </label>
      <label for="y">
        y :
        <input v-model="y" name="y" type="number" />
      </label>
      <label for="w">
        w :
        <input v-model="w" name="w" type="number" />
      </label>
      <label for="h">
        h :
        <input v-model="h" name="h" type="number" />
      </label>
    </div>
    <button class="bg-black text-white mt-5 w-full" @click="addEntity">Add</button>
  </div>
  <button class="bg-white fixed bottom-5 left-5 p-2 rounded-lg text-xl z-20" @click="ui.panel.show.newEntity = !ui.panel.show.newEntity">new entity</button>
</template>
