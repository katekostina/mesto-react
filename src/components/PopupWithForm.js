import React from "react";

function PopupWithForm(props) {
  return (
    <article
      className={`popup popup_type_${props.name} ${props.isOpen ? "popup_shown" : ""}`}
    >
      <div className="popup__overlay"></div>
      <form className="popup__form" action="#" method="post" name={props.name}>
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        />
        <h2 className="popup__heading">{props.title}</h2>
        {props.children}
        <button className="popup__submit-button" type="submit"/>
      </form>
    </article>
  );
}

export default PopupWithForm;
