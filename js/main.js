'use strict';

const tasksList = document.querySelector ('.js-task-list');
const newTaskInput = document.querySelector('.js-new-task');
const newTaskBtn = document.querySelector('.js-new-task-btn');

const GITHUB_USER = 'Mar-CM';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));

let tasks = [];

const renderTask = () => {
  tasksList.innerHTML = ''; 
  for (const task of tasks){
    if(task.completed === true){
    tasksList.innerHTML += `
    <li class="crossed task"><input id="${task.id}" type="checkbox" checked>${task.name}</li>
    `} else {
      tasksList.innerHTML += `
      <li class="task"><input id="${task.id}" type="checkbox">${task.name}</li>
      `
    }
}
}

if (tasksLocalStorage !== null) {
  tasks = tasksLocalStorage
  renderTask();
} else {
  
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      tasks = data.results;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTask();
    })
    .catch((error) => {
      console.error(error);
    });
}

// fetch(SERVER_URL)
//   .then((response) => response.json())
//   .then ((data) => {
//     // console.log(data)

//     tasks = data.results; // Estamos llamando al objeto al array del objeto que contiene la info que se llama results 

//     renderTask();
// });



const handleClickCheckbox = (event) => {
  const idTask = parseInt(event.target.id);
  
  const indexTask = tasks.findIndex((task) => {
    return  task.id === idTask
  })
  
  tasks[indexTask].completed = event.target.checked;
  renderTask();
}

tasksList.addEventListener('click', handleClickCheckbox);

//AGREGAR NUEVA TAREA
let id = 0
const handleNewTask = (event) => {
  event.preventDefault();
  const newTask = {
    id: id++,
    name: newTaskInput.value,
    completed: false,
  }
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  renderTask();
}


  
newTaskBtn.addEventListener('click', handleNewTask);