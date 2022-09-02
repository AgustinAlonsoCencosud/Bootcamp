const datos = require("./data/usuarios.json");
const {
  getUsers: getUsersCallback,
  getUserById: getUsersByIdCallback,
  getUsersByMaritalStatus: getUsersByMaritalStatusCallback,
  print,
} = require("./callback");
const {
  getUsers: getUsersPromises,
  getUserById: getUserByIdPromises,
  getUsersByMaritalStatus: getUsersByMaritalStatuspromises,
} = require("./promises");
const { printUsers, printUser, printUsersByMaritalStatus } = require("./async");
const {
  getUsers,
  getUsersById,
  getUsersByMaritalStatus,
} = require("./then.js");

// 4. Then: En un archivo then.js importamos todos los mÃ©todos de promise.js, los ejecutamos y resolvemos las promesas con .then() y mostramos la respuesta en la terminal. No olvidar el manejo de excepciones ( .catch() ). Si quieren incluyan un bloque finally en cada promesa.
