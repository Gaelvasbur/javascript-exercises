const inputTarea = document.getElementById('input-tarea');
const botonAgregar = document.getElementById('btn-agregar');
const listaDinamica = document.getElementById('lista-dinamica');

botonAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim();

    if (texto === "") {
        alert("Por favor, escribe algo antes de agregar.");
        return; 
    }

    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = texto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = "Eliminar";
    
    nuevoElemento.appendChild(botonEliminar);
    listaDinamica.appendChild(nuevoElemento);

    botonEliminar.addEventListener('click', () => {
        nuevoElemento.remove();
    });

    inputTarea.value = "";
    inputTarea.focus();
});
