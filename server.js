import express from 'express';
import dotenv from 'dotenv/config'
import date from './modulepages/date.js'
import getURL from './modulepages/getURL.js'
import viewEngine from './viewEngine.js';
import webrouter from './Routers/webRoute.js';

const app = express()
const port = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.listen(port, ()=>{
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

