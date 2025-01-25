export const uiStore = defineStore("ui", () => {
  const panel = ref(<
    {
      show: {
        moveEntity: boolean;
        newEntity: boolean;
      };
      data: any;
    }
  >{
    show: {
      newEntity: false,
      moveEntity: false
    },
    data: undefined
  });
  return {
    panel
  };
});
