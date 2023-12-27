import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacters,
  addFavoriteCharacter,
  removeFavoriteCharacter,
  deleteCharacter,
  toggleFavoriteCharacters,
} from "../../redux/slice";
import Card from "../Card/Card";
import "./charactersPage.scss";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);

  const isFavoriteView = useSelector(
    (state) => state.characters.isFavoriteView
  );

  const showCharacters = isFavoriteView
    ? allCharacters.favoriteCharacters
    : allCharacters.characters;

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="characters-page">
      {allCharacters.characters.length > 0 ? (
        <div>
          <button
            className="characters-page__toggle-btn"
            onClick={() => dispatch(toggleFavoriteCharacters())}
          >
            {isFavoriteView
              ? "Show All Characters"
              : "Show Favorite Characters"}
          </button>
          <ul className="characters-page__list">
            {showCharacters.map((character) => (
              <Card
                key={character.id}
                {...character}
                onDelete={() => dispatch(deleteCharacter({ id: character.id }))}
                onFavorite={(id) =>
                  dispatch(
                    character.isFavorite
                      ? removeFavoriteCharacter({ id })
                      : addFavoriteCharacter({ id })
                  )
                }
              />
            ))}
          </ul>
        </div>
      ) : (
        <p className="characters-page__loading">Loading...</p>
      )}
    </div>
  );
};

export default CharactersPage;
