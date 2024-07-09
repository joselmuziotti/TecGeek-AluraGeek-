import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function agregarProducto(e){

    e.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const valor = document.querySelector("[data-valor]").value;

    try{
        await conexionAPI.agregarProducto(imagen, nombre, valor);
        window.location.href="../Pages/add-succes-page.html"; 
    } catch(e){
        alert(e);
    }
    
}

formulario.addEventListener("submit", e => agregarProducto(e));

const boton = document.querySelector("#agregar");

boton.addEventListener("keydown", function(evento){
    if(evento.key === 'Enter' || evento.key === 'Intro'){
        agregarProducto(evento)
    }
});