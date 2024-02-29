'use strict';

const tasksList = document.querySelector ('.js-task-list');

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
    console.log(data)

    tasks = data.results; // Estamos llamando al objeto al array del objeto que contiene la info que se llama results 

    renderTask();
    })



    const handleClickCheckbox = (event) => {
      const inputId = event.target.id
      const taskIndex = tasks.findIndex((task) => {
        return  task.name === inputId
      })

      tasks.results[taskIndex].completed = true;
      console.log(tasks)
    }
tasksList.addEventListener('click', handleClickCheckbox)
 
  

// const tasks = [
//     {
//         name: 'Recoger setas en el campo',
//         completed: true
//     },
//     { 
//         name: 'Comprar pilas',
//         completed: true
//     },
//     { 
//         name: 'Poner una lavadora de blancos',
//         completed: true
//     },
//     {
//       name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
//       completed: false,
//     },
//   ];

  // for (const task of tasks){
  //   const taskInput = `<input id="${task.name}" type="checkbox">`;
    
  //   tasksList.innerHTML += `
  //   <li class="task">${taskInput}${task.name}</li>
  //   `
  //   // if(task.completed === true){
  //   //   checkbox.checked
  //   // }
  // }
