class Api {
  constructor({address, token}) {
    this._address = address;
    this._token = token;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json()
    } 
      return Promise.reject(`Ошибка: ${res.status}`)
  };

  getUserInfoApi() {
    return fetch(`${this._address}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse);
  }

  updateUserInfo(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._handleResponse);
  }

  getCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse);
  }

  addCard(data) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._handleResponse);
  }

  deleteCard(id) {
    return fetch(`${this._address}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse)
  }

  updateUserAvatar(avatarLink) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarLink,
      })
    })
    .then(this._handleResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleResponse)
  }
}

export const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: '5ac1d86f-37b5-4f50-b37e-b1e98dd53da9'
});

export const authApi = new Api({
  address: 'https://auth.nomoreparties.co',
  token: `Bearer ${localStorage.getItem('token')}`,
});