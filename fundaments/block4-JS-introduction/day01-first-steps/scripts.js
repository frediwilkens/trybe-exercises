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
//const nota = 60;
/*2 and 3*/
//if(nota >= 80){
//    console.log("Parabéns, você foi aprovada(o)!")
//} else if (nota < 80 && nota >= 60) {
//    console.log("Você está na nossa lista de espera")
//} else {
//    console.log("Você foi reprovada(o)")
//}


/*PARTE 4
Operador &&
1.Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
2.Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
3.Implemente condicionais para que:
Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
4.Agora imprima a variável message fora das suas condições.
*/

/*1*/
const currentHour = 16;
/*2*/
let message = "";
/*3*/
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!"
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
}
/*4*/
console.log(message);

/*Operador ||
1.Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
2.Implemente condicionais para que:
Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
Se for algum dia de fim de semana, imprima "FINALMENTE, descando merecido UwU".
*/

/*1*/
let weekDay = "quarta-feira";
/*2*/
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log("FINALMENTE descando merecido UwU")
}