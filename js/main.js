'use strict';

const tasksList = document.querySelector ('.js-task-list');
const newTaskInput = document.querySelector('.js-new-task');
const newTaskBtn = document.querySelector('.js-new-task-btn');

const GITHUB_USER = 'Mar-CM';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

const renderTask = () => {
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

fetch(SERVER_URL)
  .then((response) => response.json())
  .then ((data) => {
    // console.log(data)

    tasks = data.results; // Estamos llamando al objeto al array del objeto que contiene la info que se llama results 

    renderTask();
});



const handleClickCheckbox = (event) => {
  const inputId = event.target.id
  console.log(tasks);
  const taskIndex = tasks.findIndex((task) => {
    return  task.name === inputId
  })
  console.log(inputId);
  tasks.results[taskIndex].completed = true;
  
}
tasksList.addEventListener('click', handleClickCheckbox)
 
const handleNewTask = (event) => {
  event.preventDefault();
  const newTask = {
    name: newTaskInput.value,
    completed: false,
  }
  // console.log(tasks);
  
}
  
newTaskBtn.addEventListener('click', handleNewTask);