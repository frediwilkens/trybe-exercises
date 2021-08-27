//2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let n = 5;

function asteriskTriangle(n){
  let asterisk = "*";
  let space = "";
  let line = ""

  if(n >= 1){
    //percorre as colunas
    for(let columm = 1; columm <= n; columm += 1){
      //preenche a linha
      for(let i = n; i >= 0; i -= 1){
        //verifica se precisa colocar espaço ou asterisco
        if(i < n) {
        line = line + space
        } else if (i = n){
          line = line + asterisk
        }
      }
      //imprime a linha
      console.log(line)
    }
  }
}
asteriskTriangle(n);
