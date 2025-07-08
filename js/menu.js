const menutoggle = document.getElementById('menutoggle');
const links = document.getElementById('links');

// Abrir y cerrar el menú con el botón
menutoggle.addEventListener('click', (event) => {
    links.classList.toggle('active');
    event.stopPropagation(); // Evitar que el clic en el botón se propague
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    // Si el clic no fue en el menú ni en el botón, cerramos el menú
    if (!links.contains(event.target) && !menutoggle.contains(event.target)) {
        links.classList.remove('active');
    }
});


