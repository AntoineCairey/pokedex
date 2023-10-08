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

export default PokemonCard;
