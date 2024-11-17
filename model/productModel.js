import connection from "../DB/conectDB";

const getAllProduct = async () => {

    const [rows] = await connection.query(
        "SELECT * FROM sanpham"
    );
    return rows;

};
// const getAllGroup= async () => {

//     const [rows] = await connection.query(
//         "SELECT * FROM nhom"
//     );
//     return rows;

// };
// const getGroupById = async (id) => {
//     const [rows] = await connection.query(
//         "SELECT * FROM nhom WHERE idnhom = ?", [id]
//     );
//     return rows;
// };
const getProductById = async (id) => {
    const [rows] = await connection.query(
        "SELECT * FROM sanpham WHERE masp = ?", [id]
    );
    return rows;
};
export default {getAllProduct, getProductById};

