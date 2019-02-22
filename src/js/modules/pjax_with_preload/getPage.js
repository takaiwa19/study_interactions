export default function(pageId, page) {
  switch (pageId) {
    case 'index':
      return page.index;
      break;
    case 'page01':
      return page.lower;
      break;
    default:
      return page.blank;
  }
}
