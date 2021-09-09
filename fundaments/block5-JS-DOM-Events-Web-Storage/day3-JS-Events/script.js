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

function dayZoomIn() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '800';
  })
};

function dayZoomOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};
dayZoomIn();
dayZoomOut();

function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};
newTaskSpan('Cozinhar');

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();