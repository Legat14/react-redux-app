import Context from 'model/Context';
import React, { forwardRef, MouseEvent, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'types';

function Header(props: {}, ref: React.ForwardedRef<HTMLElement>): JSX.Element {

  let detailLink = '/detail';
  const photoID = useSelector((state: RootState) => state.details.id);
  // const photoID = useContext(Context).states.detailState.id;
  if (photoID === 'none') {
    detailLink = '/';
  }

  const highliteLink = useContext(Context).functions.highliteLink;
  const detailedPhotoId = useContext(Context).states.detailState.id;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.nodeName === 'A') {
      const nav = event.currentTarget;
      const linksCol = nav.children;
      const linksArr = Array.from(linksCol);
      const targetNumber = linksArr.indexOf(target);
      highliteLink(targetNumber);
      if (detailedPhotoId === 'none' && targetNumber === 1) {
        highliteLink(0);
      }
    }
  };

  return (
    <header className="header">
      <h1>React hooks</h1>
      <nav onClick={handleClick} ref={ref}>
        <Link className="header__link_active_page" to="/">
          Main page
        </Link>
        <Link to={detailLink}>Details</Link>
        <Link to="/about">About us</Link>
        <Link to="/form">React forms</Link>
      </nav>
    </header>
  );
}

export default forwardRef(Header);
