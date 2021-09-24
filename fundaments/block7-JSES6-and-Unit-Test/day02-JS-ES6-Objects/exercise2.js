const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addShift = (destiny, key, value) => {
  destiny[`${key}`] = value;
}
addShift(lesson2, 'turno', 'noite');

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (object) => {
  const keys = Object.keys(object);
  return keys;
}

//Crie uma função para mostrar o tamanho de um objeto.
const objectLenght = (object) => {
  const length = listKeys(object).length
  return length;
}

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valuesList = (object) => {
  const values = Object.values(object);
  return values;
}

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
let allLessons = {};
allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const nStudents = () => {
  let students = 0;
  for(let key in allLessons) {
    students = students + allLessons[`${key}`].numeroEstudantes
  }
  return students;
}
nStudents();

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueOf = (object, number) => {
  const values = Object.values(object);
  return `${values[number]}`;
}

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (object, key, value) => {
  const pairs = Object.entries(object);
  let result = true;
  for (let index = 0; index < pairs.length; index += 1) {
    if (pairs[index][0] === key && pairs[index][1] === value) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}
