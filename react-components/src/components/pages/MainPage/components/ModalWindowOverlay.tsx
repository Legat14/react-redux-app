import React from 'react';

function ModalWindowOverlay(props: { isOpened: boolean }): JSX.Element {
  let overlayClass = 'modal-window__overlay modal-window__hidden';

  if (props.isOpened) {
    overlayClass = 'modal-window__overlay';
  }

  return <div className={overlayClass}></div>;
}

export default ModalWindowOverlay;
