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
    const taskInput = `<input id="${task.name}" type="checkbox">`;
    
    tasksList.innerHTML += `
    <li class="task">${taskInput}${task.name}</li>
    `

    if(task.completed === true){
      checkbox.checked
    }
  }
