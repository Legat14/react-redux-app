import isNotEmpty from 'helpers/isNotEmpty';
import React from 'react';
import { IModalContent } from 'types';

class ModalWindow extends React.Component<{modalContent: IModalContent | {}}, {modalWindowClass: string}> {
  constructor(props: {modalContent: IModalContent | {}}) {
    super(props);
    this.state = {
      modalWindowClass: 'modal-window modal-window__hidden',
    }
    this.showModel = this.showModel.bind(this);
    this.hideModel = this.hideModel.bind(this);
  }

  showModel() {
    this.setState({
      modalWindowClass: 'modal-window',
    });
  }

  hideModel() {
    this.setState({
      modalWindowClass: 'modal-window modal-window__hidden',
    });
  }

  render(): JSX.Element { 
    return (
      isNotEmpty(this.props.modalContent) ?
      <div className={this.state.modalWindowClass}
        onClick={(event): void => {
        event.stopPropagation();
      }}
      >
        <img src={(this.props.modalContent as IModalContent).src} alt={(this.props.modalContent as IModalContent).title} />
      </div> :
      <div className={this.state.modalWindowClass}
        onClick={(event): void => {
          event.stopPropagation();
        }}
      >
        <h2>Modal is Empty by now</h2>
      </div>
    )
  }
}

export default ModalWindow;
