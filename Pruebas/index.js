let productos = [
    ["Cafe", "800"],
    ["Yerba", "350"],
    ["Platos", "250"],
    ["Alfajor", "150"],
    ["Tazas", "425"],
    ["Pelota futbol", "1500"],
    ["Chocolate", "125"],
    ["Té", "225"],
    ["Mani", "160"],
    ["Leche", "220"],
    ["Galletitas", "200"],
    ["Tostadas", "370"],
    ["Azucar", "215"],
    ["Cuchillo", "175"],
    ["Tenedor", "175"],
    ["Papel Higienico", "260"],
]

function listar() {
    return productos
}

function mayorPrecio() {
    return productos.reduce((max, obj) => (parseInt(max[1]) > parseInt(obj[1])) ? max : obj);
}

function menorPrecio() {
    return productos.reduce((max, obj) => (parseInt(max[1]) < parseInt(obj[1])) ? max : obj);
}

function mismoPrecio() {
    for (let i = 0; i < productos.length; i++) {
        for (let e = 0; e < productos.length; e++) {
            if (parseInt(productos[i][1], 10) == parseInt(productos[e][1], 10)) {
                console.log("Los productos" + productos[i][0] + ' y ' + productos[e][0] + " tienen el mismo precio")
            }
        }
    }
}

function listadoPrecio(entrada) {
    if (entrada === "mayorprecio") {
        return mayorPrecio();
    } else if (entrada === "menorprecio") {
        return menorPrecio();
    }
}

function mayor250() {
    let resultado = [];
    productos.map(product => {
        console.log(product)
        if (parseInt(product[1], 10) >= 250) {
            resultado.push(product)
        }
    })
    return resultado;
}

function eliminarProducto(producto) {
    let index = productos.findIndex(object => {
        return object[0] === producto;
    });
    if (index !== -1) {
        productos.splice(index, 1)
        return "Se elimino el producto " + producto;
    }
    return "No existe el producto"

}

function nuevoProducto(nombre, precio) {
    productos.push([nombre, precio])
    return 'Producto agregado ' + nombre + ' ' + precio
}

// console.log("----Listar todos los productos------")
// console.log(listar())
// console.log("----Crear un producto------")
// console.log(nuevoProducto("Un producto","450"))
// console.log("----Eliminar un producto------")
// console.log(eliminarProducto("Un producto"))
// console.log("----Producto mayor precio------")
// console.log(listadoPrecio("mayorprecio"))
// console.log("----Producto menor precio------")
// console.log(listadoPrecio("menorprecio"))
// console.log("----Productos mayores a 250------")
// console.log(mayor250());
// mismoPrecio()



function calculatePrice(prod, val) {
    let envio = val * 0.05;
    return 'El producto ' + prod + ' cuesta ' + val + '. Su costo de envío es de ' + envio + '. Por lo tanto, el precio final es de ' + (envio + val)
}


//console.log(calculatePrice("Macbook", 2500))



let estudiantes = [
    {
        nombre: 'Alvaro',
        promedio: 9,
        curso: 'Android',
    },
    {
        nombre: 'Daniel',
        promedio: 6,
        curso: 'Full Stack',
    },
    {
        nombre: 'Alexis',
        promedio: 3,
        curso: 'iOS',
    },
]

function nuevo(n, p, c) {
    let alumno = {
        nombre: n,
        promedio: p,
        curso: c
    }
    estudiantes.push(alumno)
}

nuevo('Juan', 5, 'iOS')
nuevo('Miguel', 2, 'Android')


function esPrimo(nro) {
    for (let i = 2; i < nro; i++) {
        if (nro % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(3))

function ajedrez() {
    for (let i = 0; i < 8; i++) {
        let fila = ""
        for (let e = 0; e < 8; e++) {
            if (e % 2 == 0) {
                fila += "o"
            } else {
                fila += "x"
            }
        }
        console.log(fila)
    }
}

ajedrez()

