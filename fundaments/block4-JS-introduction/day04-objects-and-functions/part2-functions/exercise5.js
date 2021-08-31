//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function whoRepeatMore(numberList) {
  let repeatTimes = 0;
  let numberCount = 0;
  let indexNumberRepeat = 0;

  for (let index in numberList) {
    let numberCheck = numberList[index];
    for (let index2 in numberList) {
      if (numberCheck === numberList[index2]) {
        numberCount += 1;
      }
    }
    if (numberCount > repeatTimes) {
      repeatTimes = numberCount;
      indexNumberRepeat = index;
    }
    numberCount = 0;
  }
  return numberList[indexNumberRepeat];
}

console.log(whoRepeatMore(arrayTeste));