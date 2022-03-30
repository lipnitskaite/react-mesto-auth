import React from 'react';

function ImagePopup({card, onClose}) {
  return (
    <section className={card ? `popup popup_type_image popup_opened` : `popup popup_type_image`}>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <figure className="popup__img-cap">
          <img alt={card && card.name} src={card && card.link} className="popup__image" />
          <figcaption className="popup__caption">{card && card.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
