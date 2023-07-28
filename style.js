let resultado = 0

let rta = ""

let acumuladora = ""


function introduccion() {
    alert("Bienvenidos a error clothes")
}

introduccion();


class Productos{
    constructor(modelo, color, precio){
        this.modelo = modelo
        this.color = color
        this.precio = precio
    }

    sumarIva(){
        return this.precio * 1.21
    }

    descripcion(){
        return "Modelo: " + this.modelo +
        "\nColor: " + this.color +
        "\nPrecio + Iva: " + this.sumarIva()
    }
}



let listaProductos = [      new Productos("Hoodie","NEGRO",5000),
                            new Productos("Remera","BLANCA",3500),
                            new Productos("Riñonera","NEGRA",2500),
]


function mostrarProductos() {
    let muestra = "Lista de productos:\n\n";

    listaProductos.forEach((productos) => {
        muestra += productos.descripcion() + "\n\n";
    });
    alert((muestra));
}

mostrarProductos()


function mostrarOpcionesProductos() {
    let opciones = "Seleccione el numero del producto\n";

    listaProductos.forEach((producto, index) => {
        opciones += `${index + 1}. ${producto.descripcion()}\n`;
    });

    opciones += "Si no desea comprar mas escriba (0)\n";
    return opciones;

    }

function elegirProducto() {

    let eleccion = parseInt(prompt(mostrarOpcionesProductos(), "0"));

    while (eleccion !== 0) {

        if (eleccion >= 1 && eleccion <= listaProductos.length) {

            let productoElegido = listaProductos[eleccion - 1];

            resultado += productoElegido.sumarIva();

        alert(`Producto seleccionado:\n\n${productoElegido.descripcion()}`);

        } else {
        alert("Opción inválida. Por favor, elige nuevamente.");
        }

        eleccion = parseInt(prompt(mostrarOpcionesProductos(), "0"));
    }

    alert(`Total a pagar: $${resultado.toFixed(2)}`);

}


elegirProducto();   



if (resultado == 0 ){
    alert("Muchas gracias por visitar nuestra pagina!")
}else if (resultado <= 6000){
    alert("Muchas gracias! Tienes un 10% de descuento en tu proxima compra!")
}else if (resultado <= 30000){
    alert("Muchas gracias! Tienes un 20% de descuento en tu proxima compra!")
}else if (resultado > 50000){
    alert("Muchas gracias! Tienes un 25% de descuento en tu proxima compra!")
}else{
    alert("Muchas gracias por visitar nuestra pagina!")
}





