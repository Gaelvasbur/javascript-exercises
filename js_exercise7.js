const lengthInput = document.getElementById('password-length');
const generateButton = document.getElementById('btn-generate');
const resultDisplay = document.getElementById('password-result');

function generateRandomPassword(passwordLength) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let generatedPassword = '';
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); 
        generatedPassword += characters[randomIndex]; 
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


