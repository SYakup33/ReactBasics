import { useState } from "react";
import "./App.css";
import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur");

  // On récupère le pokemon qui a le meme nom que pokemonName. 
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }
  return (
    <div>
      <MyTitle />
      <PokemonCard pokemon={pokemon}/>
      <button type="button" onClick={() => setPokemonName(pokemonList[0].name)}>Bulbasaur</button>
      <button type="button" onClick={() => setPokemonName(pokemonList[1].name)}>Mew</button>
    </div>
  );
}

export default App;