const {
  getUsers,
  getUsersById,
  getUsersByMaritalStatus,
} = require("./promises");

const printUsers = async (usuarios) => {
  try {
    const listadoUsers = await getUsers(usuarios);
    console.log(listadoUsers);
  } catch (error) {
    console.log(error);
  }
};

const printUser = async (userid, users) => {
  try {
    const user = await getUsersById(userid, users);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const printUsersByMaritalStatus = async (state, users) => {
  try {
    const listUsers = await getUsersByMaritalStatus(state, users);
    console.log(listUsers);
  } catch (error) {
    console.log(users);
  } finally {
    console.log("Finalmente funciono FILTRAR usuaiors");
  }
};

module.exports = { printUsers, printUser, printUsersByMaritalStatus };