// Seleccionar los elementos del inventario por su ID
const inventoryCountAzul = document.getElementById('inventoryCountAzul');
const inventoryCountNegro = document.getElementById('inventoryCountNegro');

// Función para incrementar el contador del inventario
function incrementInventoryCount(itemId) {
  const inventoryCountElement = document.getElementById(itemId);
  let currentCount = parseInt(inventoryCountElement.textContent);
  currentCount += 1;
  inventoryCountElement.textContent = currentCount;
}

// Función para decrementar el contador del inventario
function decrementInventoryCount(itemId) {
  const inventoryCountElement = document.getElementById(itemId);
  let currentCount = parseInt(inventoryCountElement.textContent);
  if (currentCount > 0) {
    currentCount -= 1;
    inventoryCountElement.textContent = currentCount;
  }
}

// Función para mostrar artículos apartados
function viewReserved(itemName) {
  const countElement = document.getElementById(`${itemName}Count`);
  const itemCount = parseInt(countElement.textContent);
  const reservedItems = document.getElementById('reservedItems');
  const p = document.createElement('p');
  p.textContent = `Artículos apartados de ${itemName}: ${itemCount}`;
  
  reservedItems.innerHTML = '';
  reservedItems.appendChild(p);

  showOrHideCart(); // Mostrar el carrito al ver artículos apartados
}

// Función para mostrar u ocultar el carrito
function showOrHideCart() {
  const cartSection = document.getElementById('cart');
  cartSection.style.display = 'block';
}

// Función para cerrar el carrito
function closeCart() {
  const cartSection = document.getElementById('cart');
  cartSection.style.display = 'none';
}
