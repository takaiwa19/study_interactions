const Point = require('./Point').default;

export default class DrawKvImage {
  constructor() {
    this.canvas = document.getElementById('kv-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.MAX = 5;
    this.RADIUS = [500, 400, 350, 500, 450];
    this.FPS = 60;
    this.CENTER = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2
    }
    console.log(this.canvas.height);
    this.timer;
    this.point = [];
    this.img;

    this.init();
    this.update();
    this.start();

  }
  init() {
    const rota = 360 / this.MAX;
    for (var i = 0; i < this.MAX; i++) {
      this.point[i] = new Point(this.CENTER, this.RADIUS[i], rota * i);
    }
    this.draw2();
    console.log(this.point);
  }
  update() {
    for (var i = 0; i < this.MAX; i++) {
      this.point[i].update(i);
    }
    this.draw();
  }
  draw() {
    this.ctx.restore();
    this.ctx.save();

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //ウニョウニョの描画
    this.ctx.fillStyle = 'darkblue';
    this.ctx.beginPath();
    var xc1 = (this.point[0].x + this.point[this.MAX - 1].x) / 2;
    var yc1 = (this.point[0].y + this.point[this.MAX - 1].y) / 2;
    this.ctx.moveTo(xc1, yc1);
    for(var i = 0; i < this.MAX - 1; i++){
      var xc = (this.point[i].x + this.point[i + 1].x) / 2;
      var yc = (this.point[i].y + this.point[i + 1].y) / 2;
      this.ctx.quadraticCurveTo(this.point[i].x, this.point[i].y, xc, yc)
    }
    this.ctx.quadraticCurveTo(this.point[i].x, this.point[i].y, xc1, yc1);
    this.ctx.closePath();
    this.ctx.clip();

    //グラデーションの描画
    this.ctx.beginPath();
    //グラデーション領域をセット
    var grad  = this.ctx.createLinearGradient(0,0, this.canvas.width,this.canvas.height);
    // グラデーション終点のオフセットと色をセット
    grad.addColorStop(0,"#f9c7c0");
    grad.addColorStop(0.4,"#f9c7c0");
    grad.addColorStop(0.8,"#04acaa");
    grad.addColorStop(1,"#04acaa");
    // グラデーションをfillStyleプロパティにセット
    this.ctx.fillStyle = grad;
    // 矩形を描画
    this.ctx.rect(0,0, this.canvas.width,this.canvas.height);
    this.ctx.fill();

  }
  draw2() {
    /* Imageオブジェクトを生成 */
    this.img = new Image();
    this.img.src = "/img/index/image.jpg";
    // /* 画像を描画 */
  }
  start() {
    this.update();
    requestAnimationFrame(()=> {
      this.start()
    });
    // setInterval(()=> {
    //   this.update();
    // }, 1000 / this.FPS);
    // setInterval(this.update, 1000 / this.FPS);
  }
}
