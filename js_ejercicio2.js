const boton = document.getElementById('btn-contar');
const textoContador = document.getElementById('contador');

let numeroDeClics = 0;

boton.addEventListener('click', () => {
    numeroDeClics++; 
    textoContador.textContent = `Clics: ${numeroDeClics}`;
    
});

