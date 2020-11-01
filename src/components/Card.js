import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <figure className="card">
      <button className="card__delete" type="button"></button>
      <img
        src={props.card.link}
        alt=""
        className="card__image"
        onClick={handleClick}
      />
      <figcaption className="card__caption">
        <p className="card__name">{props.card.name}</p>
        <div className="card__like-container">
          <button className="card__heart" type="button"></button>
          <p className="card__likes">{props.card.likes.length}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;
