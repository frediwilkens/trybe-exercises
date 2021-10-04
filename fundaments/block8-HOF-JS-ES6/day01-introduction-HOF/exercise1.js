const newEmployee = name => {
  const employeeEmail = name.split(' ').join('');
  const employee = {
    nomeCompleto: `${name}`,
    email: `${employeeEmail}@trybe.com`
  }
  return employee;
}

const newEmployees = () => {
  const newEmployees = {
  id1: newEmployee('Pedro Guerra'),
  id2: newEmployee('Luiza Drumond'),
  id3: newEmployee('Carla Paiva')    
  }
  return newEmployees;
}
console.log(newEmployees());