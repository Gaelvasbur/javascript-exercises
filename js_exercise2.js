const button = document.getElementById('btn-contar');
const counterText = document.getElementById('counter');

let numberOfClicks = 0;

button.addEventListener('click', () => {
    numberOfClicks++; 
    counterText.textContent = `Clicks: ${numberOfClicks}`;
});
