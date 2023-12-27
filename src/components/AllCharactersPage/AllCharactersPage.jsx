import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacters,
  characters,
  favoriteCharacters,
  addFavoriteCharacter,
  removeFavoriteCharacter,
  deleteCharacter,
} from "../../redux/slice";
import Card from "../Card/Card";

const CharactersPage = () => {
  const dispatch = useDispatch();
  const allCharacters = useSelector(characters);
  const favorites = useSelector(favoriteCharacters);
  console.log(allCharacters)

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div>
      {allCharacters.characters.length > 0 ? (
        <div>
          <h1>All Characters</h1>
          <ul>
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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CharactersPage;
