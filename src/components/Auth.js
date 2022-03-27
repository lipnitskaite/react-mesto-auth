import React from 'react';

function Auth({name, title, buttonTitle, isOpen, onSubmit, children}) {
  return (
    // <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
    //   <div className="popup__overlay" onClick={onClose}></div>
    //   <div className="popup__content">
    //     <button className="popup__close" type="button" onClick={onClose}></button>
    //     <form className={`form form_type_${name}`} name={`${name}`} onSubmit={onSubmit} noValidate>
    //       <h2 className={"form__title"}>{`${title}`}</h2>
    //       {children}
    //       <button className="form__button form__button_type_submit-changes" type="submit" name="submit" value={`${buttonTitle}`}>{`${buttonTitle}`}</button>
    //     </form>
    //   </div>
    // </section>
    <section className="auth">
      <form className="form form_type_login" name="login" onSubmit noValidate>
        <h2 className="form__title form__title_type_auth">Вход</h2>
        <fieldset className="form__container form__container_type_auth">
          <input 
            id="email-input"
            className="form__input form__input_type_login"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input 
            id="password-input"
            className="form__input form__input_type_login"
            type="email"
            name="password"
            placeholder="Пароль"
            required
          />
          {/* <span className="login-input-error form__input-error"></span> */}
        </fieldset>
        <button className="form__button form__button_type_submit-login" type="submit" name="submit" value>Войти</button>
      </form>
    </section>
  );
}

export default Auth;
