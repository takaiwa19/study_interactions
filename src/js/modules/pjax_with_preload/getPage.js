export default function(pageId, page) {
  switch (pageId) {
    case 'index':
      return page.index;
      break;
    case 'case01':
      return page.case01;
      break;
    case 'case02':
      return page.case02;
      break;
    default:
      return page.blank;
  }
}
