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
export default { AllProduct }