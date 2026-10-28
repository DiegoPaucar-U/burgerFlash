// Lista de productos (puedes cambiarlos por los tuyos)
const productos = [
  { id: 1, nombre: "Camiseta", precio: 12.5, emoji: "👕" },
  { id: 2, nombre: "Zapatos", precio: 45.0, emoji: "👟" },
  { id: 3, nombre: "Gorra", precio: 8.99, emoji: "🧢" },
  { id: 4, nombre: "Mochila", precio: 30.0, emoji: "🎒" }
];

let carrito = [];

const contenedor = document.getElementById("productos");
const lista = document.getElementById("lista-carrito");
const contador = document.getElementById("contador");
const total = document.getElementById("total");

// Mostrar productos en pantalla
productos.forEach(function (p) {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML =
    '<div class="emoji">' + p.emoji + "</div>" +
    "<h3>" + p.nombre + "</h3>" +
    "<p>$" + p.precio.toFixed(2) + "</p>" +
    '<button onclick="agregar(' + p.id + ')">Agregar</button>';
  contenedor.appendChild(div);
});

// Agregar un producto al carrito
function agregar(id) {
  const producto = productos.find(function (p) { return p.id === id; });
  carrito.push(producto);
  actualizar();
}

// Actualizar carrito y total
function actualizar() {
  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach(function (p) {
    const li = document.createElement("li");
    li.textContent = p.emoji + " " + p.nombre + " - $" + p.precio.toFixed(2);
    lista.appendChild(li);
    suma += p.precio;
  });

  contador.textContent = carrito.length;
  total.textContent = suma.toFixed(2);
}

// Botones
document.getElementById("vaciar").addEventListener("click", function () {
  carrito = [];
  actualizar();
});

document.getElementById("comprar").addEventListener("click", function () {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }
  alert("¡Gracias por tu compra! Total: $" + total.textContent);
  carrito = [];
  actualizar();
});
