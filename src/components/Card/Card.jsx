import PropTypes from "prop-types";
import "./card.scss";

function Card({ id, name, image, species, isFavorite, onDelete, onFavorite }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <div className="card__content">
        <h2 className="card__name">{name}</h2>
        <p className="card__species">Species: {species}</p>
        <div className="card__buttons">
          <button
            className={`favorite-button ${isFavorite ? "favorite" : ""}`}
            onClick={() => onFavorite(id)}
          ></button>
          <button className="delete-button" onClick={() => onDelete(id)}>
            <svg
              fill="#ffffff"
              height="25px"
              width="25px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              stroke="#ffffff"
            >
              <path d="M456.348,66.783H55.652c-9.223,0-16.696,7.473-16.696,16.696v33.391c0,9.223,7.473,16.696,16.696,16.696h400.696 c9.223,0,16.696-7.473,16.696-16.696V83.478C473.043,74.256,465.57,66.783,456.348,66.783z"></path>
              <path d="M72.348,166.957v328.348c0,9.22,7.475,16.696,16.696,16.696h333.913c9.22,0,16.696-7.475,16.696-16.696V166.957H72.348z M172.522,428.522c0,9.223-7.473,16.696-16.696,16.696c-9.223,0-16.696-7.473-16.696-16.696V217.043 c0-9.223,7.473-16.696,16.696-16.696c9.223,0,16.696,7.473,16.696,16.696V428.522z M272.696,428.522 c0,9.223-7.473,16.696-16.696,16.696s-16.696-7.473-16.696-16.696V217.043c0-9.223,7.473-16.696,16.696-16.696 s16.696,7.473,16.696,16.696V428.522z M372.87,428.522c0,9.223-7.473,16.696-16.696,16.696c-9.223,0-16.696-7.473-16.696-16.696 V217.043c0-9.223,7.473-16.696,16.696-16.696c9.223,0,16.696,7.473,16.696,16.696V428.522z"></path>
              <path d="M322.783,0H189.217c-9.223,0-16.696,7.473-16.696,16.696v16.696h166.957V16.696C339.478,7.473,332.005,0,322.783,0z"></path>{" "}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
};

export default Card;
