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
            imagen: imagen,
            nombre: nombre,
            valor: valor
        })
    });
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function buscarProducto(palabraClave){
    const conexion = await fetch(`http://localhost:3001/productos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();

    return conexionConvertida
}

export const conexionAPI = {
    listarProductos, agregarProducto, buscarProducto
}

