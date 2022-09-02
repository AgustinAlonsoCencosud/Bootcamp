//const datos = [];
// 2. Promises: En un archivo promises.js definir y exportar los siguientes métodos que deberán retornar una promesa.
//   - getUsers()
//   - getUserById(id)
//   - getUsersByMaritalStatus(status)

const getUsers = (users) =>
  new Promise((resolve, reject) => {
    users.length ? resolve(users) : reject("No se encontraron Usuarios");
  });

const getUserById = (users, idUser) =>
  new Promise((resolve, reject) => {
    let user = users.find((u) => u.id === idUser);
    user ? resolve(user) : reject("No se encontro el usuario");
  });

const getUsersByMaritalStatus = (users, maritial) =>
  new Promise((resolve, reject) => {
    let usersByMaritial = users.filter((u) => u.maritalStatus === maritial);
    usersByMaritial.length
      ? resolve(usersByMaritial)
      : reject("No se encontaron usuarios");
  });

//console.log(getUsers(datos));
// console.log(getUserById(datos, 1));
// console.log(getUsersByMaritalStatus(datos, "Divorced"))

module.exports = { getUserById, getUsers, getUsersByMaritalStatus };

console.log(tarea);
