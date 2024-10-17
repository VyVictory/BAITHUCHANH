
import getHomePage from '../../../contronller/home';
import express from 'express';

const router = express.Router();

const webrouter = (app) => {
    router.get('/home', getHomePage)
    return app.use('/',router)
}
export default webrouter;