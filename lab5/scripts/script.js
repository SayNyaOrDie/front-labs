document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const taskListContainer = document.getElementById('taskListContainer');
  
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => renderTask(task));
  
    todoForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const taskName = document.getElementById('taskName').value;
      const taskDescription = document.getElementById('taskDescription').value;
  
      const task = { name: taskName, description: taskDescription, done: false };
  
      savedTasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(savedTasks));
  
      renderTask(task);
  
      todoForm.reset();
    });
  
    function renderTask(task) {
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');
  
      const taskName = document.createElement('h3');
      taskName.textContent = task.name;
  
      const taskDescription = document.createElement('p');
      taskDescription.textContent = task.description;
  
      const markDoneButton = document.createElement('button');
      markDoneButton.textContent = 'Mark as Done';
      markDoneButton.addEventListener('click', function () {
        task.done = true;
        updateLocalStorage();
        updateTaskStatus(taskDiv, task.done);
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        const index = savedTasks.indexOf(task);
        savedTasks.splice(index, 1);
        updateLocalStorage();
        taskDiv.remove();
      });
  
      taskDiv.appendChild(taskName);
      taskDiv.appendChild(taskDescription);
      taskDiv.appendChild(markDoneButton);
      taskDiv.appendChild(deleteButton);
  
      updateTaskStatus(taskDiv, task.done);
  
      taskListContainer.appendChild(taskDiv);
    }
  
    function updateTaskStatus(taskDiv, isDone) {
      const taskName = taskDiv.querySelector('h3');
  
      if (isDone) {
        taskName.innerHTML = `${taskName.textContent} <span class="done-mark">&#x2713;</span>`;
        taskDiv.classList.add('done');
      } else {
        taskName.innerHTML = taskName.textContent;
        taskDiv.classList.remove('done');
      }
    }
  
    function updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(savedTasks));
    }
  });
  
