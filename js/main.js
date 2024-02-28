'use strict';

const tasksList = document.querySelector ('.js-task-list');

const GITHUB_USER = 'Mar-CM';
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

fetch(SERVER_URL)
  .then((response) => response.json())
  .then ((data) => {
    console.log(data)

    tasks = data.results; // Estamos llamando al objeto al array del objeto que contiene la info que se llama results 

    for (const task of tasks){
      const taskInput = `<input id="${task.id}" type="checkbox">`;
      tasksList.innerHTML += `
      <li class="task">${taskInput}${task.name}</li>
      `}
    })

  
  

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
