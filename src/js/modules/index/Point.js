export default class Point {
  constructor(c, r, rota) {
    this.x, this.y;
    this.centerX = c.x;
    this.centerY = c.y;
    this.radian = rota * (Math.PI / 180);
    this.radius = r;
    this.speed = Math.random() * 1 + 1;
    this.r = Math.random() * 0.2 + 0.2;
    this.rota = 0;
  }
  update(index) {
    const plus = Math.cos(this.rota * (Math.PI / 180)) * this.r;

    this.radius += plus

    const cos = Math.cos(this.radian) * this.radius;
    const sin = Math.sin(this.radian) * this.radius;

    this.x = cos + this.centerX;
    this.y = sin + this.centerY;

    this.rota += this.speed;
    if(this.rota > 360) {this.rota -= 360;};
  }

}
