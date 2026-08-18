const buscador = document.getElementById('buscador');
const animales = document.querySelectorAll('.animal');

buscador.addEventListener('input', () => {
    const textoUsuario = buscador.value.toLowerCase();

    animales.forEach(animal => {
        const nombreAnimal = animal.textContent.toLowerCase();

        if (nombreAnimal.includes(textoUsuario)) {
            animal.style.display = "block";
        } else {
            animal.style.display = "none";
        }
    });
});
