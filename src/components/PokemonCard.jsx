const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[0];

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
