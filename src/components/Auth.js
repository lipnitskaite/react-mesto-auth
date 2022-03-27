export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (username, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: {
      "password": "somepassword",
      "email": "email@yandex.ru"
    }
  })
  .then((response) => {
    try {
      if (response.statur === 200) {
        return response.json();
      }
    } catch(e) {
      return(e);
    }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};