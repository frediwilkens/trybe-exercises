import React, { Component } from 'react'

class Forms extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      shirt: 0,
      hadPlayedBefore: 'false',
      position: '',
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Preencha os dados do Atleta</h1>
        <form>
          <label>
              Nome
              <textarea 
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              />
          </label>

          <label>
            Numero da Camiseta
            <input
              type="number"
              name="shirt"
              value={this.state.shirt}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Assinale a posição do Atleta
            <select
              name="position"
              value={this.state.position}
              onChange={this.handleChange}
            >
              <option value="Goleiro">Goleiro</option>
              <option value="Zagueiro">Zagueiro</option>
              <option value="Lateral">Lateral</option>
              <option value="Meia">Meia</option>
              <option value="Atacante">Atacante</option>
            </select>
          </label>

          <label>
            Já participou da competição antes?
            <input
              type="checkbox"
              name="hadPlayedBefore"
              value={this.state.hadPlayedBefore}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Forms;