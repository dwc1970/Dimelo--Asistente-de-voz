// Obtener referencia al contenedor de imágenes
const imageContainer = document.getElementById('imageContainer');
// Obtener referencia al contenedor de respuestas
const respuestaContainer = document.getElementById('respuesta');

// Función para manejar el clic en las imágenes
function handleClick(event) {
    // Obtener la respuesta asociada a la imagen
    const answer = event.target.dataset.answer;
    // Mostrar la respuesta en el contenedor de respuestas
    respuestaContainer.textContent = answer;
    // Hacer que la asistente de voz lea la respuesta
    const utterance = new SpeechSynthesisUtterance(answer);
    speechSynthesis.speak(utterance);
}

// Agregar un evento de clic a cada imagen
const images = document.querySelectorAll('.interactive-image');
images.forEach(image => {
    image.addEventListener('click', handleClick);
});
