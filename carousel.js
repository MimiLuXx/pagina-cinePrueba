// Lista de imágenes para el carrusel
const images = ["images/terrifier.jpg", "images/venom.jpg", "images/rey.jpg"];
let currentIndex = 0;

// Selecciona el elemento de imagen en el HTML
const carouselImage = document.getElementById("carousel-image");

// Función para mostrar la imagen anterior
function previousImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    carouselImage.src = images[currentIndex];
}

// Función para mostrar la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    carouselImage.src = images[currentIndex];
}
