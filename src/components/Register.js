import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Auth from '../components/Auth';
        
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // const password = password;
    // const email = email;

    Auth.register(password, email);
  }

  return (
    <section className="auth">
      <form className='form form_type_register' name='register' onSubmit={handleSubmit} noValidate>
        <h2 className="form__title form__title_type_auth">Регистрация</h2>
        <fieldset className="form__container form__container_type_auth">
          <input
            onChange={handleChange}
            value={email}
            id="email-input"
            className="form__input form__input_type_auth"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          {/* <span className="login-input-error form__input-error"></span> */}
          <input
            onChange={handleChange}
            value={password}
            id="password-input"
            className="form__input form__input_type_auth"
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          {/* <span className="login-input-error form__input-error"></span> */}
        </fieldset>
        <button className="form__button form__button_type_submit-login" type="submit" name="submit" value='Зарегистрироваться'>Зарегистрироваться</button>
      </form>
      <p className='auth__login-tip'>Уже зарегистрированы? <Link to={`./sign-in`} className="auth__login-link">Войти</Link></p>
    </section>
  );
}

export default Register;
        