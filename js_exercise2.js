const button = document.getElementById('count-btn');
const counterText = document.getElementById('counter');

let numberOfClicks = 0;

button.addEventListener('click', () => {
    numberOfClicks++; 
    counterText.textContent = `Clicks: ${numberOfClicks}`;
});
