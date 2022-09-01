let dataJson = require('./tareas.json')

let tareasPorTerminar = dataJson.filter(function (data) {
    return data.estado == "en progreso" || data.estado == "pendiente"
})

module.exports = { tareasPorTerminar }






