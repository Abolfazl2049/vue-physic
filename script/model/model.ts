class Entity {
  x: number;
  y: number;
  w: number;
  h: number;
  type: "environment" | "body" | "weapon";
  constructor(type: typeof this.type, x: number, y: number, w: number, h: number) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}
export {Entity};
