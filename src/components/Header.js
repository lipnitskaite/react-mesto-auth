import React from 'react';
import logo from '../images/logo-mesto.svg';
import { Link, Route } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип 'Место'" className="logo" />

      <Route exact path="/">
        <div className='header__user-info'>
          <p className='header__email'>email@email.com</p>
          <Link to={`./sign-in`} className="header__link">Выйти</Link>
        </div> 
      </Route>

      <Route path="/sign-up">
        <Link to={`./sign-in`} className="header__link">Войти</Link>
      </Route>

      <Route path="/sign-in">
        <Link to={`./sign-up`} className="header__link">Регистрация</Link>
      </Route>
    </header>
  );
}

export default Header;
