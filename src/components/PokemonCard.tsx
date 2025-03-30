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
    //const pokemon = pokemonList[1];
        return pokemon.imgSrc ? 
        <figure>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
            <figcaption>{pokemon.name}</figcaption>
        </figure>
         : <figure>
            <img src="" alt="???" />
            <figcaption>{pokemon.name} n'a pas d'image ?</figcaption> 
         </figure>
             
}

export default PokemonCard