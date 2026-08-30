const timerDisplay = document.getElementById('display');
const startButton = document.getElementById('btn-start');
const pauseButton = document.getElementById('btn-pause');
const resetButton = document.getElementById('btn-reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null;

function updateDisplay() {
    let s = seconds < 10 ? '0' + seconds : seconds;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let h = hours < 10 ? '0' + hours : hours;
    
    timerDisplay.textContent = `${h}:${m}:${s}`;
}

startButton.addEventListener('click', () => {
    if (timerInterval !== null) return; 

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


