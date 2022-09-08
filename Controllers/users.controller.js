const getUsers = (req, res) => {
  res.status(200).send("All users");
};

const getUser = (req, res) => {
  res.status(200).send("Get single user");
};

const createUser = (req, res) => {
  res.status(201).send("Create New user");
};

const updateUser = (req, res) => {
  res.status(200).send("Update User info");
};

const deleteUser = (req, res) => {
  res.status(200).send("Delete user");
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
