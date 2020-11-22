import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const urlInputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
        avatar: urlInputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input"
        type="url"
        name="avatarurl"
        id="avatarurl"
        defaultValue=""
        placeholder="Ссылка на картинку"
        required
        ref={urlInputRef}
      />
      <span className="popup__error-text" id="avatarurl-error-text"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
