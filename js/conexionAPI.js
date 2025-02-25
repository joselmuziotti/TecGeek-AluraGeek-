async function listarProductos(){
    const conexion = await fetch("https://my-json-server.typicode.com/joselmuziotti/TecGeek-AluraGeek-/productos");
    const conexionConvertida = conexion.json();
    
    return conexionConvertida;
}

async function agregarProducto(imagen, nombre, valor){
    const conexion = await fetch("https://my-json-server.typicode.com/joselmuziotti/TecGeek-AluraGeek-/productos", {
        method: 'POST',
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({
            imagen:imagen,
            nombre:nombre,
            valor:valor
        })
    });
    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al subir el producto =(")
    }

    return conexionConvertida;
}

async function buscarProducto(palabraClave){
    const conexion = await fetch(`https://my-json-server.typicode.com/joselmuziotti/TecGeek-AluraGeek-/productos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function borrarCard(cardId){
    const conexion = await fetch(`https://my-json-server.typicode.com/joselmuziotti/TecGeek-AluraGeek-/productos/${cardId}`, {
        method: 'DELETE',
    });

    if (conexion.ok) {
        listarProductos();
    } else {
        console.error("Error al borrar la tarjeta");
    }

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

window.borrarCard = borrarCard;

export const conexionAPI = {
    listarProductos, agregarProducto, buscarProducto, borrarCard
}