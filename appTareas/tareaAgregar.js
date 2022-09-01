let dataJson = require('./tareas.json')

let agregar = (function (titulo, estado, id) {
    let nota = { titulo: titulo, estado: estado, id: id }
    dataJson.push(nota)
})

module.exports = { agregar }