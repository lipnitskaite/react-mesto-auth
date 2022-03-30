import React from 'react';
import logo from '../images/logo-mesto.svg';
import { Link, Route } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип 'Место'" className="logo" />

      <Route exact path="/">
        <ul className='header__nav'>
          <li className='header__nav_item'>{props.userEmail}</li>
          <li className='header__nav_item'><button onClick={props.signOut} className="header__link header__button_sign-out">Выйти</button></li>
        </ul> 
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
