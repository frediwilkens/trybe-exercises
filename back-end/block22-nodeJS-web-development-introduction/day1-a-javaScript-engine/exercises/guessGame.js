const readline = require('readline-sync');

function result(number, answer) {
  if (number !== answer) {
    return console.log(`Não foi dessa vez, o número era ${number}`);
  }
  return console.log('Parabéns, você acertou!');
}

function runGame() {
  const number = parseInt(Math.random() * 10);

  const answer = readline.questionInt(
    'Digite um número entre 0 e 10 e descubra se é o número que estou pensando: '
  );

  result(number, answer);

  const tryAgain = readline.question(
    'Deseja tentar novamente? (Digite s para sim e qualquer outra coisa para não) '
  );

  if (tryAgain !== 's') return console.log('OK, até a próxima!');
  runGame();
}

runGame();