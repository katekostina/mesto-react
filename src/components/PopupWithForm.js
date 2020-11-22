import React from "react";

function PopupWithForm({name, title, isOpen, onClose, onSubmit, children}) {
  return (
    <article
      className={`popup popup_type_${name} ${isOpen ? "popup_shown" : ""}`}
    >
      <div className="popup__overlay"></div>
      <form className="popup__form" action="#" method="post" name={name} onSubmit={onSubmit}>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__heading">{title}</h2>
        {children}
        <button className="popup__submit-button" type="submit"/>
      </form>
    </article>
  );
}

export default PopupWithForm;
