const cartSection = document.getElementById('cart');
const apartedItems = {}; // Objeto para mantener los elementos apartados
let count = 1;

while (count <= 1) {
  showOrHideCart()
  count++;
}

function addToCart(itemName, price, size) {
  const cartItems = document.getElementById('cart-items');
  const li = document.createElement('li');
  li.textContent = `Nombre: ${itemName}, Precio: $${price}, Talla: ${size}`;

  const apartButton = document.createElement('button');
  apartButton.textContent = 'Apartar';
  apartButton.onclick = function() {
    apartItem(itemName);
    alert(`"${itemName}" se ha apartado.`);
  };

  li.appendChild(apartButton);
  cartItems.appendChild(li);
}

function apartItem(itemName) {
  if (!apartedItems[itemName]) {
    apartedItems[itemName] = 1;
  } else {
    apartedItems[itemName]++;
  }
}

function closeCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = ''; // Elimina el contenido del carrito
  cartSection.style.display = 'none';
  apartedItems = {}; // Reiniciar elementos apartados al cerrar el carrito
}

function showOrHideCart() {
  const cartItems = document.getElementById('cart-items');
  if (cartItems.children.length == 0) {
    cartSection.style.display = 'block';
  } else {
    cartSection.style.display = 'none';
  }
}
function toggleCart() {
  const cartSection = document.getElementById('cart');
  if (cartSection.style.display === 'block') {
    cartSection.style.display = 'none';
  } else {
    cartSection.style.display = 'block';
  }
}
