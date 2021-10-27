import { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const listItems = ({ conteudo, status, bloco}) => {
  return (<div key={conteudo} className="card">
    <h3>O conteudo é: {conteudo}</h3>
    <p>Status: {status}</p>
    <p>Bloco: {bloco}</p>
  </div>
  );
};

class Content extends Component {
  render() {
    return(
      conteudos.map((obj) => listItems(obj))
    )
  }
}

export default Content;