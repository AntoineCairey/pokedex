function NavBar({
  pokemonIndex,
  pokemonCount,
  handleClickPrevious,
  handleClickNext,
}) {
  return (
    <>
      {pokemonIndex > 0 && (
        <button onClick={handleClickPrevious}>Précédent</button>
      )}
      {pokemonIndex < pokemonCount - 1 && (
        <button onClick={handleClickNext}>Suivant</button>
      )}
    </>
  );
}

export default NavBar;
