// Redirige a la página de pago con el producto seleccionado
function irAPago(producto, precio, imagen) {
    window.location.href = `pago.html?producto=${encodeURIComponent(producto)}&precio=${precio}&imagen=${encodeURIComponent(imagen)}`;
}

// Carga los datos del producto en la página de pago
if (window.location.pathname.includes("pago.html")) {
    const params = new URLSearchParams(window.location.search);
    document.getElementById("producto").innerText = `Producto: ${params.get("producto")}`;
    document.getElementById("precio").innerText = `Precio: ${params.get("precio")}€`;
    document.getElementById("producto-img").src = params.get("imagen");
}

// Finaliza la compra con una alerta
function finalizarCompra() {
    const metodoPago = document.querySelector('input[name="pago"]:checked');
    if (metodoPago) {
        alert(`Compra completada con ${metodoPago.value}. ¡Gracias por tu compra!`);
        window.location.href = "index.html";  // Vuelve a la tienda
    } else {
        alert("Por favor, selecciona un método de pago.");
    }
}
