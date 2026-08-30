const button = document.getElementById('btn-color');

function generateRandomColor() {
    const characters = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += characters[Math.floor(Math.random() * 16)];
    }
    return hexColor;
}

button.addEventListener('click', () => {
    document.body.style.backgroundColor = generateRandomColor();
});
