import * as PIXI from 'pixi.js'
// import sleep from 'js-util/sleep';

export default class DrawPixi {
  constructor(modules) {
    this.wrap = document.querySelector('.p-case01-pixi');
    this.height;
    this.width;
    this.app;
    this.image;
    this.scrollManager = modules.scrollManager;

    this.init();
    this.draw();

  }
  init() {
    this.width = this.scrollManager.resolution.x;
    this.height = this.scrollManager.resolution.y;

    // Create a new application
    this.app = new PIXI.Application(
      this.width,
      this.height,
      {backgroundColor : 0xFFFFFF}
    );
    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.app.renderer.autoResize = true;
    this.wrap.appendChild(this.app.view);

    //resize
    this.scrollManager.resizeNext = () => {
      this.resize();
    };
    this.scrollManager.resize();
  }
  resize() {
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
    this.image.x = this.app.renderer.width / 4;
    this.image.y = this.app.renderer.height / 4;
    this.image.width = this.app.renderer.width / 2;
    this.image.height = this.image.width * ( 667 / 1000 );

  }
  draw() {
    this.app.stage.interactive = true;

    //container
    const container = new PIXI.Container();
    this.app.stage.addChild(container);

    //image
    this.image = PIXI.Sprite.fromImage("/study_interactions/img/case01/pixi01.jpg");
    container.addChild(this.image);
    this.image.x = this.app.renderer.width / 4;
    this.image.y = this.app.renderer.height / 4;
    this.image.width = this.app.renderer.width / 2;
    this.image.height = this.image.width * ( 667 / 1000 );
    this.image.interactive = true;
    this.image.cursor = 'pointer';

    //displacementSprite
    const displacementSprite = PIXI.Sprite.fromImage("/study_interactions/img/case01/map.png");
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    displacementSprite.position = this.image.position;
    displacementSprite.width = this.image.width;
    displacementSprite.height = this.image.height;
    this.app.stage.addChild(displacementSprite);


    const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    this.image.filters = [displacementFilter];
    this.image.filters[0].scale.x = 0;
    this.image.filters[0].scale.y = 0;

    const testFn = () => {
      this.image.filters[0].scale.x++;
      this.image.filters[0].scale.y++;
      if(this.image.filters[0].scale.x > 20) {
        this.image.filters[0].scale.x = 20;
        this.image.filters[0].scale.y = 20;
      }
      displacementSprite.x++;
      if(displacementSprite.x > displacementSprite.width) {
        displacementSprite.x = 0;
      }
    };

    const testFn2 = () => {
      this.image.filters[0].scale.x--;
      this.image.filters[0].scale.y--;
      if(this.image.filters[0].scale.x < 0) {
        this.image.filters[0].scale.x = 0;
        this.image.filters[0].scale.y = 0;
      }
    };

    //event
    this.image.on('mouseover', (event) => {
      this.app.ticker.add(testFn);
      this.app.ticker.remove(testFn2);
    });

    this.image.on('mouseout', (event) => {
      this.app.ticker.remove(testFn);
      this.app.ticker.add(testFn2);
    });

  }
}
