import React from 'react';
import Auth from '../components/Auth';

function Login() {
  // const currentUser = useContext(CurrentUserContext);

  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  
  // useEffect(() => {
  //   if (currentUser) {
  //     setName(currentUser.name);
  //     setDescription(currentUser.about);
  //   }
  // }, [currentUser, isOpen]);

  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }
  // function handleDescriptionChange(e) {
  //   setDescription(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   onUpdateUser({
  //     name,
  //     about: description,
  //   });
  // }

  return (
    <Auth
      name="login"
      title="Вход"
      buttonTitle="Войти"
      // onSubmit={handleSubmit}
      children={[
        <fieldset className="form__container form__container_type_auth">
          <input 
            id="email-input"
            className="form__input form__input_type_auth"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          {/* <span className="login-input-error form__input-error"></span> */}
          <input 
            id="password-input"
            className="form__input form__input_type_auth"
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          {/* <span className="login-input-error form__input-error"></span> */}
        </fieldset>
      ]}
    />
  );
}

export default Login;