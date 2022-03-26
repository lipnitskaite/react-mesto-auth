import React, {useEffect} from 'react';
import PopupWithForm from '../components/PopupWithForm';
        
function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const handleClose = () => onClose();

  const inputAvatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputAvatarRef.current.value,
    });
  }

  useEffect(() => {
    inputAvatarRef.current.value="";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonTitle="Сохранить"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      children={[
        <fieldset className="form__container">
          <input 
            id="avatar-input"
            className="form__input form__input_type_avatar"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            ref={inputAvatarRef}
            required
          />
          <span className="avatar-input-error form__input-error"></span>
        </fieldset>
      ]}
    />
  );
}

export default EditAvatarPopup;
        