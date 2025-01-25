let getFilledBlocks = (movingEntityId: number) => {
  const entity = entityStore();
  let entityList = entity.list.filter(el => el.id !== movingEntityId);
  let filledBlocks = {x: [], y: []};
  for (let i of entityList) {
    console.log("x:", i.x, i.x + i.w);
    console.log("y:", i.y, i.y + i.h);
    for (let x = i.x; x < i.x + i.w; x++) filledBlocks.x.push(x);
    for (let x = i.y; x < i.y + i.h; x++) filledBlocks.y.push(x);
  }
  return filledBlocks;
};
export {getFilledBlocks};
