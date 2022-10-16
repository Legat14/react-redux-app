import HeaderOverlay from "components/HeaderOverlay";

export function removeClass(element: HeaderOverlay, classToShow: string) {
    element.classList.remove(`${classToShow}`);
}

export function addClass(element: HTMLElement, classToHide: string) {
    element.classList.add(`${classToHide}`);
}