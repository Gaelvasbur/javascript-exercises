const timerDisplay = document.getElementById('display');
const startButton = document.getElementById('btn-start');
const pauseButton = document.getElementById('btn-pause');
const resetButton = document.getElementById('btn-reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;

//funcion que indica como se vera el temporizador en pantalla
function updateDisplay() {
    let s = seconds < 10 ? '0' + seconds : seconds;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let h = hours < 10 ? '0' + hours : hours;
    
    timerDisplay.textContent = `${h}:${m}:${s}`;
}

startButton.addEventListener('click', () => {
    if (timerInterval !== null) return; // si al presionar start ya habia empezado a contar lo paras yendo al return, y si no y es null, sigues con el codigo a timerInterval=1 por ej

    //Aqui setInterval retorna 1, realiza la cuenta que luego manda al visualizador div y con la regla de esperarse 1 segundo humano antes de ejecutar el codigo
    timerInterval = setInterval(() => {
        seconds++;
        
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        
        updateDisplay();
    }, 1000);
});
//detiene nuestro proceso actual 1, con clearInterval(), y con timerInterval = null cambia el valor en memoria 1 por null
pauseButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
});


