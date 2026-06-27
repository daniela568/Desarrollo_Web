// Mostrar productos según categoría
document.getElementById("filtro").addEventListener("change", function() {
  const categoria = this.value;
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // limpiar catálogo

  if (categoria === "herramientas") {
    agregarProducto("Herramientas", "Martillo, Destornilladores planos y de estrella, Llaves ajustables, Alicates");
  }
  else if (categoria === "fijaciones") {
    agregarProducto("Fijaciones", "Tornillos de madera, de metal, Clavos, Tuercas");
  }
  else if (categoria === "materiales") {
    agregarProducto("Materiales", "Pinturas de látex, esmalte, Brochas y rodillos, Cables eléctricos");
  }
  else if (categoria === "todos") {
    agregarProducto("Herramientas", "Martillo, Destornilladores planos y de estrella, Llaves ajustables, Alicates");
    agregarProducto("Fijaciones", "Tornillos de madera, de metal, Clavos, Tuercas");
    agregarProducto("Materiales", "Pinturas de látex, esmalte, Brochas y rodillos, Cables eléctricos");
  }
});

// Función para crear tarjetas
function agregarProducto(nombre, descripcion) {
  const nuevoProducto = document.createElement("div");
  nuevoProducto.className = "col-md-4 producto";

  const card = document.createElement("div");
  card.className = "card mb-3";

  const body = document.createElement("div");
  body.className = "card-body text-center";

  const titulo = document.createElement("h5");
  titulo.className = "card-title";
  titulo.textContent = nombre;

  const texto = document.createElement("p");
  texto.className = "card-text";
  texto.textContent = descripcion;

  body.appendChild(titulo);
  body.appendChild(texto);
  card.appendChild(body);
  nuevoProducto.appendChild(card);

  document.getElementById("lista-productos").appendChild(nuevoProducto);
}
