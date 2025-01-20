import type {Entity} from "#imports";
export const entityStore = defineStore("entity", () => {
  let list = ref<Array<Entity>>([]);

  return {
    list
  };
});
