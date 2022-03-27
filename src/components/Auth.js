import React from 'react';

function Auth({name, title, buttonTitle, onSubmit, children}) {
  return (
    <section className="auth">
      <form className={`form form_type_${name}`} name={`${name}`} onSubmit={onSubmit} noValidate>
        <h2 className="form__title form__title_type_auth">{title}</h2>
        {children}
        <button className="form__button form__button_type_submit-login" type="submit" name="submit" value={`${buttonTitle}`}>{buttonTitle}</button>
      </form>
    </section>
  );
}

export default Auth;
