import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrar-productos.js";

async function filtrarProducto(evento){

    evento.preventDefault();

    const datosBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarProducto(datosBusqueda);


    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busqueda.forEach(card => lista.appendChild(crearCard(card.imagen, card.nombre, card.valor, card.id, card.type)));
    
    if(busqueda.length == 0){
        lista.innerHTML = `<div class="container-error">
        <img src="../img/advertencia.png" alt="ícono de error" class="error-icon"/> 
        <h2 class="mensaje-error-conexion">No hay resultados para '${datosBusqueda}'</h2>`
    }
}

async function recargarProductos() {
    const lista = document.querySelector("[data-lista]");
    const productos = await conexionAPI.listarProductos();
    lista.innerHTML = "";
    productos.forEach(card => lista.appendChild(crearCard(card.imagen, card.nombre, card.valor, card.id, card.type)));
}

const inputBusqueda = document.querySelector("[data-busqueda]");

const boton = document.querySelector("#buscar");

boton.addEventListener("keydown", function(evento){
    if(evento.key === 'Enter' || evento.key === 'Intro'){
        filtrarProducto(evento)
    }
});

inputBusqueda.addEventListener("input", function() {
    if (inputBusqueda.value === "") {
        recargarProductos();
    }
});