'use strict';

const tasksList = document.querySelector ('.js-task-list');
const newTaskInput = document.querySelector('.js-new-task');
const newTaskBtn = document.querySelector('.js-new-task-btn');
const searchBtn = document.querySelector('.js-search-btn');
const searchInput = document.querySelector('.js-search-input');


const GITHUB_USER = 'Mar-CM';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));

let tasks = [];

const renderTask = (tasks) => {
  tasksList.innerHTML = ''; 
  for (const task of tasks){

    const liElement = document.createElement('li');
    tasksList.appendChild(liElement);
    liElement.classList.add('task');

    const inputElement = document.createElement('input');
    liElement.appendChild(inputElement);
    inputElement.setAttribute('id', task.id);
    inputElement.setAttribute('type', 'checkbox');

    const nameElement = document.createTextNode(task.name);
    liElement.appendChild(nameElement);

    if (task.completed === true){
      liElement.classList.add('crossed');
      inputElement.setAttribute('checked','');
    } else {
      liElement.classList.remove('crossed');
      inputElement.removeAttribute('checked', '');
    }

}
}

if (tasksLocalStorage !== null) {
  tasks = tasksLocalStorage
  console.log(tasks)
  renderTask(tasks);
} else {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      tasks = data.results;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTask(tasks);
    })
    .catch((error) => {
      console.error(error);
    });
}


const handleClickCheckbox = (event) => {
  const idTask = parseInt(event.target.id);
  
  const indexTask = tasks.findIndex((task) => {
    return  task.id === idTask
  })
  
  tasks[indexTask].completed = event.target.checked;
  localStorage.setItem('tasks', JSON.stringify(tasks));

  renderTask(tasks);
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

  renderTask(tasks);
}
 
newTaskBtn.addEventListener('click', handleNewTask);

const handleSearch = (event) => {
  event.preventDefault();
  
  const searchValue = searchInput.value;
  const searchArray = tasks.filter(tasks => tasks.name.includes(searchValue))
  console.log(searchArray)
  renderTask(searchArray)
}

searchBtn.addEventListener('click', handleSearch)