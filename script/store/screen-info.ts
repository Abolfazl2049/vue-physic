export const screenInfoStore = defineStore("screen-info", () => {
  let data = ref({
    maxXBlocks: 0,
    maxYBlocks: 0
  });
  return {
    data
  };
});
