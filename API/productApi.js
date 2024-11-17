import groupModel from "../model/groupModel";
import LoginModel from "../model/loginModel";
import productModel from "../model/productModel";
async function AllProduct(req, res) {
    if (req.method === "GET") {
        const data = await productModel.getAllProduct();
        if (data.length === 0) {
            return res.status(400).send("product not found");
        } else {
            return res.status(200).json(data)
        }
    }
}
async function DetailProduct(req, res) {
    if (req.method === "GET") {
        try {
            const idproduct = req.params.id;
            const productData = await productModel.getProductById(idproduct);
            if (!productData || productData.length === 0) {
                return res.status(404).json({ message: "Product not found" });
            }
            const idnhom = productData[0].idnhom;
            const groupData = await groupModel.getGroupById(idnhom);
            const respose = {
                ...productData[0],
                tennhom: groupData.length > 0 ? groupData[0].ten : "không thuộc nhóm nào",
            }
            return res.status(200).json(respose)
        } catch (error) {
            console.error("lỗi xem chi tiết sản phẩm:", error);
            return res.status(500).send({ message: "lỗi  xem chi tiết sp " });
        }
    }
}
export default { AllProduct, DetailProduct }