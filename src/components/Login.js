import React, { useState } from 'react';

function Login({ handleLogin }) {
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

    handleLogin(email, password)
    .catch((err) => console.log(err))
  }

  return (
    <section className="auth">
      <form className='form form_type_login' name='login' onSubmit={handleSubmit} noValidate>
        <h2 className="form__title form__title_type_auth">Вход</h2>
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
        <button className="form__button form__button_type_submit-login" type="submit" name="submit" value='Войти'>Войти</button>
      </form>
    </section>
  );
}

export default Login;
