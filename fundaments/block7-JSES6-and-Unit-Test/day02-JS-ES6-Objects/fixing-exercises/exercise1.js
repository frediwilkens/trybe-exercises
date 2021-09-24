const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = (student) => {
  const skillsList = Object.keys(student);
  for (index in skillsList) {
    console.log(`${skillsList[index]}, Nível: ${student[skillsList[index]]}`);
  }
}

console.log('Estudante 1');
skills(student1);
console.log('Estudante 2');
skills(student2);