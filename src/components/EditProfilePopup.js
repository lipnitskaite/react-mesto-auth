import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
        
function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const handleClose = () => onClose();
  
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonTitle="Сохранить"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      children={[
        <fieldset className="form__container">
          <input 
            id="name-input" 
            className="form__input form__input_type_name" 
            placeholder="Имя" 
            type="text" 
            name="name" 
            value={name || ''} 
            onChange={handleNameChange} 
            required 
            minLength="2" 
            maxLength="40"
          />
          <span className="name-input-error form__input-error"></span>
          <input 
            id="job-input"
            className="form__input form__input_type_job"
            placeholder="Занятие"
            type="text"
            name="about"
            value={description || ''}
            onChange={handleDescriptionChange}
            required
            minLength="2"
            maxLength="200"
          />
          <span className="job-input-error form__input-error"></span>
        </fieldset>
      ]}
    />
  );
}

export default EditProfilePopup;
        