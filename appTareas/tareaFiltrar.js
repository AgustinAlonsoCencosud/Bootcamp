let dataJson = require('./tareas.json')

let filtrarPendientes = dataJson.filter(function (data){
    return data.estado == "pendiente"
})

let filtrarTerminadas = dataJson.filter(function (data) {
    return data.estado == "terminada"
})

let filtrar = (filtro) => {
    switch (filtro) {
        case "pendientes":
            return filtrarPendientes;
        case "terminadas":
            return filtrarTerminadas;
        default:
            return "No se encontro filtro"
    }
}

module.exports = { filtrar }