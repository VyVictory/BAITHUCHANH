const AboutController = (req, res)=>{
    let fileindex = 'main';
    let title = 'About Page';
    let body = 'about';
    return res.render(fileindex, {
        title: title,
        body: body
    });
}
export default AboutController;