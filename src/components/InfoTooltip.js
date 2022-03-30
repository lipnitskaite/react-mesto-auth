import React from 'react';
import successImage from '../images/registration_success.svg';
import failImage from '../images/registration_fail.svg';

function InfoTooltip({ isOpen, successResult, onClose, successMessage, failMessage }) {
  return (
    <section className={`popup popup_type_info-tooltip ${isOpen && 'popup_opened'}`}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <figure className="popup__img-response">
          <img alt="" src={successResult ? successImage : failImage} className="popup__response-image" />
          <p className="popup__response">{successResult ? successMessage : failMessage}</p>
        </figure>
      </div>
    </section>
  );
}

export default InfoTooltip;
