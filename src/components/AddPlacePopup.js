import React, { useState, useEffect } from 'react';
import PopupWithForm from '../components/PopupWithForm';
        
function EditProfilePopup({isOpen, onClose, onAddPlace}) {
  const handleClose = () => onClose();

  const [cardName, setCardName] = useState('');
  const [cardPhotoLink, setCardPhotoLink] = useState('');

  function handleCardNameChange(e) {
    setCardName(e.target.value);
  }
  function handleCardPhotoLinkChange(e) {
    setCardPhotoLink(e.target.value);
  }

  useEffect(() => {
    setCardName('');
    setCardPhotoLink('');
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardPhotoLink,
    });
  }

  return (
    <PopupWithForm
      name="add-post"
      title="Новое место"
      buttonTitle="Создать"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      children={[
        <fieldset className="form__container">
          <input 
            id="title-input"
            className="form__input form__input_type_post-title"
            placeholder="Название"
            type="text"
            name="name"
            value={cardName || ''} 
            onChange={handleCardNameChange} 
            required
            minLength="2"
            maxLength="30"
          />
          <span className="title-input-error form__input-error"></span>
          <input
            id="image-input"
            className="form__input form__input_type_post-image"
            placeholder="Ссылка на картинку"
            type="url"
            name="link"
            value={cardPhotoLink || ''} 
            onChange={handleCardPhotoLinkChange}
            required
          />
          <span className="image-input-error form__input-error"></span>
        </fieldset>
      ]}
    />
  );
}

export default EditProfilePopup;
        