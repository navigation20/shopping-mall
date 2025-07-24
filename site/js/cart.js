document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cartItems");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(item => {
    const el = document.createElement("div");
    el.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="80">
      <p><strong>${item.name}</strong> - $${item.price}</p>
      <p>Qty: ${item.quantity}</p>
    `;
    cartItems.appendChild(el);
  });
});
