
import bcrypt from "bcryptjs";
import LoginModel from "../model/loginModel";
import jwt from 'jsonwebtoken';
async function Login(req, res) {
    if (req.method === "POST") {
        const username = req.body.username;
        const password = req.body.password;
        const data = await LoginModel(username);
        if (data.length === 0) {
            return res.status(400).send("User not found");
        } else {
            if (bcrypt.compareSync(password, data[0].password)) {
                const token = jwt.sign({username:data[0].username}, process.env.SECRET_KEY, {expiresIn:'1h'})
                req.session.userdata = {
                    username: data[0].username,
                    fullname: data[0].fullname,
                    role: data[0].role
                }
                return res.status(200).json({
                    mess:'Login Success',
                    username:data[0].username,
                    token:token
                })
            } else {
                return res.status(401).send("Username or Password not match");
            }
        }
    }
}
async function Logout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Failed to destroy session");
        }
        res.clearCookie('connect.sid');
        res.status(200).send("Logout Success");
    });
}
export default { Login, Logout }