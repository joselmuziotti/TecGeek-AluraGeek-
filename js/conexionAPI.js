async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();
    
    return conexionConvertida;
}

async function agregarProducto(imagen, nombre, valor){
    const conexion = await fetch("http://localhost:3001/productos", {
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
    const conexion = await fetch(`http://localhost:3001/productos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function borrarCard(){
    const conexion = await fetch("http://localhost:3001/productos", {
        method: 'DELETE'
    });

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI = {
    listarProductos, agregarProducto, buscarProducto, borrarCard
}