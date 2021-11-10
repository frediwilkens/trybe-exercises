import React from 'react';

class DadJokes extends React.Component {
  constructor() {
    super();

    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.saveJoke = this.saveJoke.bind(this);
    
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  fetchJoke = async () => {
    this.setState(
      { loading: true, },
      async () => {
        const requestHeader = { headers : { Accept: 'application/json' } };
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeader);
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          jokeObj: requestObject,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }))

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return(
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <p>{loading ? loadingElement : this.renderJokeElement()}</p>
      </div>
    );
  }
}

export default DadJokes;