//Declaración de constantes que almacenan nodos por id.
const selectInput = document.querySelector("#categorias");
const outputProduct = document.getElementById("listas_productos");

let products = [];

//Añadiendo un controlador de evento DOMContentLoaded en la ventana del navegador
window.addEventListener('DOMContentLoaded', async () => {
    const data = await loadProducts();
    products = data.data;
    renderProducts(products);
    console.log(products)
});

//Añadiendo un controlador de evento en el elemento select con id "categorias"
selectInput.addEventListener("change", e => {
    const newProducts = products.filter(product => product.categories[0]==e.target.value);
    renderProducts(newProducts);
    console.log(newProducts);
});

//Función para solicitar datos a travez de la API
async function loadProducts() {
    const response = await fetch('https://fakerapi.it/api/v1/products?_quantity=20&_taxes=18&_categories_type=integer');
    return await response.json();
}

const createProductArticles = products => products.map(product => `<article class="product_card"><h4>Producto</h4><p>Nombre: ${product.name}</p><p>Categoría: ${product.categories[0]}</p></article>`).join('')

function renderProducts(products) {
    const articlesString = createProductArticles(products);
    outputProduct.innerHTML = articlesString;
}