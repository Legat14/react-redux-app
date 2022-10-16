import isNotEmpty from 'helpers/isNotEmpty';
import React from 'react';
import { IModalContent } from 'types';

class ModalWindow extends React.Component<{modalContent: IModalContent | {}}> {
  constructor(props: {modalContent: IModalContent | {}}) {
    super(props);
  }

  render(): JSX.Element { 
    return (
      isNotEmpty(this.props.modalContent) ?
      <div className="modal-window">
        <img src={(this.props.modalContent as IModalContent).src} alt={(this.props.modalContent as IModalContent).title} />
      </div> :
      <div className="modal-window">
        <h2>Modal is Empty by now</h2>
      </div>
    )
  }
}

export default ModalWindow;
