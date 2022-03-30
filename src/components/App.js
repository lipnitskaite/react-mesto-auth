import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import EditProfilePopup from '../components/EditProfilePopup';
import InfoTooltip from '../components/InfoTooltip';
import EditAvatarPopup from '../components/EditAvatarPopup';
import AddPlacePopup from '../components/AddPlacePopup';
import ImagePopup from '../components/ImagePopup';
import ProtectedRoute from '../components/ProtectedRoute';
import { api } from '../utils/api';
import * as auth from '../utils/auth';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState();

  const handleEditAvatarClick = () => {setIsEditAvatarPopupOpen(true)};
  const handleEditProfileClick = () => {setIsEditProfilePopupOpen(true)};
  const handleAddCardClick = () => {setIsAddCardPopupOpen(true)};
  const handleCardClick = (card) => {setSelectedCard(card)};

  useEffect(() => {
    tokenCheck();
  }, [])

  useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  }, [loggedIn])

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfoApi(), api.getCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch(err => console.log(err));
    }
  }, [loggedIn]);

  function handleLogin(email, password) {
    return auth.authorize(email, password)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        setLoggedIn(true);
        history.push('/');
      }
    })
    .catch(() => {
      setIsInfoTooltipOpen(true);
      setIsRegistrationSuccessful(false);
    })
  }

  function handleRegister(email, password) {
    return auth.register(email, password)
    .then(() => {
      setIsInfoTooltipOpen(true);
      setIsRegistrationSuccessful(true);
      history.push('/sign-in');
    })
    .catch(() => {
      setIsInfoTooltipOpen(true);
      setIsRegistrationSuccessful(false);
    })
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');

    if (token) {
      auth.getContent(token)
      .then((res) => {
        if (res) {
          const userEmail = res.data.email;

          setLoggedIn(true);
          setUserEmail(userEmail);
          history.push('/');
        }
      })
      .catch((err) => console.log(err))
    };
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard(null);
  };

  const handleUpdateUser = (res) => {
    api.updateUserInfo(res)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => console.log(err));    
  };

  const handleUpdateAvatar = ({avatar}) => {
    api.updateUserAvatar(avatar)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => console.log(err));    
  };

  const handleAddPlaceSubmit = (card) => {
    api.addCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards]); 
      closeAllPopups();
    })
    .catch((err) => console.log(err));    
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
    .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header userEmail={userEmail} />
        <Switch>
          <Route path="/sign-up">
            <Register handleRegister={handleRegister}/>
          </Route>

          <Route path="/sign-in">
            <Login handleLogin={handleLogin} />
          </Route>

          <ProtectedRoute path="/" loggedIn={loggedIn}>
            <Main 
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              cards={cards}
              onAddCard={handleAddCardClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          </ProtectedRoute>
          
          <Route>
            {loggedIn ? <Redirect to ="/" /> : <Redirect to="/sign-in" />}
          </Route>
        </Switch>

        <Footer />

        <InfoTooltip 
          isOpen={isInfoTooltipOpen}
          successResult={isRegistrationSuccessful}
          onClose={closeAllPopups}
        />

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddCardPopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
