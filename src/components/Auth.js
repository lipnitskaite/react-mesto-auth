export const BASE_URL = 'https://auth.nomoreparties.co';

const CheckResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return response.json()
  .then((data) => {
    const { statusCode } = data;
    const { message } = data.message[0].message[0];
    const error = new Error(message || 'Что-то пошло не так');
    error.status = statusCode;
    throw error;
  })
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({ email, password })
  })
  .then(CheckResponse)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response => response.json()))
  .catch(err => console.log(err))
}; 