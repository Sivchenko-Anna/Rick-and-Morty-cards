export default function normalizeData(data) {
  const characters = data.results;

  if (data.length === 0) {
    return null;
  }

  return characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      isFavorite: false,
    };
  });
}
