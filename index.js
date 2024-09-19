// var http =require('http');
// var date = require('./modulepages/date');
// var getURL = require('./modulepages/getURL');
import http from 'http';
import date from './modulepages/date.js'
import getURL from './modulepages/getURL.js'

http.createServer(
    function (req, res) {
        res.writeHead(200,{
            'Content-Type':
            'text/html ; charset=utf-8'
        });
        res.write(date() + "<br>")
        res.write(getURL.getPath(req) + "<br>")
        res.write(getURL.getParamsUrl(req)+"<br>")
        res.write('Chạy Thành Công Trên Cổng 3000');
        res.end('');
    }
).listen(3000);