function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyRandomColors(element) {
    // Generamos 3 colores
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();

    // Aplicamos los colores al elemento
    element.style.backgroundColor = color1;
    element.style.borderColor = color2;
    element.style.color = color3;
}

// Seleccionamos todos los h1 de las tarjetas
const headers = document.querySelectorAll('.cardLetra h1');

// A cada uno le asignamos un evento de clic
headers.forEach(header => {
    header.addEventListener('click', () => {
        const card = header.parentElement; // obtenemos el div.cardLetra
        applyRandomColors(card); // aplicamos colores al contenedor
    });
});