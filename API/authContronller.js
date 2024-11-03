
import bcrypt from "bcryptjs";
import LoginModel from "../model/loginModel";

async function Login(req, res) {
    if (req.method === "POST") {
        const username = req.body.username;
        const password = req.body.password;
        const data = await LoginModel(username);
        if (data.length === 0) {
            return res.status(400).send("User not found");
        } else {
            if (bcrypt.compareSync(password, data[0].password)) {

                req.session.userdata = {
                    username: data[0].username,
                    fullname: data[0].fullname,
                    role: data[0].role
                }

                return res.status(200).send("Login Success");
            } else {
                return res.status(401).send("Username or Password not match");
            }
        }
    }
}
async function Logout(req, res) {
    req.session.destroy();
    res.status(200).send("Logout Success");
}
export default { Login, Logout }