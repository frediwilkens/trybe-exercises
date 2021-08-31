// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(string){
  for (index in string) {
    if(string[index] != string[(string.length - 1) - index]){
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome("onibus"));