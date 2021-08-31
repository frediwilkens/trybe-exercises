// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggerName(nameList) {
  let numberOfLetters = nameList[0].length
  let posicao = 0;

  for(let index = 0; index < nameList.length; index += 1){
    if (nameList[index].length > numberOfLetters){
      numberOfLetters = arrayTeste[index].length
      posicao = index;
    }
  }
  return nameList[posicao]
}

console.log(biggerName(arrayTeste));