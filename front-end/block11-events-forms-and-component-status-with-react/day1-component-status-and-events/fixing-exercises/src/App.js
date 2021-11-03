import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickButton1: 0,
      clickButton2: 0,
      clickButton3: 0,
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

  };

  handleClick1 = () => {
    this.setState((eventoAnterior, _props) => ({
      clickButton1: eventoAnterior.clickButton1 + 1
    }));
  }

  handleClick2 = () => {
    this.setState((eventoAnterior, _props) => ({
      clickButton2: eventoAnterior.clickButton2 + 1
    }));
  }

  handleClick3 = () => {
    this.setState((eventoAnterior, _props) => ({
      clickButton3: eventoAnterior.clickButton3 + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>{this.state.clickButton1}</button>
        <button onClick={this.handleClick2}>{this.state.clickButton2}</button>
        <button onClick={this.handleClick3}>{this.state.clickButton3}</button>
      </div>
    );
  }
}

export default App;
