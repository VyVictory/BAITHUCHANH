import connection from "../DB/conectDB";

const getAllProduct = async () => {

    const [rows] = await connection.query(
        "SELECT * FROM sanpham"
    );
    return rows;

};
export default {getAllProduct};

