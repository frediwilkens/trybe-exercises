const readline = require('readline-sync');

const distance = readline.questionInt('Quuantos metros foram percorridos?');
const time = readline.questionInt('Quantos segundos demorou?');

function avgSpeed(distance, time) {
  return distance/time;
}

console.log(`A velocidade média foi: ${avgSpeed(distance, time)} m/s`);