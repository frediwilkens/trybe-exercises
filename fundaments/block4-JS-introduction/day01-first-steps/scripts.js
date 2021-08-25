/*  Parte 1
1. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
3. Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.
5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
6. Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?
*/

/*1*/
const myName = "Frederico";
/*2*/
const birthCity = "Porto Alegre";
/*3*/
let birthYear = 1994;

/*4*/
console.log(myName);
console.log(birthCity);
console.log(birthYear);

/*5*/
birthYear = 2030;
console.log(birthYear);

/*6*/
birthCity = "Londres";
/*Error explanation: birthCity is a constant not a variable so is not possible to attribute a new value. */