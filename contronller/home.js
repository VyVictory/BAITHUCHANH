const getHomePage = (req, res)=>{
    let body = 'main';
    return res.render('home', { body });
}
export default getHomePage;
// const getHomePage = (req, res) => {
//     return res.render('home', { body: './component/mainHome' });
// };

// const getAboutPage = (req, res) => {
//     return res.render('home', { body: './component/mainAbout' });
// };

// const getContactPage = (req, res) => {
//     return res.render('home', { body: './component/mainContact' });
// };

// export { getHomePage, getAboutPage, getContactPage };
//#######d controller
