const select = document.getElementById('input-estado');
const cargoInicio = document.getElementById('input-cargo-inicio');

function brazilStates() {
  const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.value = states[index];
    option.innerText = states[index];
    select.appendChild(option);
  }
}

window.onload = () => {
  brazilStates();
  cargoInicio.DatePickerX.init({
    mondayFirst: true,
    format: 'dd/mm/yyyy'
  })
}