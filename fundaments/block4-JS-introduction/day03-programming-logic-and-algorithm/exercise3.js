let n = 5;

function asteriskTriangle(n){
  //declaracao de variáveis
  let asterisk = "*";
  let line = "";
  let spaceControl = n;
  //verifica se n é maior que 1;
  if(n > 1){
    //percorre o numero n de linhas;
    for(let lineIndex = 0; lineIndex <= n; lineIndex += 1){
      //preenche a linha de acordo com a coluna;
      for (let columnIndex = 0; columnIndex <= n; columnIndex += 1){
        //verifica se tem que colocar espaço ou asterico;
        if (columnIndex < spaceControl){
          line = line + " ";
        } else {
          line = line + asterisk;
        }
      }
      //imprime a linha
      console.log(line);
      //reseta a linha para percorrer a próxima linha
      line = "";
      //controla os espaços antes dos astericos.
      spaceControl -= 1;
    }
  }
}
asteriskTriangle(n);