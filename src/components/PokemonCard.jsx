import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  console.log(pokemon);

  const printImg = (pokemon) => {
    return !pokemon.imgSrc ? (
      <p>???</p>
    ) : (
      <img src={pokemon.imgSrc} alt={pokemon.name} className="card-img" />
    );
  };

  return (
    <figure className="card">
      {printImg(pokemon)}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
