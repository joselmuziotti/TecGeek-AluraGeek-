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
                    <img src="/img/basura.png" alt="Dibujo de un basurero" data-borrar>
                </div>

            </div>`;
    
    return card;
}



async function listarProductos(){
    try{
        const listaApi = await conexionAPI.listarProductos();

        listaApi.forEach(card => lista.appendChild(crearCard(card.imagen, card.nombre, card.valor)));
    } catch {
        lista.innerHTML = `<div class="container-error">
        <img src="../img/error-404.png" alt="ícono de error 404" class="error-icon"/> 
        <h2 class="mensaje-error-conexion">Ha ocurrido un error en la conexion =(</h2>`;
    }
    
}

listarProductos();