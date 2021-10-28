import { Component } from "react";

class Pokemon extends Component {
  render() {
    return (
      <div className="pokemon">
        <img src={this.props.pokemon.image}/>
        <p className="poke-name">{this.props.pokemon.name}</p>
        <p className="poke-type">{this.props.pokemon.type}</p>
        <p className="poke-weight">Average weight: {this.props.pokemon.averageWeight.value} kg</p>
      </div>
    )
  }
}

export default Pokemon;