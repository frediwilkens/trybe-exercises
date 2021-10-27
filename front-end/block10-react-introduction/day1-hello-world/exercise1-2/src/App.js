import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Elaborar plano de jogo', 'Elaborar treinamento', 'Executar os treinos', 'Jogar bem'];

function App() {
  return (<>
    <ol>{tasks.map((task => Task(task)))}</ol>
    </>
  );
}

export default App;
