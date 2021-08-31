//  Crie uma função que receba um array de inteiros e retorne o índice do maior valor,

let arrayTest = [2, 3, 6, 7, 10, 1];

function greatestIndex(array) {
  let value = array[0];
  let position = 0;
  for (let index = 0; index < array.length; index += 1){
    if (array[index] > value){
      value = array[index];
      position = index;
    }
  }
  return position;
}

console.log(greatestIndex(arrayTest));