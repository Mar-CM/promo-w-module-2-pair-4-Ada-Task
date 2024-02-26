'use strict';

const tasksList = document.querySelector ('.js-task-list');

const tasks = [
    {
        name: 'Recoger setas en el campo',
        completed: true
    },
    { 
        name: 'Comprar pilas',
        completed: true
    },
    { 
        name: 'Poner una lavadora de blancos',
        completed: true
    },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];

  for (const task of tasks){
    tasksList.innerHTML += `
    <li class="task"><input type="checkbox">${task.name}</li>
    `
  }
