const users = require("./data/usuarios.json");

function getUsers(callback) {
  if (users.length) {
    return callback(null, users);
  }
  return callback("No se encontraron usuarios");
}
function printUsers(err, user) {
  if (!user) {
    return err;
  }
  return user;
}
// console.log(getUsers(printUsers));
function getUserById(id, callback) {
  const usersFind = users.find((u) => u.id === id);
  if (usersFind) {
    return callback(null, usersFind);
  }
  return callback("No se encontro usuario con el id");
}
function printUser(err, user) {
  if (!user) {
    return err;
  }
  return user;
}
//   console.log(getUserById(333,printUser));
function getUsersByMaritalStatus(status, callback) {
  const usersFiltered = users.filter((u) => u.maritalStatus === status);
  if (usersFiltered.length) {
    return callback(null, usersFiltered);
  }
  return callback("No se encontro usuario con el status");
}
function printUsersByMaritalStatus(err, user) {
  if (!user) {
    return err;
  }
  return user;
}
//   console.log(getUsersByMaritalStatus('Married',printUsersByMaritalStatus));
