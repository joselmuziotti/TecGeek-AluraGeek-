import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function agregarProducto(e){

    e.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const valor = document.querySelector("[data-valor]").value;

    await conexionAPI.agregarProducto(imagen, nombre, valor);
}

formulario.addEventListener("submit", e => agregarProducto(e));