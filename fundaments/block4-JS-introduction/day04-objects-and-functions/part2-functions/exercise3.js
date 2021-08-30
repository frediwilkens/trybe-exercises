// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let arrayTest = [2, 4, 6, 7, 10, 0, -3];

function lowestIndex(array) {
  let value = array[0];
  let position = 0;
  for (let index = 0; index < array.length; index += 1){
    if (array[index] < value){
      value = array[index];
      position = index;
    }
  }
  return position;
}

console.log(lowestIndex(arrayTest));