import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const nameInputRef = React.useRef();
  const linkInputRef = React.useRef();

  React.useEffect(() => {
    if (!isOpen) {
      nameInputRef.current.value = '';
      linkInputRef.current.value = '';
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      name: nameInputRef.current.value,
      link: linkInputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      <input
        className="popup__input"
        type="text"
        name="placename"
        id="placename"
        defaultValue=""
        placeholder="Название"
        required
        minLength="1"
        maxLength="30"
        ref={nameInputRef}
      />
      <span className="popup__error-text" id="placename-error-text"></span>
      <input
        className="popup__input"
        type="url"
        name="placeurl"
        id="placeurl"
        defaultValue=""
        placeholder="Ссылка на картинку"
        required
        ref={linkInputRef}
      />
      <span className="popup__error-text" id="placeurl-error-text"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
