interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
  }

function NavBar({setPokemonName, pokemonList}: NavBarProps) {
    return (
        <nav>
        {pokemonList.map((pokemon) => (
          <button 
            type="button" 
            key={pokemon.name} 
            onClick={() => {setPokemonName(pokemon.name) ; 
              if(pokemon.name === "pikachu"){
                alert("pika pikachu !!!");
                
              }
            }}>
          {pokemon.name}
          </button>
      ))}
    </nav>
    
    );
  }
  
export default NavBar;