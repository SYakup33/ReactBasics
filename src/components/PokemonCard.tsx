interface PokemonCardProps{
    pokemon: {
        imgSrc?: string;
        name: string;
    }
}

function PokemonCard({pokemon}: PokemonCardProps) {
    return pokemon.imgSrc ? 
        <figure>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
            <figcaption>{pokemon.name}</figcaption>
        </figure> : 
        <figure>
            <img src="" alt="???" />
            <figcaption>{pokemon.name} n'a pas d'image ?</figcaption> 
         </figure>       
}

export default PokemonCard