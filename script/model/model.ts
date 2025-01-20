class Entity {
  x: number;
  y: number;
  w: number;
  h: number;
  type: "environment" | "body" | "weapon";
  constructor(type: typeof this.type, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 100;
    this.type = type;
  }
}
export {Entity};
