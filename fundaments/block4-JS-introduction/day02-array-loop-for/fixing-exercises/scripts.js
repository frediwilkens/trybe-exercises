//exercícios de fixação

// Parte 1

//1 - obtenha o valor "Serviços" do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//2 - procure o índice do valor "Portfólio" do array menu:

let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

//3 - adicione o valor "Contato" no final do array menu:

menu.push('Contato');
console.log(menu);

// Parte 2

// 1 - Utilize o for para imprimir os elementos da lista grecryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

// Parte 3

// 1 - Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let elements of names) {
    console.log(elements);
}
