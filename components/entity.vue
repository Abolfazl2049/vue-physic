<script setup lang="ts">
import type {Entity} from "#imports";
let {} = defineProps<{
  data: Entity;
}>();
</script>
<template>
  <div class="">
    {{ data }}
  </div>
</template>
