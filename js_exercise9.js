const todoInput = document.getElementById('todo-input'); 
const addTodoBtn = document.getElementById('add-todo-btn'); 
const todoList = document.getElementById('todo-list'); 
const clearCompletedBtn = document.getElementById('clear-completed-btn'); 

let todos = [];

function init() {
    const savedTodos = localStorage.getItem('todos'); 
    if (savedTodos) { 
        todos = JSON.parse(savedTodos); 
    }
    renderTodos(); 
}

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos)); 
}

function renderTodos() {
    todoList.innerHTML = ''; 

    todos.forEach((todo) => { 
        const li = document.createElement('li'); 
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`; 

        const checkbox = document.createElement('input'); 
        checkbox.type = 'checkbox'; 
        checkbox.checked = todo.completed; 
        checkbox.addEventListener('change', () => toggleTodo(todo.id)); 

        const taskText = document.createElement('span'); 
        taskText.textContent = todo.text; 

        li.appendChild(checkbox); 
        li.appendChild(taskText); 
        todoList.appendChild(li); 
    });
}

function addTodo() {
    const textValue = todoInput.value.trim(); 
    
    if (textValue === '') return; 

    const newTodo = { 
        id: Date.now(), 
        text: textValue, 
        completed: false 
    };

    todos.push(newTodo); 
    saveToLocalStorage(); 
    renderTodos(); 
    
    todoInput.value = ''; 
}

function toggleTodo(id) {
    todos = todos.map(todo => { 
        if (todo.id === id) { 
            return { ...todo, completed: !todo.completed }; 
        }
        return todo; 
    });
    saveToLocalStorage(); 
    renderTodos(); 
}

function clearCompletedTodos() {
    todos = todos.filter(todo => !todo.completed); 
    saveToLocalStorage(); 
    renderTodos(); 
}

addTodoBtn.addEventListener('click', addTodo); 

todoInput.addEventListener('keypress', (event) => { 
    if (event.key === 'Enter') { 
        addTodo(); 
    }
});

clearCompletedBtn.addEventListener('click', clearCompletedTodos); 

init();

