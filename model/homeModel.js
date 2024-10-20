import connection from "../DB/conectDB";

const getAllUser = async () => {
  const [rows] = await connection.query(
    "SELECT username, password, fullname, address, sex, email FROM users"
  );
  return rows;
};

const addUser = async (user) => {
  const { username, password, fullname, address, sex, email } = user;
  const [result] = await connection.query(
    "INSERT INTO users (username, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?)",
    [username, password, fullname, address, sex, email]
  );
  return result;
};

const getUserByUsername = async (username) => {
  const [rows] = await connection.query(
    "SELECT username, fullname, address, sex, email FROM users WHERE username = ?",
    [username]
  );
  return rows[0];
};

const updateUser = async (oldUsername, user) => {
  const { username, fullname, address, sex, email } = user;
  const [result] = await connection.query(
    "UPDATE users SET username = ?, fullname = ?, address = ?, sex = ?, email = ? WHERE username = ?",
    [username, fullname, address, sex, email, oldUsername]
  );
  return result;
};

const deleteUser = async (username) => {
  const [result] = await connection.query(
    "DELETE FROM users WHERE username = ?",
    [username]
  );
  return result;
};

export default { getAllUser, addUser, getUserByUsername, updateUser, deleteUser };
