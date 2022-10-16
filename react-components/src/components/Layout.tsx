import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import MainPage from './pages/MainPage';

class Layout extends React.Component<{}, {showModal: boolean}> {
  header: React.RefObject<Header>;
  outlet: React.RefObject<MainPage>;

  constructor(props: {}) {
    super(props);
    this.header = React.createRef();
    this.outlet = React.createRef();
    this.state = {
      showModal: true,
    }
  }
  
  hideAllOverlay = () => { // TODO: Вызвать Header по рефу и вызвать у него внутренний hideOverlay метод
    console.log('hide');
    const header = this.header.current;
    if (header){
      const headerOverlay = header.overlay.current;
      if (headerOverlay) {
        headerOverlay.hideOverlay();
      }
    }
    const outlet = this.outlet.current;
    if (outlet){
      console.log(outlet);
    }
  }
  
  render(): JSX.Element {
  return (
    <div className="app-conteiner" onClick={this.hideAllOverlay}>
      <Header
        ref={this.header}
        showModal={this.state.showModal}
      />
      <Outlet
        ref={this.outlet}
      />
    </div>
  );
}
}

export default Layout;
