import React, { useState } from 'react';
import { Link } from 'react-router-dom';
        
function Register({ handleRegister }) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = data;

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleRegister(email, password)
    .catch((err) => console.log(err))
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
        