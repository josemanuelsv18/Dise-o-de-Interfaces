document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón y el elemento del precio
    const button = document.getElementById('enviar');
    const priceElement = document.getElementById('price');
    
    // Agrega el event listener al botón
    button.addEventListener('click', function() {
        // Cambia el texto del elemento del precio
        priceElement.textContent = '$271.10';
    });
});