const carritoButton = document.getElementById('carrito_btn');
const squareOverlay = document.getElementById('squareOverlay');
const closeSquareButton = document.getElementById('closeSquare');

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Show the square when the "Carrito" button is clicked
function showSquare(){

    squareOverlay.style.display = 'flex';
    renderCart();
}

// Close the square when the "Close" button is clicked
closeSquareButton.addEventListener('click', () => {
    squareOverlay.style.display = 'none';
});

let counter = 0;
let precioTotal = 0;
const carritoVacio = document.getElementById('vacio');
const itemList = document.getElementById('itemList');
const precioTotalElement = document.getElementById('precioTotal');

function addItem(nom_prod, precio_prod) {

    const newItem = document.createElement('li');
    const deleteButton = document.createElement('button'); // Create a delete button
    

    deleteButton.textContent = 'Eliminar'; // Set the text for the delete button
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
        // Call the deleteItem function when the delete button is clicked
        deleteItem(newItem);
    });

    const itemText = `${nom_prod}\n Precio: $${precio_prod}`;

    newItem.textContent = itemText;
    newItem.className = counter % 2 === 0 ? "even" : "odd";
    
    // Append the delete button to the list item
    newItem.appendChild(deleteButton);
    
    itemList.appendChild(newItem);
    precioTotal += parseFloat(precio_prod);
    precioTotalElement.textContent = `Precio total: $${precioTotal}`;
    counter++;

    cartItems.push({ nom_prod, precio_prod});
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    if (counter >= 1) {
        carritoVacio.style.display = 'none';
    }
}

function deleteItem(item) {
   
    const priceText = item.textContent.split('Precio: $')[1];
    const priceValue = parseFloat(priceText.replace(/[^0-9]/g, ''));
    
    itemList.removeChild(item); // Remove the item from the list
    precioTotal -= priceValue; // Deduct the price from the total
    precioTotalElement.textContent = `Precio total: $${precioTotal}`;

    cartItems = cartItems.filter(cartItem => cartItem.precio_prod !== priceValue.toString());
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    if (itemList.childElementCount === 0) {
        carritoVacio.style.display = 'block'; // Display "El carrito está vacío" if the cart is empty
    }
}

itemList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('delete-button')) {
        // If the clicked element is a button with the 'delete-button' class, delete the corresponding item
        deleteItem(event.target.parentElement);
    }
});

function renderCart() {
    itemList.innerHTML = ''; // Clear the current items
    precioTotal = 0; // Reset total

    if (cartItems.length > 0) {
        carritoVacio.style.display = 'none';

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
    } else {
        carritoVacio.style.display = 'block';
    }
}

window.addEventListener('load', () => {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    renderCart();
});