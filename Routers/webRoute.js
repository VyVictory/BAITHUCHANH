
import HomeController from '../contronller/home';
import ContactController from '../contronller/contact';
import AboutController from '../contronller/about';
import express from 'express';
import Login from '../contronller/login';
import Logout from '../contronller/logout';
import authMiddleware from '../middleware/authMiddleware';
import Register from '../contronller/register';
import userApiContronller from '../API/userApiContronller';
import authContronller from '../API/authContronller';
import productApi from '../API/productApi';
import groupApi from '../API/groupApi';

const router = express.Router();
const webrouter = (app) => {
    router.get('/', HomeController.getAllUser)
    // app.get('/', (req, res) => {
    //     // Retrieve the username from session data
    //     const username = req.session.user ? req.session.user.username : null;

    //     // Pass the username to the EJS template
    //     res.render('index', { username });
    // });

    router.get("/user/add", HomeController.addUser);
    router.post("/user/add", HomeController.addUser);

    router.get("/user/delete", authMiddleware.CheckRole(["admin"]), HomeController.deleteUser);
    router.post("/user/delete", authMiddleware.CheckRole(["admin"]), HomeController.deleteUser);

    router.get("/user/update", authMiddleware.CheckRole(["admin", "user"]), HomeController.updateUser);
    router.post("/user/update", authMiddleware.CheckRole(["admin", "user"]), HomeController.updateUser);


    router.get("/user/detail", authMiddleware.CheckRole(["admin", "user"]), HomeController.detailUser);

    router.get('/set-session', (req, res) => {
        req.session.user = {
            username: 'admin',
            fullname: 'admin'
        }
        res.send(req.session)
    })
    router.get("/login", Login);
    router.get("/register", Register);
    router.get('/about', AboutController)
    router.get('/contact', ContactController)

    router.post("/login", Login);
    router.post("/register", Register);
    router.get("/logout", Logout);
    //api
    router.get("/api/users", userApiContronller.getAll);
    router.get("/api/users/:username", userApiContronller.getOne);
    router.post("/api/users", userApiContronller.addOne);
    router.put("/api/users/:username", userApiContronller.updateOne);
    router.delete("/api/users/:username", userApiContronller.deleteOne);
    router.get("/api/users/profile/:username", authMiddleware.authToken , userApiContronller.getProfile);

    router.get("/api/products", productApi.AllProduct);
    router.get("/api/products/:id", productApi.DetailProduct);
    router.get("/api/groups", groupApi.AllGroup);
    router.get("/api/groups/:id", groupApi.DetailGroup);

    router.post("/api/auth/login", authContronller.Login);
    router.post("/api/auth/logout", authContronller.Logout);
    //authMiddleware.authToken,
    return app.use('/', router)
}
export default webrouter;
//http://localhost:3000/api/auth/login