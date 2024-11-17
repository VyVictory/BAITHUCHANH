import connection from "../DB/conectDB";

const getAllGroup= async () => {

    const [rows] = await connection.query(
        "SELECT * FROM nhom"
    );
    return rows;

};
const getGroupById = async (id) => {
    const [rows] = await connection.query(
        "SELECT * FROM nhom WHERE idnhom = ?", [id]
    );
    return rows;
};
export default {getGroupById,getAllGroup};

