// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let test = 5;

function addUntil(numero){
  let soma = 0;
  for(let index = 1; index <= numero; index += 1){
    soma = soma + index;
  }
  return soma;
}

console.log(addUntil(test));