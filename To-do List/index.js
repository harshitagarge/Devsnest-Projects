const form = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');


document.addEventListener('DOMContentLoaded', showTasks);
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', removeAllTasks);

function addTask(e) {
    if(taskInput.value === '') {
        alert("Please add any task!");
    } else {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
    
        const link = document.createElement('a');
        link.className = "delete-item secondary-content"
        link.innerHTML = '<i class="fas fa-times-circle"></i>';
    
        li.appendChild(link);
        taskList.appendChild(li);
    
        addTaskToLocalStorage(taskInput.value);

        taskInput.value = "";
    }

    e.preventDefault();
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }

    removeFromLoacalStorage(e.target.parentElement.parentElement);
}

function removeAllTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // taskList.innerHTML = "";

    localStorage.clear();
}

function addTaskToLocalStorage(task) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeFromLoacalStorage(taskValue) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach((task, index) => {
        if(taskValue.textContent === task)
            tasks.splice(index, 1);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        //create new list node and add the value of task input
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        

        //create new link node
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fas fa-times-circle"></i>';

        li.appendChild(link);

        taskList.appendChild(li);
    
    });
}