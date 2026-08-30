const searchInput = document.getElementById('search-input');
const animals = document.querySelectorAll('.animal');

searchInput.addEventListener('input', () => {
    const userText = searchInput.value.toLowerCase();

    animals.forEach(animal => {
        const animalName = animal.textContent.toLowerCase();

        if (animalName.includes(userText)) {
            animal.style.display = "block";
        } else {
            animal.style.display = "none";
        }
    });
});
