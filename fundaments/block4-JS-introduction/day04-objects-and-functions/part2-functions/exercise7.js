//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function checkIfEndIn(word, ending) {
  word = word.split('');
  ending = ending.split('');
  control = true;
  for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length - ending.length + index] != ending[index]) {
      control = false;
    }
  }
  return control;
}

console.log(checkIfEndIn("Frederico", "erico"));