let dataJson = require('./tareas.json')

let editar = (function (id, titulo) {
    let index = dataJson.findIndex(i => i.id === id);
    dataJson[index].titulo = titulo;
})

module.exports = { editar }