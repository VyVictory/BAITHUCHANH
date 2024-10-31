import connection from "../DB/conectDB";

const LoginModel = async (username) => {

    const [rows] = await connection.query(
        "SELECT * FROM users WHERE username = ?",
        [username]
    );
    return rows;

};
export default LoginModel;

