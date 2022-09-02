const {
  getUsers,
  getUsersById,
  getUsersByMaritalStatus,
} = require("./promises");

getUsers(users)
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error))
  .finally(() =>
    console.log("Finalmente funciono la LISTA GENERAL de usuarios")
  );

getUsersById(2, users)
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalmente funciono BUSCAR un usuaio"));

getUsersByMaritalStatus("Married", users)
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalmente funciono FILTRAR usuaiors"));

module.exports = { getUsers, getUsersById, getUsersByMaritalStatus };
