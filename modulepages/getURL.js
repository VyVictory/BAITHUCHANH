// var url = require('url')
import url from 'url'

const getPath = (req) => {
    return req.url
}

const getParamsUrl=(req)=>{
    let urlData = url.parse(req.url, true);
    return JSON.stringify(urlData.query);
}
export default {getPath,getParamsUrl}
// module.exports={getPath,getParamsUrl}