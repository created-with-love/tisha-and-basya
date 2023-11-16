import React from 'react';
import logo from '../../media/msg777000-220236.jpg';
import './styles.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__LogoWrapper">
        <img
          src={logo}
          className="Header__Logo"
          alt="logo"
          width="140"
          height="140"
        />
      </div>

      <div className="Header__TextWrapper">
        <h1 className="Header__Title">
          Це сайт-візитка про двох котиків-близнят - Тіхона та Басю
        </h1>
      </div>
    </header>
  );
};

export default Header;
