import React from 'react';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditAvatar,
  onEditProfile,
  cards,
  onAddCard,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

    return (
      <main className="content">
        <section className="profile">
          <div className="profile__photo-container">
            <img src={currentUser.avatar} className="profile__photo" alt="Аватар пользователя"/>
            <button className="profile__photo-edit-button" type="button" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__main">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
          <button className="profile__add-button" type="button" onClick={onAddCard}></button>
        </section>

        <section className="cards page__cards">
          {cards.map((card) => (
            <Card
              card={card} 
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          )) }
        </section>
      </main>
    );
}

export default Main;
