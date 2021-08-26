/*
Exercícios do dia 

Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;
6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;
8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
}

//2
let somaDosValores = 0;
for(let indice = 0; indice < numbers.length; indice += 1){
    somaDosValores = somaDosValores + numbers[indice];
}
console.log(somaDosValores);

//3
let mediaAritmetica = somaDosValores / numbers.length;
console.log(mediaAritmetica);

//4
if(mediaAritmetica > 20){
    console.log("valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

//5
let maiorValor = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if (maiorValor < numbers[index]){
        maiorValor = numbers[index];
    }
}
console.log(maiorValor);

//6
let valorImpar = 0;
for(index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0) {
        valorImpar += 1;
    }
}
console.log(valorImpar);

//7
let menorValor = numbers[0];
for(index = 0; index < numbers.length; index += 1){
    if(menorValor > numbers[index]){
        menorValor = numbers[index];
    }
}
console.log(menorValor);
