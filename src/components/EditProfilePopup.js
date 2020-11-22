import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState();
  const [about, setAbout] = React.useState();

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({name, about});
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        type="text"
        name="profilename"
        id="profilename"
        minLength="2"
        maxLength="40"
        required
        value={name || ""}
        onChange={handleNameChange}
      />
      <span className="popup__error-text" id="profilename-error-text"></span>
      <input
        className="popup__input"
        type="text"
        name="profilecaption"
        id="profilecaption"
        minLength="2"
        maxLength="200"
        required
        value={about || ""}
        onChange={handleAboutChange}
      />
      <span className="popup__error-text" id="profilecaption-error-text"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
