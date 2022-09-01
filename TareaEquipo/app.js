// # Consigna

// Usar el archivo json con users que les pasamos como bd (data.json).

// 1. Callback: En un archivo callback.js definir los siguientes métodos que nos permitan consumir los datos, se indica qué recibe cada uno.
//   - getUsers(callback)
//   - getUserById(id, callback)
//   - getUsersByMaritalStatus(status, callback)

//   Callbacks:
//   - printUsers(error, users)
//   - printUser(error, user)
//   - printUsersByMaritalStatus(error, users)

const users = require("./users.json");
function getUsers(callback) {
  if (users.length) {
    return callback(null, users);
  }
  return callback("No se encontraron usuarios");
}

function getUserById(id, callback) {
  const usersFind = users.find((u) => u.id === id);
  if (usersFind) {
    return callback(null, usersFind);
  }
  return callback("No se encontro usuario con el id");
}

function getUsersByMaritalStatus(status, callback) {
  const usersFiltered = users.filter((u) => u.maritalStatus === status);
  if (usersFiltered.length) {
    return callback(null, usersFiltered);
  }
  return callback("No se encontro usuario con el status");
}

function print(err, user) {
  if (!user) {
    return err;
  }
  return user;
}

console.log(getUsers(print));
console.log(getUserById(333, print));
console.log(getUsersByMaritalStatus("Married", print));

// 2. Promises: En un archivo promises.js definir y exportar los siguientes métodos que deberán retornar una promesa.
//   - getUsers()
//   - getUserById(id)
//   - getUsersByMaritalStatus(status)

// 3. Async: En un archivo async.js importamos todos los métodos de promise.js y definimos métodos para resolver las promesas usando async / await y mostrar los datos por terminal. No olvidar el manejo de excepciones (try / catch).
//   - printUsers(users)
//   - printUser(user)
//   - printUsersByMaritalStatus(users)

// 4. Then: En un archivo then.js importamos todos los métodos de promise.js, los ejecutamos y resolvemos las promesas con .then() y mostramos la respuesta en la terminal. No olvidar el manejo de excepciones ( .catch() ). Si quieren incluyan un bloque finally en cada promesa.
