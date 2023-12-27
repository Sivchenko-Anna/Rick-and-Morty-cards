function Card({ id, name, image, species, isFavorite, onDelete, onFavorite }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <div className="card__content">
        <h2 className="card__name">{name}</h2>
        <p className="card__species">{species}</p>
        <div className="card__buttons">
          <button
            className={`favorite-button ${isFavorite ? "favorite" : ""}`}
            onClick={() => onFavorite(id)}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
          <button className="delete-button" onClick={() => onDelete(id)}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
