
export function highliteLink (
  linkToHighlite: number,
  nav: HTMLElement | null,
): void {
  if (nav) {
    const linksArr = nav.childNodes;
    linksArr.forEach((link: ChildNode) => {
      (link as HTMLElement).classList.remove('header__link_active_page');
    });
    (linksArr[linkToHighlite] as HTMLElement).classList.add('header__link_active_page');
  }
};