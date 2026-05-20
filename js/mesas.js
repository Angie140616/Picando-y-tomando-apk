const contenedor = document.getElementById("contenedorMesas");

// btn
const btnAgregar = document.createElement("button");
btnAgregar.id = "btnAgregarMesa";
btnAgregar.textContent = "+";

let contador = 0;

// mesas base
for (let i = 1; i <= 7; i++) {
  crearMesa(i);
}

contador = 7;

// agregar botón al final del contenedor
contenedor.appendChild(btnAgregar);

//Crea la mesa
function crearMesa(numero) {
  const mesa = document.createElement("div");
  mesa.classList.add("containerMesas");

  mesa.innerHTML = `
    <p>Mesa #${numero}</p>

    <div class="campo">
      <p>Nombre:</p>
      <input type="text" placeholder="Nombre">
    </div>

    <div class="containerPedidos"></div>
  `;

  contenedor.appendChild(mesa);
}

//Agregar nuevas mesas
function agregarMesa() {
  contador++;

  const mesa = document.createElement("div");
  mesa.classList.add("containerMesas");

  mesa.innerHTML = `
    <p>Mesa #${contador}</p>

    <div class="campo">
      <p>Nombre:</p>
      <input type="text" placeholder="Nombre">
    </div>

    <div class="containerPedidos"></div>
  `;

  contenedor.insertBefore(mesa, btnAgregar);
}

// evento
btnAgregar.addEventListener("click", agregarMesa);