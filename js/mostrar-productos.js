import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");
const cardType = lista.dataset.cardType;

export default function crearCard(imagen, nombre, valor, id, type){
    const card = document.createElement("div");
    card.className = `product-card ${type}`;
    card.innerHTML = `
        <img src="${imagen}" alt="Imagen del producto a la venta">

            <div class="product-card-info">
                <p>${nombre}</p>

                <div class="product-card-value">
                    <p>$${valor}</p>
                    <img src="/img/basura.png" alt="Dibujo de un basurero" onclick="borrarCard(${id})">
                </div>

            </div>`;

    if (cardType === 'small') {
        lista.classList.add('small-card-container');
    } else if (cardType === 'large') {
        lista.classList.add('large-card-container');
    }

    return card;
}



async function listarProductos(){
    try{
        const listaApi = await conexionAPI.listarProductos();

        listaApi.forEach(card => lista.appendChild(crearCard(card.imagen, card.nombre, card.valor, card.id, cardType)));
    } catch {
        lista.innerHTML = `<div class="container-error">
        <img src="../img/error-404.png" alt="ícono de error 404" class="error-icon"/> 
        <h2 class="mensaje-error-conexion">Ha ocurrido un error en la conexion =(</h2>`;
    }
    
}

listarProductos();