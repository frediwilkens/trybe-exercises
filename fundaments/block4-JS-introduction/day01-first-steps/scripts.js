/*  Parte 1
1. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
3. Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.
5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
6. Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?
*/

/*1*/
//const myName = "Frederico";
/*2*/
//const birthCity = "Porto Alegre";
/*3*/
//let birthYear = 1994;

/*4*/
//console.log(myName);
//console.log(birthCity);
//console.log(birthYear);

/*5*/
//birthYear = 2030;
//console.log(birthYear);

/*6*/
//birthCity = "Londres";
/*Error explanation: birthCity is a constant not a variable so is not possible to attribute a new value. */

/* PARTE 2 
1.Crie uma costante chamada base e uma variável chamada height e .atribua os seus respectivos valores: 5 e 8.
2.Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
3.Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
*/

/*1*/
//const base = 5;
//let height = 8;
/*2*/
//const area = base * height;
//console.log(area);
/*3*/
//const perimeter = (base * 2) + (height * 2);
//console.log(perimeter);


/* PARTE 3
1.Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
2.Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"
3.Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
4.Altere o valor da nota para verificar se as condições que você implementou funcionam;*/

/*1 and 4*/
//const nota = 80;
//const nota = 55;
const nota = 60;
/*2 and 3*/
if(nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!")
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera")
} else {
    console.log("Você foi reprovada(o)")
}
