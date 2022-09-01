let { tareasPorTerminar,} = require('./funcionesDeTareas');
let {  agregar} = require('./tareaAgregar');
let {  editar} = require('./tareaEditar');
let {  eliminar} = require('./tareaEliminar');
let {  filtrar} = require('./tareaFiltrar');
let dataJson = require('./tareas.json')

agregar("Nueva nota", "pendiente", 101)
eliminar(1)
editar(4, "Nuevo titulo")
console.log(filtrar("terminadas"))
console.log(tareasPorTerminar)
console.log(dataJson)