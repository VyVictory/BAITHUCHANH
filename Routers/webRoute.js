
import HomeController from '../contronller/home';
import ContactController from '../contronller/contact';
import AboutController from '../contronller/about';
import express from 'express';
import Login from '../contronller/login';
import Logout from '../contronller/logout';

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
    router.get("/user/delete", HomeController.deleteUser);
    router.post("/user/delete", HomeController.deleteUser);
    router.get("/user/update", HomeController.updateUser);
    router.post("/user/update", HomeController.updateUser);
    router.get("/user/detail", HomeController.detailUser);
    router.get("/logout", Logout)

    router.get('/set-session', (req, res) => {
        req.session.user = {
            username: 'admin',
            fullname: 'admin'
        }
        res.send(req.session)

    })


    router.get("/login", Login);
    router.post("/login", Login);

    router.get('/about', AboutController)
    router.get('/contact', ContactController)

    
    return app.use('/', router)
}
export default webrouter;