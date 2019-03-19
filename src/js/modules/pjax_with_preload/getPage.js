export default function(pageId, page) {
  switch (pageId) {
    case 'index':
      return page.index;
      break;
    case 'case01':
      return page.case01;
      break;
    default:
      return page.blank;
  }
}
