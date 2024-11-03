import LoginModel from "../model/loginModel";
import bcrypt from "bcryptjs";
const Login = async (req, res) => {
    if (req.method === "GET") {
        let fileindex = 'login';
        let title = 'Login page';
        return res.render(fileindex, {
            title: title
        });
    } else if (req.method === "POST") {
        const username = req.body.username;
        const password = req.body.password;
        const data = await LoginModel(username);
        if (data.length === 0) {
            return res.redirect("/login?error=đăng nhập thất bại");
        } else {
            if (bcrypt.compareSync(password, data[0].password)) {

                req.session.userdata = {
                    username: data[0].username,
                    fullname: data[0].fullname,
                    role: data[0].role
                }
                
                return res.redirect("/");
            } else {
                return res.redirect("/login?error=invalid_credentials");
            }
        }
    }

}
// const addUser = async (req, res) => {
//     if (req.method === "POST") {
//         const user = req.body;
//         const result = await homeModel.addUser(user);
//         console.log(result);
//         res.redirect("/");
//     }
// };
export default Login;