const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultContainer = document.getElementById('result');

const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

function validateFields() {
    if (num1Input.value === "" || num2Input.value === "") {
        alert("Please, enter both numbers.");
        return false;
    }
    return true;
}

addBtn.addEventListener('click', () => {
    if (!validateFields()) return;
    const total = parseFloat(num1Input.value) + parseFloat(num2Input.value);
    resultContainer.textContent = `Result: ${total}`;
});

subtractBtn.addEventListener('click', () => {
    if (!validateFields()) return;
    const total = parseFloat(num1Input.value) - parseFloat(num2Input.value);
    resultContainer.textContent = `Result: ${total}`;
});

multiplyBtn.addEventListener('click', () => {
    if (!validateFields()) return;
    const total = parseFloat(num1Input.value) * parseFloat(num2Input.value);
    resultContainer.textContent = `Result: ${total}`;
});

divideBtn.addEventListener('click', () => {
    if (!validateFields()) return;
    
    const n2 = parseFloat(num2Input.value);
    if (n2 === 0) {
        alert("Error: Cannot divide by zero.");
        return;
    }
    
    const total = parseFloat(num1Input.value) / n2;
    resultContainer.textContent = `Result: ${total}`;
});

