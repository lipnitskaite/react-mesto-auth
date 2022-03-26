import React from 'react';
import logo from '../images/logo-mesto.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип 'Место'" className="logo" />
    </header>
  );
}

export default Header;
