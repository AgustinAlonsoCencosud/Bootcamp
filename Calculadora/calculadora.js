
let calcular = (cuenta) => {
    switch (true) {
        case cuenta.includes('+'):
            return resultado(cuenta, "+");
        case cuenta.includes('-'):
            return resultado(cuenta, "-");
        case cuenta.includes('/'):
            return resultado(cuenta, "/");
        case cuenta.includes('x'):
            return resultado(cuenta, "x");
        default:
            return "No se encontro operacion"
    }
}

let resultado = (datos, operacion) => {
    let index = datos.indexOf(operacion);
    let dato1 = parseInt(datos.slice(0, index))
    let dato2 = parseInt(datos.slice(index + 1, datos.length))
    switch (operacion) {
        case '+':
            return dato1 + dato2
        case '-':
            return dato1 - dato2
        case '/':
            return dato1 / dato2
        case 'x':
            return dato1 * dato2
        default:
            return "No se encontro operacion"
    }
}

module.exports = { calcular }