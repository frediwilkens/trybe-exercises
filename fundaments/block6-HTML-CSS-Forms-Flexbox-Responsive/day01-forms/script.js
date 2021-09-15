const selectState = document.getElementById('input-estado');
const cargoInicioInput = document.getElementById('input-cargo-inicio');
const submitButton = document.getElementById('submit');

function fillSelectState() {
  const state = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const initials = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];
  for (let index = 0; index < state.length; index +=1) {
    const option = document.createElement('option');
    option.value = initials[index];
    option.innerText = state[index];
    selectState.appendChild(option);
  }
}

function dateValidation(input){
  if(input.value.length === 0){
    return {
      message: 'A data não foi preenchida!'
    }
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
  
  if(!regex.test(input.value)){
    return {
      message: 'Data: Formato inválido'
    };
  }

  let splitted = input.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if(day < 0 || day > 30){
    return {
      message: 'Dia inválido'
    };
  }

  if(month < 0 || month > 12){
    return {
      message: 'Mês inválido'
    }
  }

  if(year < 0) {
    return {
      message: 'Ano inválido'
    };
  }

  return true;
}

function submitTests() {
  submitButton.addEventListener('click', () => {
    dateValidation(cargoInicioInput)
  })
}

window.onload = () => {
fillSelectState();
}
