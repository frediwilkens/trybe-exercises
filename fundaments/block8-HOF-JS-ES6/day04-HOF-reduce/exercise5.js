// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((timeThatAppears, name) =>
    timeThatAppears + name.split('').reduce((appears, letter) => {
      if (letter === 'a' || letter === 'A') {
        return appears + 1;
      }
      return appears;
    }, 0), 0);
}

console.log(containsA());