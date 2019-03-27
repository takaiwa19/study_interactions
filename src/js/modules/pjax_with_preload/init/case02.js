import loadContentImgs from '../../common/loadContentImgs';
const CustomCursor = require('../../case02/CustomCursor').default;

// initBeforeTransit method: before scrollManager.resize run.
const initBeforeTransit = async (contents, modules) => {
  new CustomCursor(modules);
};

// initAfterTransit method: after scrollManager.resize run.
const initAfterTransit = (contents, modules) => {
};

// clear any variables.
const clear = (modules) => {
};

export {
  initBeforeTransit,
  initAfterTransit,
  clear
}
