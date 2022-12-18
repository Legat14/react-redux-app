import isEmpty from 'helpers/isEmpty';
import React from 'react';
import { IModalContent } from 'types';

class ModalWindow extends React.Component<
  {
    modalContent: IModalContent | {};
    closeModalWindow: () => void;
  },
  { modalWindowClass: string }
> {
  constructor(props: { modalContent: IModalContent | {}; closeModalWindow: () => void }) {
    super(props);
    this.state = {
      modalWindowClass: 'modal-window modal-window__hidden',
    };
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

  fillModal(): JSX.Element {
    if(isEmpty(this.props.modalContent)) {
      return (
        <div
          className={this.state.modalWindowClass}
          onClick={(event): void => {
            event.stopPropagation();
          }}
        >
          <h2>Modal is Empty by now</h2>
        </div>
      )
    }
    return (
      <div
        className={this.state.modalWindowClass}
        onClick={(event): void => {
          event.stopPropagation();
        }}
        data-testid={'modal-window'}
      >
        <img
          src={(this.props.modalContent as IModalContent).src}
          alt={(this.props.modalContent as IModalContent).title}
        />
        <div className="modal-window__description">
          <h3>{(this.props.modalContent as IModalContent).title}</h3>
          <p>
            <span>id: </span>
            {(this.props.modalContent as IModalContent).id}
          </p>
          <p>
            <span>owner: </span>
            {(this.props.modalContent as IModalContent).owner}
          </p>
          <p>
            <span>server: </span>
            {(this.props.modalContent as IModalContent).server}
          </p>
        </div>
        <div className="modal-window__colse-btn" onClick={this.props.closeModalWindow}>
          {'>X<'}
        </div>
      </div>
    )
  }

  render(): JSX.Element {
    return this.fillModal();
  }
}

export default ModalWindow;
