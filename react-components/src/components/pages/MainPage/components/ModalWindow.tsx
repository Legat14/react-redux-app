import isNotEmpty from 'helpers/isNotEmpty';
import React from 'react';
import { IModalContent } from 'types';

function ModalWindow(props: {
  modalContent: IModalContent | {};
  setIsOpened: (value: boolean) => void;
  isOpened: boolean;
}): JSX.Element {
  let modalWindowClass = 'modal-window modal-window__hidden';

  if (props.isOpened) {
    modalWindowClass = 'modal-window';
  }

  return isNotEmpty(props.modalContent) ? (
    <div
      className={modalWindowClass}
      onClick={(event): void => {
        event.stopPropagation();
      }}
      data-testid={'modal-window'}
    >
      <img
        src={(props.modalContent as IModalContent).src}
        alt={(props.modalContent as IModalContent).title}
      />
      <div className="modal-window__description">
        <h3>{(props.modalContent as IModalContent).title}</h3>
        <p>
          <span>id: </span>
          {(props.modalContent as IModalContent).id}
        </p>
        <p>
          <span>owner: </span>
          {(props.modalContent as IModalContent).owner}
        </p>
        <p>
          <span>server: </span>
          {(props.modalContent as IModalContent).server}
        </p>
      </div>
      <button
        className="modal-window__colse-btn"
        type="button"
        onClick={() => props.setIsOpened(false)}
      >
        {'>X<'}
      </button>
    </div>
  ) : (
    <div
      className={modalWindowClass}
      onClick={(event): void => {
        event.stopPropagation();
      }}
    >
      <h2>Modal is Empty by now</h2>
    </div>
  );
}

export default ModalWindow;
