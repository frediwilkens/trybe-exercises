function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// 1
function createMonthDays() {
  let daysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    }
  }
}
createMonthDays(dezDaysList);

// 2
let buttonContainer = document.querySelector('.buttons-container')
function addHolidayButton(string) {
  button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = string;
  buttonContainer.appendChild(button);
}
addHolidayButton('Feriados');

// 3
function highlightHolidays() {
  let holidayButton = document.querySelector('#btn-holiday');
  let holidays = document.getElementsByClassName('holiday');
  let backgroundColor = 'rgb(238, 238, 238)';
  let highLightColor = 'lightgreen';

  holidayButton.addEventListener('click', function(){
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === highLightColor) {
        holidays[index].style.backgroundColor = backgroundColor;
      } else {
        holidays[index].style.backgroundColor = highLightColor;
      }
    }
  });
};

highlightHolidays();

function addFridayButton(string) {
  button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerHTML = string;
  buttonContainer.appendChild(button);
}
addFridayButton('Sexta-feira');

function highlightfridays() {
  let fridayButton = document.querySelector('#btn-friday');
  let friday = document.getElementsByClassName('friday');
  let defaultText = []
  for(let i = 0; i < friday.length; i += 1) {
    defaultText.push(friday[i].innerHTML);
  }
  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < friday.length; index += 1) {
      let fridayText = "Mufasa's day";
      if (friday[index].innerHTML === defaultText[index]) {
        friday[index].innerHTML = fridayText;
      } else {
        friday[index].innerHTML = defaultText[index]
      }
    }
    }
  )
};
highlightfridays();