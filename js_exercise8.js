const textInput = document.getElementById('text-input');
const wordCountDisplay = document.getElementById('word-count'); 
const characterCountDisplay = document.getElementById('character-count'); 

textInput.addEventListener('input', () => {
    const textValue = textInput.value; 

    const cleanCharacters = textValue.replace(/[\s\n]/g, ''); 
    const totalCharacters = cleanCharacters.length; 

    const trimmedText = textValue.trim(); 
    
    let totalWords = 0; 
    
    if (trimmedText !== "") { 
        const wordsArray = trimmedText.split(/\s+/); 
        totalWords = wordsArray.length; 
    } 

    characterCountDisplay.textContent = totalCharacters; 
    wordCountDisplay.textContent = totalWords; 
});
