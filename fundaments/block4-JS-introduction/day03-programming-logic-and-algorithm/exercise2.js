//2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let n = 5;

function asteriskTriangle(n){
  let asterisk = "*";
  let line = "";
  if(n > 1){
    for(let i = 0; i <= n; i += 1){
      console.log(line)
      line = line + asterisk
    }
  }
}
asteriskTriangle(n);
