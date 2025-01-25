class Entity {
  x: number;
  y: number;
  w: number;
  h: number;
  type: "environment" | "body" | "weapon";
  id: number;
  constructor(type: typeof this.type, x: number, y: number, w: number, h: number) {
    const entity = entityStore();
    this.type = type;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.id = entity.list.length;
  }
}
export {Entity};
