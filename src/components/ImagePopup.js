import React from "react";

function ImagePopup(props) {
  return (
    <article
      className={`popup ${props.card ? "popup_shown" : ""}`}
      id="imagepopup"
    >
      <div className="popup__overlay"></div>
      <figure className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card ? props.card.link : "#"}
          alt=""
        />
        <figcaption className="popup__caption">
          {props.card && props.card.name}
        </figcaption>
      </figure>
    </article>
  );
}

export default ImagePopup;
