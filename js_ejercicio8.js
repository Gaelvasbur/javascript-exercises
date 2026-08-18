const textInput = document.getElementById('text-input');
const wordCountDisplay = document.getElementById('word-count'); 
const characterCountDisplay = document.getElementById('character-count'); 

textInput.addEventListener('input', () => {
    const textValue = textInput.value; 
//desde aqui dos lineas para contar caracteres
    const cleanCharacters = textValue.replace(/[\s\n]/g, ''); //  Usa la Expresión Regular para buscar todos los espacios y enters del párrafo y borrarlos sustituyéndolos por nada.(junta todo)
    const totalCharacters = cleanCharacters.length; //  Mide la longitud de la cadena de texto limpia que quedó para saber cuántos caracteres reales hay en la memoria.

    //desde aqui tres lineas para contar palabras incluyendo todo el if
    const trimmedText = textValue.trim(); // Borra los espacios vacíos que el usuario deje por error al principio o al final de todo el párrafo.
    
    let totalWords = 0; // Crea una variable numérica para guardar el conteo de palabras, inicializándola firmemente en cero.
    
    if (trimmedText !== "") { //Revisa mediante un condicional si el cuadro de texto contiene información real y no está completamente vacío.
        const wordsArray = trimmedText.split(/\s+/); // Usa el método .split con RegEx para usar cualquier grupo de espacios como tijeras y cortar el texto en palabras.
        totalWords = wordsArray.length; // Accede a la propiedad nativa del Array resultante para contar cuántas palabras individuales quedaron guardadas en la lista.
    } 
//Y aqui simplemente los resultados los mostramos en pantalla
    characterCountDisplay.textContent = totalCharacters; // actualiza en pantalla el número de caracteres reales.
    wordCountDisplay.textContent = totalWords; // actualiza en pantalla el número total de palabras calculadas.
});


//js sabe dónde dividir porque para contar palabras usa el primer texto que aún conserva los espacios textValue que va a trimmedText y luego a wordsArray, y para contar caracteres usa la copia de las palabras donde ya le quitamos los espacios para que queden juntos. 