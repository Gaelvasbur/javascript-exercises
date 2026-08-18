const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');
const contenedorResultado = document.getElementById('resultado');

const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');
const btnMultiplicar = document.getElementById('btn-multiplicar');
const btnDividir = document.getElementById('btn-dividir');

function validarCampos() {
    if (inputNum1.value === "" || inputNum2.value === "") {
        alert("Por favor, introduce ambos números.");
        return false;
    }
    return true;
}

btnSumar.addEventListener('click', () => {
    if (!validarCampos()) return;
    const total = parseFloat(inputNum1.value) + parseFloat(inputNum2.value);
    contenedorResultado.textContent = `Resultado: ${total}`;
});

btnRestar.addEventListener('click', () => {
    if (!validarCampos()) return;
    const total = parseFloat(inputNum1.value) - parseFloat(inputNum2.value);
    contenedorResultado.textContent = `Resultado: ${total}`;
});

btnMultiplicar.addEventListener('click', () => {
    if (!validarCampos()) return;
    const total = parseFloat(inputNum1.value) * parseFloat(inputNum2.value);
    contenedorResultado.textContent = `Resultado: ${total}`;
});

btnDividir.addEventListener('click', () => {
    if (!validarCampos()) return;
    
    const n2 = parseFloat(inputNum2.value);
    if (n2 === 0) {
        alert("Error: No se puede dividir entre cero.");
        return;
    }
    
    const total = parseFloat(inputNum1.value) / n2;
    contenedorResultado.textContent = `Resultado: ${total}`;
});
