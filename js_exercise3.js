const taskInput = document.getElementById('input');
const addButton = document.getElementById('btn-add');
const dynamicList = document.getElementById('dynamic-list');

addButton.addEventListener('click', () => {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please, write something before adding.");
        return; 
    }

    const newItem = document.createElement('li');
    newItem.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn-erase";
    
    newItem.appendChild(deleteButton);
    dynamicList.appendChild(newItem);

    deleteButton.addEventListener('click', () => {
        newItem.remove();
    });

    taskInput.value = "";
    taskInput.focus();
});

