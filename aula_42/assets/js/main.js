const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-btn');
const tasks = document.querySelector('.tasks');

const createLiElement = () => {
    const li = document.createElement('li');
    return li;
};

taskInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        if (!taskInput.value) return;
        createTask(taskInput.value);
    }
});

const clearInput = () => {
    taskInput.value = '';
    taskInput.focus();
};

const createDeleteButton = (li) => {
    li.innerText += '  ';
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Delete';
    clearButton.setAttribute('class', 'delete');
    clearButton.setAttribute('title', 'delete this task');
    li.appendChild(clearButton);
    saveTasks();
}; 

const createTask = (inputText) => {
    const li = createLiElement();
    li.innerText = inputText;
    tasks.appendChild(li);
    clearInput();
    createDeleteButton(li);
};

taskButton.addEventListener('click', () => {
    if (!taskInput.value) return;
    createTask(taskInput.value);
});

document.addEventListener('click', (event) => {
    const element = event.target;
    
    if (element.classList.contains('delete')) {
        element.parentElement.remove();
        saveTasks();
    }
});

const saveTasks = () => {
    const allLi = tasks.querySelectorAll('li');
    const allTasks = [];

    for (let task of allLi) {
        let stringTask = task.innerText;
        stringTask = stringTask.replace('Delete', '').trim();
        allTasks.push(stringTask);
    }

    const JSONtask = JSON.stringify(allTasks);
    localStorage.setItem('items', JSONtask);
}

const addTasks = () => {
    const tasks = localStorage.getItem('items');
    const allTasks = JSON.parse(tasks);
    
    for (let task of allTasks) {
        createTask(task);
    }
}   

addTasks();
