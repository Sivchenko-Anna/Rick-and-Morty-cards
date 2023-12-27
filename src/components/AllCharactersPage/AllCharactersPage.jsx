import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacters,
  characters,
  addFavoriteCharacter,
  removeFavoriteCharacter,
  deleteCharacter,
} from "../../redux/slice";
import Card from "../Card/Card";
import "./allCharactersPage.scss";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector(characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className="characters-page">
      {allCharacters.characters.length > 0 ? (
        <div>
          <h1 className="characters-page__title">All Characters</h1>
          <ul className="characters-page__list">
            {allCharacters.characters.map((character) => (
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
