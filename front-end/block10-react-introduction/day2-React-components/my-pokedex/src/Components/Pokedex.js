import { Component } from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    return (
      <section className="pokedex">
        <>{pokemons.map((pokemon) => <Pokemon pokemon={pokemon} />)}</>
      </section>
    )
  }
}

export default Pokedex;