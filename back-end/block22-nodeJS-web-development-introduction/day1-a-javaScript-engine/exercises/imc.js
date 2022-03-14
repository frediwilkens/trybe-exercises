const readline = require('readline-sync');

console.log('Responda as perguntas abaixo e descubra seu IMC');

const name = readline.question('Qual seu nome? ');
const weight = readline.questionFloat('Qual o seu peso: ');
const height = readline.questionFloat('Qual sua altura em metros: ');


function imc(weight, height) {
  const divisor = height * height;
  return weight / divisor;
}

function checkIMC(imc) {
  if (imc < 18.5) return 'Situação: Abaixo do peso (magreza)';
  if (imc < 25 && imc >= 18.5) {
    return 'Situação: Peso normal';
  }
  if (imc < 30 && imc >= 25) {
    return 'Situação: Acima do peso (sobrepeso)';
  }
  if (imc < 35 && imc >= 30) {
    return 'Situação: Obesidade grau I';
  }
  if (imc < 40 && imc >= 35) {
    return 'Situação: Obesidade grau II';
  }
  if (imc > 40) {
    return 'Situação: Obesidade grau III e IV';
  }
  else ('Você digitou um dado inválido');
}

console.log('Confira seu resultado:');
console.log(`Nome: ${name}`);
console.log(`Altura: ${height}`);
console.log(`Peso: ${weight}`);
console.log(`IMC: ${imc(weight, height).toFixed(2)}`);
console.log(checkIMC(imc(weight, height)));