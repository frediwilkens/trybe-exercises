/*
1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/
const a = 60;
const b = 60;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

/*2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

if (a > b) {
    console.log(a)
} else if (b > a) {
    console.log(b)
} else {
    console.log("Números iguais")
}

/*3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.*/

const c = 61;

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else if (c > a && c > b){
    console.log(c)
} else {
    console.log("Números são iguais")
}

/*4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

const d = -7;

if (d > 0) {
    console.log("positive")
} else if (d < 0) {
    console.log("negative")
} else {
    console.log("zero")
}

/*5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.*/

if (a < 0 || b < 0 || c < 0) {
    console.log("ERRO: Ângulo inválido")
} else if (a+b+c === 180){
    console.log(true)
} else {
    console.log(false)
}

/*6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)  */

let nomeDaPeca = "Bispo";

if(nomeDaPeca.toLowerCase() === "peao"){
    console.log("Anda somente para frente, um espaço de cada vez")
} else if(nomeDaPeca.toLowerCase() === "torre"){
    console.log("Anda para frente e para os lados até o fim, não pula peça")
} else if (nomeDaPeca.toLowerCase() === "bispo"){
    console.log("Anda somente nas diagonais, não pula peças")
} else if (nomeDaPeca.toLowerCase() === "cavalo"){
    console.log("Anda em L e pula peças")
} else if (nomeDaPeca.toLowerCase() === "rainha"){
    console.log("Anda livre pelo tabuleiro, porém não pula peças")
} else if (nomeDaPeca.toLowerCase() === "rei"){
    console.log("Anda um espaço para todos os lados")
} else {
    console.log("ERRO: peça inválida")
}

/*7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let nota = 100;

if(nota >= 90 && nota <= 100){
    console.log("A")
} else if(nota < 90 && nota >= 80){
    console.log("B")
} else if(nota < 80 && nota >= 70){
    console.log("C")
} else if(nota < 70 && nota >= 60){
    console.log("D")
} else if(nota < 60 && nota >= 50){
    console.log("E")
} else if(nota < 50 && nota != 0) {
    console.log("F")
} else {
    console.log("Nota inserida inválida")
}

/* 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false. Bonus: use somente um if. */

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    console.log(true)
} else {
    console.log(false)
}

/* 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if. */

if (a % 2 ==! 0 || b % 2 ==! 0 || c % 2 ==! 0){
    console.log(true)
} else {
    console.log(false)
}

/* 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

const custoProduto = 100;
const impostoProduto = 0.2
const valorVendaProduto = 200;
let custoTotal = custoProduto * impostoProduto;
let lucro = valorVendaProduto - custoTotal
if(custoProduto < 0 || valorVendaProduto < 0){
    console.log("ERRO: valores inseridos inválidos")
} else {
    console.log(lucro * 1000)
}

/*11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55. */

let salarioBruto = 3000;
let inss = 0;
let impostoRenda = 0;

if (salarioBruto <= 1556.94){
    inss = salarioBruto * 0.08
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = salarioBruto * 0.11
} else if(salarioBruto > 5189.82){
    inss = 570.88
}

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98){
    impostoRenda = 0;
} else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    impostoRenda = (salarioBase * 0.075) - 142.8
} else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    impostoRenda = (salarioBase * 0.15) - 354.8
} else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    impostoRenda = (salarioBase * 0.225) - 636.13
} else if(salarioBase > 4664.68) {
    impostoRenda = (salarioBase * 0.275) - 869.36
}

salarioLiquido = salarioBase - impostoRenda;

console.log(salarioLiquido)