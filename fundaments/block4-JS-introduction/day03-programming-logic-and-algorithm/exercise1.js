//1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 5;

function asteriskSquare(n){
  let asterisk = "*";
  let lineOfAsterisk = "";
  if(n > 1){
    for(let line =1; line <= n; line += 1){
     lineOfAsterisk = lineOfAsterisk + asterisk;
    }
    for(let columm = 1; columm <= n; columm += 1){
      console.log(lineOfAsterisk);
    }
  }
  
}
asteriskSquare(n);
