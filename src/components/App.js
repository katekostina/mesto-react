import React from "react";
import api from "../utils/api.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(undefined);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserProfile()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(undefined);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input"
            type="url"
            name="avatarurl"
            id="avatarurl"
            defaultValue=""
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error-text" id="avatarurl-error-text"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input"
            type="text"
            name="profilename"
            id="profilename"
            required
            minLength="2"
            maxLength="40"
            defaultValue=""
          />
          <span
            className="popup__error-text"
            id="profilename-error-text"
          ></span>
          <input
            className="popup__input"
            type="text"
            name="profilecaption"
            id="profilecaption"
            defaultValue=""
            required
            minLength="2"
            maxLength="200"
          />
          <span
            className="popup__error-text"
            id="profilecaption-error-text"
          ></span>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          />
          <span className="popup__error-text" id="placeurl-error-text"></span>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="confirm-delete" />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
