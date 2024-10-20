
import HomeController from '../contronller/home';
import ContactController from '../contronller/contact';
import AboutController from '../contronller/about';
import express from 'express';

const router = express.Router();

const webrouter = (app) => {
    router.get('/', HomeController.getAllUser)
    router.get("/user/add", HomeController.addUser);
    router.post("/user/add", HomeController.addUser);
    router.get("/user/delete", HomeController.deleteUser);
    router.post("/user/delete", HomeController.deleteUser);
    router.get("/user/update", HomeController.updateUser);
    router.post("/user/update", HomeController.updateUser);
    router.get("/user/detail", HomeController.detailUser);

    router.get('/about', AboutController)
    router.get('/contact', ContactController)


    return app.use('/',router)
}
export default webrouter;