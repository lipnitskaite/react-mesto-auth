import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({
  card,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card_delete-button' : 'card_delete-button_inactive'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_active' : 'card__like-button_inactive'}`
  );

  const handleLikeClick = () => onCardLike(card);
  const handleDeleteClick = () => onCardDelete(card);

  const handleCardClick = () => onCardClick(card);
    return (
      <article className="card page__card">
        <img src={card.link} alt={card.name} className="card__image" onClick={handleCardClick}/>
        <div className="card__main">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
            <p className="card__like-number">{card.likes.length}</p>
          </div> 
          <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
        </div>
      </article>
    );
}

export default Card;
