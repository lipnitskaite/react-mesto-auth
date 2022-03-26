import React from 'react';

function PopupWithForm({name, title, buttonTitle, isOpen, onClose, onSubmit, children}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <form className={`form form_type_${name}`} name={`${name}`} onSubmit={onSubmit} noValidate>
          <h2 className={"form__title"}>{`${title}`}</h2>
          {children}
          <button className="form__button form__button_type_submit-changes" type="submit" name="submit" value={`${buttonTitle}`}>{`${buttonTitle}`}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
