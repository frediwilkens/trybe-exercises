const readline = require('readline-sync');

const scripts = [
  { name: 'IMC', script: './imc.js'},
  { name: 'Velocidade', script: './velocidade.js'},
  { name: 'Guess Game', script: './guessGame.js'},  
];

const message = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

const scriptNumber = readline.questionInt(
  (`Escolha um número para executar o script correspondente: \n` +
  `${message[0]} \n` + `${message[1]} \n` + `${message[2]} \n` +
  'Numero escolhido: ')
) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

require(script.script);