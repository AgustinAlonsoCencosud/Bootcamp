let dataJson = require('./tareas.json')

let eliminar = (function (id) {
    let index = dataJson.findIndex(i => i.id === id);
    dataJson.splice(index, 1)
})

module.exports = { eliminar }