import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista-big]");

export default function crearCard(imagen, nombre, valor){
    const card = document.createElement("div");
    card.className = "product-card-big";
    card.innerHTML = `
        <img src="${imagen}" alt="Imagen del producto a la venta">

            <div class="product-card-info-big">
                <p>${nombre}</p>

                <div class="product-card-value-big">
                    <p>$${valor}</p>
                    <img src="/img/basura.png" alt="Dibujo de un basurero">
                </div>

            </div>`;

    return card;
}



async function listarProductos(){
    const listaApi = await conexionAPI.listarProductos();

    listaApi.forEach(card => lista.appendChild(crearCard(card.imagen, card.nombre, card.valor)));
}

listarProductos();