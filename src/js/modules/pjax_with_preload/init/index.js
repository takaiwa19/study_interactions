import loadImgs from '../../common/loadImgs';
const DrawKvImage = require('../../index/DrawKvImage').default;

// initBeforeTransit method: before scrollManager.resize run.
const initBeforeTransit = async (contents, contentsBefore, contentsAfter, modules) => {
  await loadImgs([
    '../img/index/bg.jpg',
  ]);
  new DrawKvImage();
};

// initAfterTransit method: after scrollManager.resize run.
const initAfterTransit = (contents, contentsBefore, contentsAfter, modules) => {
};

// clear any variables.
const clear = (modules) => {
};

export {
  initBeforeTransit,
  initAfterTransit,
  clear
}
