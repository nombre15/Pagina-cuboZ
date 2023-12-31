// Codigo para la funcion de carrito, que acumula elementos dentro de una lista en un div dinamico
// que se usa como carrito, con la opcion de eliminar el elemento y de mostrar la suma de precios
// totales. Se muestra el nombre y el precio de cada elemento individual 

//Elementos del carrito
const carritoButton = document.getElementById('carrito_btn'); //Boton para activar el carrito
const squareOverlay = document.getElementById('squareOverlay'); //Overlay del carrito
const closeSquareButton = document.getElementById('closeSquare'); //Boton para cerrar el carrito

//Guardar elementos del carrito aun cuando se recarga la pagina
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Mostrar carrito cuando se le da click al boton de carrito
function showSquare(){

    squareOverlay.style.display = 'flex';
    renderCart();
}

// Cerrar el carrito cuando se le da click al boton de cerrar carrito
closeSquareButton.addEventListener('click', () => {
    squareOverlay.style.display = 'none';
});

//Mas elementos del carrito
let counter = 0; //Contador para saber si el carrito esta vacio o no
let precioTotal = 0; //Suma de los precios de todos los elementos del carrito
const carritoVacio = document.getElementById('vacio'); //Texto para cuando el carrito se encuentre vacio
const itemList = document.getElementById('itemList');
const precioTotalElement = document.getElementById('precioTotal');

//Funcion para añadir elementos al carrito, recibe el nombre y precio del producto
function addItem(nom_prod, precio_prod) {

    const newItem = document.createElement('li'); //Crea un elemento dentro de la lista en el cual se guardara el producto
    const deleteButton = document.createElement('button'); // Crea un boton de borrar elemento de la lista
    

    deleteButton.textContent = 'Eliminar'; // Texto del boton
    deleteButton.className = 'delete-button'; 

    //Llama a la funcion deleteItem cuando se da click al boton, para borrar un elemento del carrito
    deleteButton.addEventListener('click', () => {
       
        deleteItem(newItem);
    });

    const itemText = `${nom_prod}\n Precio: $${precio_prod}`; //Se concatena el nombre del producto con el precio para añadirlo a la lista

    newItem.textContent = itemText; //Se añade el producto a la lista
    newItem.className = counter % 2 === 0 ? "even" : "odd"; //Se ajusta si es par o impar dentro de la lista
    
    newItem.appendChild(deleteButton); //Adjunta el boton de borrar
    itemList.appendChild(newItem); //Añade el nuevo item a la lista
    precioTotal += parseFloat(precio_prod); //Se suma el precio del producto para el precio total
    precioTotalElement.textContent = `Precio total: $${precioTotal}`; 
    counter++;

    cartItems.push({ nom_prod, precio_prod}); //Se añade a la lista
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); //Se guarda para cuando se recargue la pagina

    //Si el contador es mayor a uno, se quita el texto de carrito vacio
    if (counter >= 1) {
        carritoVacio.style.display = 'none';
    }
}

//Funcion para borrar un elemento del carrito, recibe el elemento
function deleteItem(item) {
   
    const priceText = item.textContent.split('Precio: $')[1];
    const priceValue = parseFloat(priceText.replace(/[^0-9]/g, ''));
    
    itemList.removeChild(item); // Remueve el elemento de la lista
    precioTotal -= priceValue; // Deduce el precio del total
    precioTotalElement.textContent = `Precio total: $${precioTotal}`;

    cartItems = cartItems.filter(cartItem => cartItem.precio_prod !== priceValue.toString()); //Ajustar la nueva lista
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); //Guardarla para cuando se recargue la pagina
    
    //Si el carrito esta vacio, se muestra el texto de vacio
    if (itemList.childElementCount === 0) {
        carritoVacio.style.display = 'block'; 
    }
}

//Borrar elemento de la lista
itemList.addEventListener('click', (event) => {

    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('delete-button')) {
        deleteItem(event.target.parentElement);
    }
});

//Funcion para mostrar el carrito
function renderCart() {

    itemList.innerHTML = ''; 
    precioTotal = 0; 

    if (cartItems.length > 0) {

        carritoVacio.style.display = 'none'; // Si el total de elementos es mayor a 0, se borra el texto de vacio

        //Se crea la lista dentro del carrito con todos los elementos
        cartItems.forEach((cartItem, index) => {

            const newItem = document.createElement('li');
            const deleteButton = document.createElement('button');

            deleteButton.textContent = 'Eliminar';
            deleteButton.className = 'delete-button';
            deleteButton.addEventListener('click', () => {
                deleteItem(newItem);
            });

            const itemText = `${cartItem.nom_prod}\n Precio: $${cartItem.precio_prod}`;

            newItem.textContent = itemText;
            newItem.className = index % 2 === 0 ? "even" : "odd";

            newItem.appendChild(deleteButton);
            itemList.appendChild(newItem);
            precioTotal += parseFloat(cartItem.precio_prod);
        });

        precioTotalElement.textContent = `Precio total: $${precioTotal}`;
    } 
    else {
        carritoVacio.style.display = 'block'; //Mostrar texto de vacio si el carrito esta vacio
    }
}

//Cuando carga una nueva pagina, se vuelven a cargar los elementos que estan guardados dentro del carrito
window.addEventListener('load', () => {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    renderCart();
});