// Seleccionamos los elementos del DOM que vamos a manipular
const todoInput = document.getElementById('todo-input'); // Captura el cuadro de texto donde el usuario escribe
const addTodoBtn = document.getElementById('add-todo-btn'); // Captura el botón verde para añadir tareas
const todoList = document.getElementById('todo-list'); // Captura la lista 'ul' donde se engancharán las tareas
const clearCompletedBtn = document.getElementById('clear-completed-btn'); // Captura el botón para borrar completados

// Estado de la aplicación: un array que guardará objetos de tareas { id, text, completed }
let todos = [];

// 1. Inicializar la Aplicación: Carga datos previos al arrancar la página
function init() {
    const savedTodos = localStorage.getItem('todos'); // Busca si hay tareas guardadas bajo la clave 'todos'
    if (savedTodos) { // Si encontró algo (no está vacío)
        todos = JSON.parse(savedTodos); // Convierte el texto JSON de vuelta a un array de JavaScript
    }
    renderTodos(); // Dibuja las tareas en la pantalla por primera vez
}

// 2. Guardar Tareas: Sincroniza el array actual con el disco duro del navegador
function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos)); // Convierte el array a texto plano y lo guarda
}

// 3. Renderizar la Interfaz: Limpia el HTML y lo reconstruye según lo que haya en el array
function renderTodos() {
    todoList.innerHTML = ''; // Borra todo el contenido visual de la lista para no duplicar elementos

    todos.forEach((todo) => { // Recorre cada tarea del array una por una
        const li = document.createElement('li'); // Crea un elemento de lista 'li' en memoria
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`; // Le asigna clases CSS; si está completada, añade la clase 'completed'

        const checkbox = document.createElement('input'); // Crea un elemento 'input' en memoria
        checkbox.type = 'checkbox'; // Lo transforma específicamente en una casilla de verificación
        checkbox.checked = todo.completed; // Marca o desmarca la casilla según el estado real de la tarea
        checkbox.addEventListener('change', () => toggleTodo(todo.id)); // Escucha cuando el usuario hace clic para cambiar el estado de la tarea

        const taskText = document.createElement('span'); // Crea un contenedor de texto 'span' en memoria
        taskText.textContent = todo.text; // Le asigna el texto de la tarea correspondiente

        li.appendChild(checkbox); // Mete la casilla dentro del elemento de lista 'li'
        li.appendChild(taskText); // Mete el texto dentro del elemento de lista 'li'
        todoList.appendChild(li); // Mete el elemento 'li' completo dentro de la lista 'ul' del HTML
    });
}

// 4. Acción: Añadir una nueva tarea al array de datos
function addTodo() {
    const textValue = todoInput.value.trim(); // Lee el texto ingresado quitando espacios vacíos al inicio y final
    
    if (textValue === '') return; // Si el usuario no escribió nada, detiene la función inmediatamente

    const newTodo = { // Estructura el objeto de la nueva tarea
        id: Date.now(), // Genera un ID único usando los milisegundos del reloj actual
        text: textValue, // Guarda el texto limpio de la tarea
        completed: false // Toda tarea nueva inicia marcada como no completada (falso)
    };

    todos.push(newTodo); // Empuja el nuevo objeto al fondo de nuestro array principal
    saveToLocalStorage(); // Guarda el cambio en LocalStorage
    renderTodos(); // Actualiza la pantalla para mostrar la nueva tarea
    
    todoInput.value = ''; // Limpia el cuadro de texto para dejarlo listo para otra tarea
}

// 5. Acción: Alternar el estado de completado (true/false) al usar el checkbox
function toggleTodo(id) {
    todos = todos.map(todo => { // Recorre y transforma el array buscando la tarea modificada
        if (todo.id === id) { // Si encuentra el ID que coincide con el checkbox pulsado
            return { ...todo, completed: !todo.completed }; // Copia la tarea pero invierte su valor de 'completed' (de false a true, o viceversa)
        }
        return todo; // Si no es el ID buscado, devuelve la tarea exactamente como estaba
    });
    saveToLocalStorage(); // Guarda el estado actualizado en LocalStorage
    renderTodos(); // Redibuja la lista en pantalla reflejando los cambios visuales
}

// 6. Acción: Filtrar y eliminar las tareas marcadas como completadas
function clearCompletedTodos() {
    todos = todos.filter(todo => !todo.completed); // Sobrescribe el array dejando únicamente las tareas que NO estén completadas
    saveToLocalStorage(); // Guarda la lista limpia en LocalStorage
    renderTodos(); // Redibuja la interfaz sin las tareas eliminadas
}

// --- Escuchadores de Eventos (Event Listeners) ---
addTodoBtn.addEventListener('click', addTodo); // Dispara la función de añadir cuando se hace clic en el botón 'Add'

todoInput.addEventListener('keypress', (event) => { // Escucha las teclas que presiona el usuario dentro del cuadro de texto
    if (event.key === 'Enter') { // Si la tecla presionada fue específicamente la tecla 'Enter'
        addTodo(); // Llama automáticamente a la función de añadir tarea
    }
});

clearCompletedBtn.addEventListener('click', clearCompletedTodos); // Dispara el filtro de borrado al pulsar el botón de limpiar completados

// Ejecución Inicial: Arranca todo el mecanismo al cargar la página por primera vez
init();
