export default function TarjetaProducto() {
    return (
        <div className="tarjeta-producto">
            <h2>Nombre del producto</h2>
            <p>Precio: $100</p>
            <p>Categoría: Electrónica</p>
            <p>Disponible</p>
        </div>
    )
}

function nombre() {
  return <div>Nombre del producto</div>
}

function precio() {
  return <div>Precio del producto</div>
}

function categoría(){
    return <div>Categoría del producto</div>
}

function disponible() {
    return <div>Disponible</div>
}

export {nombre, precio, categoría, disponible, TarjetaProducto}