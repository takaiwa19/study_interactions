import loadImgs from '../../common/loadImgs';
import sleep from 'js-util/sleep';
const PIXI = require('pixi.js');
const DrawPixi = require('../../case01/DrawPixi').default;

// initBeforeTransit method: before scrollManager.resize run.
const initBeforeTransit = async (contents, contentsBefore, contentsAfter, modules) => {
  // new DrawPixi(modules);

  // console.log(PIXI);
  // // Create a new application
  // const app = new PIXI.Application();
  //
  // // Draw a green rectangle
  // const rect = new PIXI.Graphics()
  //     .beginFill(0x00ff00)
  //     .drawRect(40, 40, 200, 200);
  //
  // // Add a blur filter
  // rect.filters = [new PIXI.filters.BlurFilter()];
  //
  // // Display rectangle
  // app.stage.addChild(rect);
  // document.body.appendChild(app.view);
};

// initAfterTransit method: after scrollManager.resize run.
const initAfterTransit = (contents, contentsBefore, contentsAfter, modules) => {
  new DrawPixi(modules);
};

// clear any variables.
const clear = (modules) => {
};

export {
  initBeforeTransit,
  initAfterTransit,
  clear
}
