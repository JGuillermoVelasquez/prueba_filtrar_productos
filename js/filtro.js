//Declaración de constantes que almacenan nodos por id.
const selectInput = document.querySelector("#categorias");
const output = document.getElementById("listas_productos");

//Añadiendo un controlador de evento DOMContentLoaded en la ventana del navegador
window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
});

//Añadiendo un controlador de evento en el elemento select con id "categorias"
selectInput.addEventListener("change", e => {
    output.textContent = `Has elegido la categoría ${e.target.value}`;
});