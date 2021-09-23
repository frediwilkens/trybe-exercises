const testingScope = (escopo) => {
  if (escopo === true) {
    let text = 'ótimo, fui utilizada no escopo !'
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ${text}`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);