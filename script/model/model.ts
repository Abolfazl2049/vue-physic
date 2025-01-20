class Entity {
  x: number;
  y: number;
  w: number;
  h: number;
  type: "environment" | "body" | "weapon";
  constructor(type: typeof this.type) {
    this.x = 250;
    this.y = 250;
    this.w = 100;
    this.h = 100;
    this.type = type;
  }
}
export {Entity};
