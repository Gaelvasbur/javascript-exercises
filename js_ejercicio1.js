const boton = document.getElementById('btn-color');

function generarColorAleatorio() {
    const caracteres = '0123456789ABCDEF';
    let colorHex = '#';
    for (let i = 0; i < 6; i++) {
        colorHex += caracteres[Math.floor(Math.random() * 16)];
    }
    return colorHex;
}

boton.addEventListener('click', () => {
 
    document.body.style.backgroundColor = generarColorAleatorio();
});
