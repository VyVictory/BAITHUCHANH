const getHomePage = (req, res)=>{
    let body = './main';
    return res.render('home', { body });
}
export default getHomePage;