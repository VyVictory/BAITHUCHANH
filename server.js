import express from 'express';
import dotenv from 'dotenv/config'
import date from './modulepages/date.js'
import getURL from './modulepages/getURL.js'
import viewEngine from './viewEngine.js';
import webrouter from './Routers/webRoute.js';
import  session from 'express-session';
import jwt from 'jsonwebtoken';
import cors from 'cors';
const app = express()
const port = process.env.PORT
const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};
app.use(cors(corsOptions));
// app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3001',
//     methods: ['GET', 'POST'],
// }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', 1) 

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});
viewEngine(app)
webrouter(app);
// app.get('/about',(req,res) => {
//     res.send('HELLO WORLD!.Page About')
// })
// app.get('/date',(req,res) => {
//     res.send(date() + "<br>")
// })
// app.get('/getURL',(req,res) => {
//     res.send(getURL.getPath(req) + "<br>" + getURL.getParamsUrl(req) + "<br>")
// })
app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.get('/test',(req,res)=>{
//     res.render("test")
// })
// app.get('/home',(req,res)=>{
//     res.render("home")
// })
// app.get('/about',(req,res)=>{
//     res.render("about")
// })
// app.get('/about',(req,res)=>{
//     res.render(getURL.getPath(req).substring(1))
// })

