import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrar-productos.js";
import crearCardBig from "./mostrar-productos.js"

async function filtrarProducto(evento){

    evento.preventDefault();

    const datosBusqueda = document.querySelector("[data-buscar]").value;
    const busqueda = await conexionAPI.buscarProducto(datosBusqueda);

    // const lista = document.querySelector("[data-lista]");

    // busqueda.forEach(producto => lista.appendChild(crearCard(producto.imagen, producto.nombre, producto.valor)));
    console.log(busqueda)
}

const boton = document.querySelector("#buscar");

boton.addEventListener("keydown", function(evento){
    if(evento.key === 'Enter' || evento.key === 'Intro'){
        filtrarProducto(evento)
    }
})