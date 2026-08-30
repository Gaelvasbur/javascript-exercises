const lengthInput = document.getElementById('password-length');
const generateButton = document.getElementById('btn-generate');
const resultDisplay = document.getElementById('password-result');

function generateRandomPassword(passwordLength) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let generatedPassword = '';
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); //se consigue un numero y lo guarda en variable
        generatedPassword += characters[randomIndex]; // el numero ej 10 20 y 30, lo procesa de forma individual, va a su letra y la concatena en generatedPassword, luego se olvida de ella va al 20 y obtiene su letra, y lo mismo con el 30, quedando un string de ej 3 letras guardado en la variable
    }
    
    return generatedPassword;
}

generateButton.addEventListener('click', () => {
    const inputValue = lengthInput.value;

    if (inputValue === "" || parseInt(inputValue) < 4) {
        alert("Error: The length must be a number greater than or equal to 4.");
        return;
    }

    const passwordLength = parseInt(inputValue);
    resultDisplay.textContent = generateRandomPassword(passwordLength);
});


